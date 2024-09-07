from django.core.management.base import BaseCommand
from modules.ai_project_manager.rag import RAG
import os

RAG_DATA_DIRECTORY = "/app/uploads/rag/"
RAG_INDEX_DIRECTORY = "/app/.rag_index/"

class Command(BaseCommand):
    help = 'Retrieve relevant sections from RAG documents based on a prompt'

    def add_arguments(self, parser):
        parser.add_argument('prompt', type=str, help='The prompt to search for in the RAG documents')

    def handle(self, *args, **options):
        prompt = options['prompt']
        
        if not os.path.exists(RAG_INDEX_DIRECTORY):
            self.stdout.write(self.style.ERROR('RAG index directory does not exist. Please ensure documents have been uploaded and indexed.'))
            return

        rag = RAG(data_dir=RAG_DATA_DIRECTORY, index_dir=RAG_INDEX_DIRECTORY)
        
        self.stdout.write(self.style.SUCCESS('Retrieving relevant sections from RAG documents based on a prompt'))
        list_all_documents = rag.list_all_documents()

        self.stdout.write(self.style.SUCCESS(f'List of all documents: {list_all_documents}'))
        results = rag.retrieve_information(prompt)

        self.stdout.write(self.style.SUCCESS(f'Files in RAG data directory: {os.listdir(RAG_DATA_DIRECTORY)}'))

        if not results:
            self.stdout.write(self.style.WARNING('No relevant sections found for the given prompt.'))
        else:
            self.stdout.write(self.style.SUCCESS('Relevant sections found:'))
            for i, result in enumerate(results, 1):
                self.stdout.write(f"\n--- Result {i} ---")
                self.stdout.write(f"Title: {result['title']}")
                self.stdout.write(f"Paragraph: {result['paragraph']}")
                self.stdout.write("-" * 50)
