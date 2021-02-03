from django.db import models
import re

# Create your models here.

class UserManager(models.Manager):
    def registration_validator(self, post_data):
        errors = {}

        NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
        if len(post_data['first_name']) < 2: 
            errors['first_name'] = "First name must be at least 2 characters."

        if not NAME_REGEX.match(post_data['first_name']):
            errors['first_name'] = "Please enter a valid first name."

        if len(post_data['last_name']) < 2:
            errors['last_name'] = "Last name must be at least 2 characters (letters)."

        if not NAME_REGEX.match(post_data['last_name']):
            errors['last_name'] = "Please enter a valid last name."

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['email']) == 0:
            errors['email'] = "Email is required."
        elif not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Please enter a valid email address."
        
        if len(post_data['password']) < 8:
            errors['password'] = "Password must be over 8 characters."

        if post_data['password'] != post_data['confirm_password']:
            errors['confirm_password'] = "Passwords entered do not match!"

        return errors

    def login_validator(self, post_data):
        login_errors = {}
        existing_user = User.objects.filter(email=post_data['email'])

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['login-email']):
            login_errors['login-email'] = "Please enter a valid email address."

        return login_errors

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

