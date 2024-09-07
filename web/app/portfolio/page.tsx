"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const projects = [
    {
      name: "E-commerce Platform Overhaul",
      client: "TechRetail Inc.",
      description: "Redesigned and optimized a large-scale e-commerce platform, resulting in a 40% increase in conversion rates and improved user experience.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "AI-Powered Customer Service Bot",
      client: "GlobalSupport Co.",
      description: "Developed an intelligent chatbot using natural language processing, reducing customer service response times by 60% and handling 80% of routine inquiries.",
      technologies: ["Python", "TensorFlow", "DialogFlow", "Google Cloud"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80"
    },
    {
      name: "Blockchain-based Supply Chain Solution",
      client: "LogiChain Systems",
      description: "Implemented a blockchain solution for supply chain management, increasing transparency and reducing fraud by 90% in the first year of operation.",
      technologies: ["Ethereum", "Solidity", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
       
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Showcasing Our Innovations</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Explore our portfolio to see a selection of the projects we've successfully delivered.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Each case study highlights our ability to turn complex challenges into innovative solutions, demonstrating our expertise across various industries and technologies.</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={project.image} alt={project.name} width={600} height={400} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{project.name}</h3>
                  <p className="text-gray-600 mb-4">Client: {project.client}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read Full Case Study →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['E-commerce', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Logistics', 'Real Estate', 'Technology'].map((industry) => (
              <div key={industry} className="bg-gray-100 rounded-xl p-6 text-center hover:bg-blue-100 transition duration-300">
                <h3 className="text-xl font-semibold text-blue-600">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "John Doe", position: "CTO, TechRetail Inc.", quote: "OSlicod's innovative solutions transformed our e-commerce platform, leading to significant improvements in user experience and sales." },
              { name: "Jane Smith", position: "CEO, GlobalSupport Co.", quote: "The AI-powered chatbot developed by OSlicod revolutionized our customer service, allowing us to provide faster and more efficient support." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-blue-600 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Bring Your Project to Life?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Let's collaborate to turn your vision into reality. Our team of experts is ready to tackle your unique challenges.</p>
          <Link href="#" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Start Your Project</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Innovative solutions for complex challenges.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'AI Solutions', 'Blockchain'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
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
};

export default Portfolio;