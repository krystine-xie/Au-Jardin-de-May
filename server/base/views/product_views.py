from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.products import products
from base.serializers import ProductSerializer
from base.models import Product

from rest_framework import status

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')

    if query == None: 
        query = ''

    products = Product.objects.filter(name__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(products, 12)

    try: 
        products = paginator.page(page)

    except PageNotAnInteger:
        products = paginator.page(1)

    except EmptyPage:
        # takes you to the last available page if user puts in a page that does not exist
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)


@api_view(['GET'])
def getLatestProducts(request):
    latest_products = Product.objects.order_by('-created_at')[0:5]

    serializer = ProductSerializer(latest_products, many=True)
    return Response(serializer.data)


#ADMIN VIEWS

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request): 
    data = request.data

    try:
        product = Product.objects.create(
            name = "Dummy Name",
            price = "0.00",
            category = "Arrangement",
            description = "",
            color = "Rainbow",
            count_in_stock = 0,
        )

        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)

    except:
        message = {'detail': 'Something went wrong'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data

    product_to_update = Product.objects.get(_id=pk)
    product_to_update.name = data['name']
    product_to_update.price = data['price']
    product_to_update.category = data['category']
    product_to_update.description = data['description']
    product_to_update.color = data['color']
    product_to_update.count_in_stock = data['count_in_stock']

    product_to_update.save()
    serializer = ProductSerializer(product_to_update, many=False)

    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product_to_delete = Product.objects.get(_id=pk)
    product_to_delete.delete()
    return Response("Product successfully deleted")



