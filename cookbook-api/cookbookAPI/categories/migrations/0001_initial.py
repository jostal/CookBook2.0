# Generated by Django 3.2.7 on 2021-09-13 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, primary_key=True)),
                ('description', models.TextField()),
                ('time_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
