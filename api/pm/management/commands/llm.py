from django.core.management.base import BaseCommand
from modules.ai_project_manager.inference import Llama31Inference
import os
import json
from django.conf import settings

RAG_DATA_DIRECTORY = "/app/uploads/rag/"
RAG_INDEX_DIRECTORY = "/app/.rag_index/"

class Command(BaseCommand):
    help = 'Interact with the Llama 3.1 model using RAG-enhanced prompts'

    def add_arguments(self, parser):
        parser.add_argument('prompt', type=str, help='The prompt for the LLM')
        parser.add_argument('--temperature', type=float, default=0.7, help='Temperature for text generation')
        parser.add_argument('--no-rag', action='store_true', help='Disable RAG for this interaction')

    def handle(self, *args, **options):
        prompt = options['prompt']
        temperature = options['temperature']
        use_rag = not options['no_rag']
        
        if use_rag and not os.path.exists(RAG_INDEX_DIRECTORY):
            self.stdout.write(self.style.ERROR('RAG index directory does not exist. Please ensure documents have been uploaded and indexed.'))
            return

        hf_token = settings.HF_TOKEN
        if not hf_token:
            self.stdout.write(self.style.ERROR('HF_TOKEN is not set in Django settings.'))
            return

        llm = Llama31Inference(hf_token=hf_token, rag_data_dir=RAG_DATA_DIRECTORY)
        
        conversation = [
            {"role": "system", "content": "You are a helpful project management assistant."},
            {"role": "user", "content": prompt}
        ]

        self.stdout.write(self.style.SUCCESS('Generating response from Llama 3.1 model'))
        llm_response = llm.chat_completion(conversation, temperature=temperature, use_rag=use_rag)

        self.stdout.write(self.style.SUCCESS('Llama 3.1 Response:'))
        self.stdout.write(llm_response)

        # Store the conversation for future reference
        self.store_conversation(prompt, llm_response)

    def store_conversation(self, prompt, response):
        conversation = {
            'prompt': prompt,
            'response': response
        }
        conversation_file = os.path.join(RAG_DATA_DIRECTORY, 'conversations.json')
        
        if os.path.exists(conversation_file):
            with open(conversation_file, 'r+') as f:
                conversations = json.load(f)
                conversations.append(conversation)
                f.seek(0)
                json.dump(conversations, f, indent=2)
        else:
            with open(conversation_file, 'w') as f:
                json.dump([conversation], f, indent=2)

        self.stdout.write(self.style.SUCCESS('Conversation stored successfully'))
