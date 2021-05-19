from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from base.serializers import ProductSerializer, OrderSerializer
from base.models import Product, Order, OrderItem, ShippingAddress

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request): 
    user = request.user
    data = request.data

    orderItems = data['orderItems']
    print(orderItems)
    print(data['shippingAddress'])
    # print(data['shippingPrice']) 

    if orderItems and len(orderItems) == 0:
        message = {'detail': 'No Order Items Listed'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    else: 
        # create order
        order = Order.objects.create(
            user = user, 
            payment_method = data['paymentMethod'], 
            shipping_price = data['shippingPrice'], #BUG TO FIX 
            tax_price = data['tax'], 
            total_price = data['totalPrice']
        )

        # create shipping address
        shipping = ShippingAddress.objects.create(
            order = order, 
            address = data['shippingAddress']['address'],
            city = data['shippingAddress']['city'],
            state = data['shippingAddress']['state'],
            zip_code = data['shippingAddress']['zipCode'], 
            country = data['shippingAddress']['country'],
        )
        
        # create order items and set order to order item relationship
        for i in orderItems:
            product = Product.objects.get(_id=i['product'])
            item = OrderItem.objects.create(
                product=product, 
                order=order, 
                name=product.name,
                quantity=i['quantity'],
                price=i['price'], 
                image=product.image
            )

            #updating the stock

            product.count_in_stock -= item.quantity
            product.save()

        serializer = OrderSerializer(order, many=False)

        return Response(serializer.data)


