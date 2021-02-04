from django.db import models
from accounts.models import User, ShippingAddress


# Create your models here.

class Order(model.Models): 
    ordered_by = models.ForeignKey(User, related_name="shopping_bag", on_delete=models.CASCADE)
    ship_to = models.ForeignKey(ShippingAddress, related_name="location_of", on_delete=models.CASCADE)
    charged_to = models.ForeignKey()
    

