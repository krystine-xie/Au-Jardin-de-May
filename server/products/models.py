from django.db import models

# Create your models here.

class ProductManager(models.Manager): 
    def product_validator(self, post_data):
        errors = {} 
        if len(post_data['title']) == 0:
            errors['title'] = "Title is required"
        elif len(post_data['title']) < 2:
            errors['title'] = "Title must be at least 2 characters"
        if len(post_data['price']) == 0:
            errors['price'] = "Price is required"
        elif len(post_data['price']) < 1:
            errors['price'] = "Price must be at least 1 characters"
        if len(post_data['description']) == 0:
            errors['description'] = "Description is required"
        elif len(post_data['description']) < 3:
            errors['description'] = "Description must be at least 3 characters"
        if len(post_data['stock']) == 0:
            errors['stock'] = "Stock number is required"

class Product(models.Model): 
    CATEGORY_CHOICES = (
        ("FA", "Flower Arrangement"),
        ("SC", "Succulent")
    )

    SIZE_CHOICES = (
        ("SM", "Small"), 
        ("MD", "Medium"), 
        ("LG", "Large")
    )

    title = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES, default=CATEGORY_CHOICES[0][0])
    size = models.CharField(max_length=2, choices=SIZE_CHOICES, default=SIZE_CHOICES[0][0])
    stock = models.IntegerField()
    image_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ProductManager()


