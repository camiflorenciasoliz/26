from django.db import models

# Create your models here.

class Alumnos(models.Model):
    ID_Alumnos=models.AutoField(primary_key=True)
    DNI=models.TexField(max_lenght=10)
    Apellido=models.TexField(max_lenght=35)
    Edad=models.IntegerField()
    Calle=models. TextField(max_length=50)
    Altura=models.IntegerField()
