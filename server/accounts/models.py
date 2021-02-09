from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver 
from rest_framework.authtoken.models import Token

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
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

# when user is created, a token is generated for that user 
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

