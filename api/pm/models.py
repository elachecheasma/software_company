from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from modules.ai_project_manager.rag import RAG
import os
import shutil

RAG_DATA_DIRECTORY = "/app/uploads/rag/"
RAG_INDEX_DIRECTORY = "/app/.rag_index/"


class Rag(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    file = models.FileField(upload_to='uploads/rag/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
        self.file.delete(save=False)


@receiver(post_save, sender=Rag)
def index_rag_file(sender, instance, created, **kwargs):
    rag = RAG(data_dir=RAG_DATA_DIRECTORY, index_dir=RAG_INDEX_DIRECTORY)
    rag.index_files()

@receiver(post_delete, sender=Rag)
def delete_rag_index(sender, instance, **kwargs):
    rag = RAG(data_dir=RAG_INDEX_DIRECTORY, index_dir=RAG_INDEX_DIRECTORY)
    rag.index_files()


class Conversation(models.Model):
    conversation = models.JSONField()
    temperature = models.FloatField(default=0.7)
    use_rag = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Conversation {self.id}"
