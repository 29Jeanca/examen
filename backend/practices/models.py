from django.db import models

# Create your models here.
class Practice(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    image = models.TextField()
    category = models.CharField(
        max_length=50,
        choices=[
            ('LÓGICA MATEMÁTICA', 'Lógica Matemática'),
            ('RAZONAMIENTO VERBAL', 'Razonamiento Verbal'),
        ],
    )

    def __str__(self):
        return self.title
    
class ContPractice(models.Model):
    practice = models.ForeignKey(Practice, related_name='cont_practice', on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return self.text