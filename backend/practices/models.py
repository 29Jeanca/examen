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
    explanation = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.text
    
class Step(models.Model):
    cont_practice = models.ForeignKey(ContPractice, related_name='steps', on_delete=models.CASCADE)
    text = models.TextField()
    explanation = models.TextField(blank=True, null=True)
    order = models.PositiveIntegerField()
    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.text