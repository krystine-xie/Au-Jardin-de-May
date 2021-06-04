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

    except PageNotAnInterger:
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

