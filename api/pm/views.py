from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Conversation
from .serializers import ConversationSerializer
from modules.ai_project_manager.inference import Llama31Inference
import os

class ChatCompletionViewSet(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    
    @action(detail=False, methods=['POST'])
    def chat_completion(self, request):
        conversation = request.data.get('conversation', [])
        temperature = request.data.get('temperature', 0.7)
        use_rag = request.data.get('use_rag', True)
        
        from django.conf import settings
        hf_token = settings.HF_TOKEN
        
        # llama_inference = Llama31Inference(hf_token=hf_token)
        
        # response = llama_inference.chat_completion(
        #     conversation=conversation,
        #     temperature=temperature,
        #     use_rag=use_rag
        # )

        # ToDo: remove stubbed response
        response = {
                "role": "assistant",
                "content": "stubbed response"
            }
        
        return Response({'response': response})
