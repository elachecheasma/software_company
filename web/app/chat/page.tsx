"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProjectPage = () => {
  const [projectMessages, setProjectMessages] = useState<{ role: string; content: string; timestamp: Date }[]>([
    { role: 'assistant', content: 'Welcome! I\'m your AI Project Manager. How can I assist you with your project today?', timestamp: new Date() }
  ]);
  const [generalMessages, setGeneralMessages] = useState<{ role: string; content: string; timestamp: Date }[]>([
    { role: 'assistant', content: 'Hello! I\'m your general AI assistant. How can I help you?', timestamp: new Date() }
  ]);
  const [projectInput, setProjectInput] = useState('');
  const [generalInput, setGeneralInput] = useState('');
  const [isProjectGenerating, setIsProjectGenerating] = useState(false);
  const [isGeneralGenerating, setIsGeneralGenerating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const projectMessagesEndRef = useRef<HTMLDivElement>(null);
  const generalMessagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectInput.trim()) {
      const newMessage = { role: 'user', content: projectInput, timestamp: new Date() };
      setProjectMessages(prev => [...prev, newMessage]);
      setProjectInput('');
      setIsProjectGenerating(true);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setIsProjectGenerating(false);
        setProjectMessages(prev => [...prev, { 
          role: 'assistant', 
          content: `I understand you're asking about "${projectInput}" for your project. How can I provide more specific assistance?`, 
          timestamp: new Date() 
        }]);
      }, 2000);
    }
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (generalInput.trim()) {
      const newMessage = { role: 'user', content: generalInput, timestamp: new Date() };
      setGeneralMessages(prev => [...prev, newMessage]);
      setGeneralInput('');
      setIsGeneralGenerating(true);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setIsGeneralGenerating(false);
        setGeneralMessages(prev => [...prev, { 
          role: 'assistant', 
          content: `Regarding "${generalInput}", here's what I can tell you...`, 
          timestamp: new Date() 
        }]);
      }, 2000);
    }
  };

  useEffect(() => {
    projectMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    generalMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [projectMessages, generalMessages]);

  const projectHistory = [
    { id: '1', title: 'E-commerce Platform', date: '2023-05-01' },
    { id: '2', title: 'Task Management App', date: '2023-05-05' },
    { id: '3', title: 'Social Media Dashboard', date: '2023-05-10' },
    { id: '4', title: 'Fitness Tracking System', date: '2023-05-15' },
    { id: '5', title: 'Online Learning Platform', date: '2023-05-20' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => router.back()} 
            className="text-white hover:text-blue-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button onClick={() => router.push("/")} className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            OSlicod
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {/* Add help/documentation logic here */}}
            className="text-white hover:text-blue-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button
            onClick={() => {/* Add login logic here */}}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </nav>

      <div className="flex flex-grow overflow-hidden p-4 space-x-4">
        {/* Left Side - Project History and AI Chat */}
        <div className="flex-1 flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          {/* Project History */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4">
            <h2 className="text-lg font-semibold text-blue-100">Project Insights</h2>
          </div>
          <div className="overflow-auto p-4 bg-gray-900" style={{maxHeight: '30%'}}>
            <div className="space-y-2">
              {projectHistory.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedProject === project.id ? 'bg-blue-900 shadow-md' : 'hover:bg-gray-800'
                  }`}
                >
                  <h3 className="font-medium text-blue-300">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.date}</p>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>Tasks: 12/20</span>
                    <span>Progress: 60%</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project AI Chat */}
          <div className="flex-grow flex flex-col">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4">
              <h2 className="text-xl font-semibold text-blue-100">Project AI Assistant</h2>
            </div>
            <div className="flex-grow overflow-auto p-6 bg-gray-900">
              {projectMessages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-4 rounded-lg max-w-[80%] ${
                    message.role === 'user' 
                      ? 'bg-blue-700 text-white' 
                      : 'bg-gray-800 text-gray-100 border border-gray-700'
                  }`}>
                    <p className="mb-1">{message.content}</p>
                    <p className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isProjectGenerating && (
                <div className="text-left mb-4">
                  <div className="inline-block p-4 rounded-lg bg-gray-800">
                    <p className="text-blue-300">AI is processing...</p>
                    <div className="mt-2 flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={projectMessagesEndRef} />
            </div>
            <div className="bg-gray-800 border-t border-gray-700 p-4">
              <form onSubmit={handleProjectSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={projectInput}
                  onChange={(e) => setProjectInput(e.target.value)}
                  placeholder="Ask about your project..."
                  className="flex-grow p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">Send</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - General AI Chat */}
        <div className="flex-1 flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-orange-700">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
            <h2 className="text-xl font-semibold text-white">General AI Assistant</h2>
          </div>
          <div className="flex-grow overflow-auto p-6 bg-gray-800">
            {generalMessages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-4 rounded-lg max-w-[80%] ${
                  message.role === 'user' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-700 text-gray-100 border border-orange-500'
                }`}>
                  <p className="mb-1">{message.content}</p>
                  <p className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isGeneralGenerating && (
              <div className="text-left mb-4">
                <div className="inline-block p-4 rounded-lg bg-gray-700">
                  <p className="text-orange-300">AI is processing...</p>
                  <div className="mt-2 flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={generalMessagesEndRef} />
          </div>
          <div className="bg-gray-800 border-t border-orange-700 p-4">
            <form onSubmit={handleGeneralSubmit} className="flex space-x-4">
              <input
                type="text"
                value={generalInput}
                onChange={(e) => setGeneralInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-grow p-3 border border-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-white"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors flex items-center justify-center"
              >
                <span className="mr-2">Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;