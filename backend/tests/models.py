from django.db import models
from django.contrib.auth.models import User

class Test(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    category = models.CharField(max_length=50)
    image = models.TextField()

    def __str__(self):
        return self.title

class Question(models.Model):
    test = models.ForeignKey(Test, related_name='questions', on_delete=models.CASCADE)
    text = models.TextField()
    type = models.CharField(
        max_length=10,
        choices=[
            ('UNICA', 'Opción única'),
            ('MULTIPLE', 'Opción múltiple'),
            ('ABIERTA', 'Respuesta abierta')
        ],
        default='UNICA'
    )

    def __str__(self):
        return self.text

class Option(models.Model):
    question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
    test = models.ForeignKey(Test, related_name='options', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.text} ({'Correcta' if self.is_correct else 'Incorrecta'})"

class UserAnswer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    options = models.ManyToManyField(Option, blank=True)
    open_answer = models.TextField(blank=True, null=True)
    answer_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Respuesta de {self.user.username} a '{self.question.text}'"
