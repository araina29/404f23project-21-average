# Generated by Django 4.2.4 on 2023-11-25 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socialDistribution', '0018_commentlike_context_commentlike_object_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='categories',
            field=models.TextField(blank=True, default='web', null=True),
        ),
    ]