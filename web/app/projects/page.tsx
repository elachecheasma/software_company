"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Transforming Visions into Digital Realities</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Welcome to our hall of digital triumphs. Each project here is a testament to the power of innovation, the brilliance of collaboration, and the magic that happens when visionary ideas meet cutting-edge technology. Prepare to be inspired by the success stories we've co-authored with our clients.</p>
          </div>
        </div>
      </section>

      {/* Our Projects section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "AI-Powered Healthcare Platform", client: "MedTech Innovations", description: "Revolutionizing patient care with predictive analytics and personalized treatment plans.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { title: "Smart City Infrastructure", client: "MetroTech Solutions", description: "Implementing IoT sensors and AI to optimize traffic flow and reduce energy consumption.", image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { title: "E-commerce Recommendation Engine", client: "ShopSmart Inc.", description: "Boosting sales by 40% with our advanced machine learning algorithms for product recommendations.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { title: "Cybersecurity Defense System", client: "SecureNet Corp", description: "Protecting critical infrastructure with our AI-driven threat detection and response system.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{project.title}</h3>
                  <p className="text-gray-600 mb-4"><strong>Client:</strong> {project.client}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Quote section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Get a Custom Quote</h2>
          <p className="text-xl text-center mb-12">Ready to get started on your project? Fill out the form below to request a quote for your application or website. We'll provide a detailed estimate based on your requirements.</p>
          <form className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="project-type">Project Type</label>
              <select id="project-type" name="project-type" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>Mobile Application</option>
                <option>Web Application</option>
                <option>AI/ML Solution</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="budget">Budget Range</label>
              <select id="budget" name="budget" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>$10,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000+</option>
                <option>Not sure</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="timeline">Timeline</label>
              <select id="timeline" name="timeline" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>1-3 Months</option>
                <option>3-6 Months</option>
                <option>6+ Months</option>
                <option>Ongoing Project</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="details">Project Details</label>
              <textarea id="details" name="details" rows={6} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Request Quote</button>
          </form>
        </div>
      </section>

      {/* Pricing Plans section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Pricing Plans</h2>
          <p className="text-xl text-center mb-12">Choose from our range of pricing plans designed to meet various needs and budgets. Whether you're looking for basic features or premium solutions, we have a plan that fits.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Basic Plan", price: "$999/month", description: "Ideal for small businesses or startups. Includes essential features and support." },
              { title: "Standard Plan", price: "$2,499/month", description: "Suitable for growing businesses. Offers additional features and priority support." },
              { title: "Premium Plan", price: "$4,999/month", description: "Comprehensive plan for enterprises needing advanced features and dedicated support." },
              { title: "Custom Plan", price: "Custom", description: "Tailored solutions to meet specific requirements. Contact us to discuss your needs and get a custom quote." }
            ].map((plan, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <p className="text-gray-600 mb-8">{plan.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Transforming visions into digital realities.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
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