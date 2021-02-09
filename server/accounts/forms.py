from django import forms
from django.contrib.auth.forms import UserCreationForm

from accounts.models import User

class RegistrationForm(UserCreationForm):
    first_name = forms.EmailField(max_length=45, help_text='Required. Add a first name.')
    last_name = forms.EmailField(max_length=45, help_text='Required. Add a last name.')
    email = forms.EmailField(max_length=60, help_text='Required. Add a valid email address')

    class Meta:
        model = User
        fields = ("email", "first_name", "last_name", "password", "confirm_password")

