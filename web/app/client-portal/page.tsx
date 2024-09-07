"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientPortal() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('Sign-up submitted:', formData);
    alert('Sign-up successful! Please check your email to verify your account.');
  };

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Join Our Client Portal</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Get access to exclusive features and manage your projects efficiently. Sign up today and experience the power of our platform.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-3xl shadow-2xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm">            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-amber-500 to-white-300 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Create Your Account</h2>
                <p className="mb-6">Join our community of innovators and take your projects to the next level.</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Advanced Project Management</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Real-time Collaboration Tools</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Exclusive Resource Library</li>
                </ul>
              </div>
              <div className="md:w-1/2 p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="firstName">First Name</label>
                    <input className="w-full px-3 py-2 bg-gray-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="lastName">Last Name</label>
                    <input className="w-full px-3 py-2 bg-gray-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email Address</label>
                    <input className="w-full px-3 py-2 bg-gray-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" id="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                    <input className="w-full px-3 py-2 bg-gray-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" id="password" type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="w-full px-3 py-2 bg-gray-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="company">Company (Optional)</label>
                    <input className="w-full px-3 py-2 bg-gray-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                  </div>
                  <div>
                    <button className="w-full px-4 py-2 text-white font-semibold bg-gradient-to-r from-teal-500 to-blue-500 rounded-md hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800" type="submit">
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Benefits of Joining Our Portal</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Project Management", description: "Efficiently manage and track your projects in real-time." },
              { title: "Resource Access", description: "Get exclusive access to our library of resources and tools." },
              { title: "Collaboration Tools", description: "Seamlessly collaborate with team members and stakeholders." },
              { title: "Priority Support", description: "Receive priority support from our dedicated customer service team." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { quote: "The client portal has revolutionized how we manage our projects. It's intuitive and powerful!", author: "John Doe, CEO of TechCorp", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { quote: "The resources available in the portal have been invaluable for our team's growth and learning.", author: "Jane Smith, CTO of InnovateCo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex items-center">
                <Image src={testimonial.image} alt={testimonial.author} width={80} height={80} className="rounded-full mr-6" />
                <div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-blue-600 font-semibold">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Join our client portal today and take your projects to the next level. Sign up now and experience the difference!</p>
          <Link href="#" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Create Your Account</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Empowering your projects with our client portal.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Partners', 'Contact'].map((item) => (
                  <li key={item}><Link href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((platform) => (
                  <li key={platform}><a href="#" className="hover:text-blue-400 transition duration-300">{platform}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>000, Z1 Kalâa Seghira 4021              </p>
              <p>maheramara32@yahoo.fr</p>
              <p>+(216) 26 254 253</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 OSlicod. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}