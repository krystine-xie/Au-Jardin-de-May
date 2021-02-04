from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

import re

# Create your models here.

class UserManager(BaseUserManager): 
    def create_user(self, first_name, last_name, email, password=None):
        if not first_name:
            raise ValueError("First name is required.")

        if not last_name:
            raise ValueError("Last name is required.")

        if not email:
            raise ValueError("Email address is required.")

        user = self.model(
            email = self.normalize_email(email),
            first_name=first_name,
            last_name=last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, password): 
        user = self.create_user(
            email = self.normalize_email(email),
            password=password,
            first_name=first_name,
            last_name=last_name
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

# class UserManager(models.Manager):
#     def registration_validator(self, post_data):
#         errors = {}

#         NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
#         if len(post_data['first_name']) < 2: 
#             errors['first_name'] = "First name must be at least 2 characters."

#         if not NAME_REGEX.match(post_data['first_name']):
#             errors['first_name'] = "Please enter a valid first name."

#         if len(post_data['last_name']) < 2:
#             errors['last_name'] = "Last name must be at least 2 characters (letters)."

#         if not NAME_REGEX.match(post_data['last_name']):
#             errors['last_name'] = "Please enter a valid last name."

#         EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
#         if len(post_data['email']) == 0:
#             errors['email'] = "Email is required."
#         elif not EMAIL_REGEX.match(post_data['email']):
#             errors['email'] = "Please enter a valid email address."
        
#         if len(post_data['password']) < 8:
#             errors['password'] = "Password must be over 8 characters."

#         if post_data['password'] != post_data['confirm_password']:
#             errors['confirm_password'] = "Passwords entered do not match!"

#         return errors

#     def login_validator(self, post_data):
#         login_errors = {}
#         existing_user = User.objects.filter(email=post_data['email'])

#         EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
#         if not EMAIL_REGEX.match(post_data['login-email']):
#             login_errors['login-email'] = "Please enter a valid email address."

#         return login_errors

class User(AbstractBaseUser):
    first_name =        models.CharField(max_length=45)
    last_name =         models.CharField(max_length=45)
    email =             models.EmailField(verbose_name="email", max_length=60, unique=True)
    is_admin =          models.BooleanField(default=False)
    is_active =         models.BooleanField(default=True)
    is_staff =          models.BooleanField(default=False)
    is_superuser =      models.BooleanField(default=False)
    date_joined =       models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login =        models.DateTimeField(verbose_name='last login', auto_now=True)
    objects =           UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'first_name',
        'last_name',
    ]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    

