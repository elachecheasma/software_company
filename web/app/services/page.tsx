"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Unlock Your Potential with Our Cutting-Edge Software Services</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Discover how OSlicod can propel your business forward with our comprehensive suite of software solutions. From bespoke application development to robust system integrations, our tailored services address your unique needs and drive success.</p>
            <a href="#services" className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Explore Our Services</a>
          </div>
        </div>
      </section>

      {/* Our Services section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Services</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">At OSlicod, we offer a range of services to meet diverse business needs. Our expert team is dedicated to delivering solutions that not only meet but exceed expectations.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Custom Application Development",
                description: "Tailored Software to Fit Your Needs. We create bespoke applications designed specifically for your business requirements.",
                items: ["Web Applications", "Mobile Applications", "Desktop Software"],
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "System Integration",
                description: "Seamless Connections for Greater Efficiency. Our system integration services ensure that your software applications work harmoniously with existing systems.",
                items: ["API Integration", "Data Integration", "Legacy System Integration"],
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable and Flexible Cloud Services. Harness the power of the cloud with our scalable solutions.",
                items: ["Cloud Migration", "Cloud Infrastructure Management", "SaaS Solutions"],
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Software Consulting",
                description: "Expert Guidance for Strategic Decisions. Our consulting services provide you with the insights and expertise needed to make informed software decisions.",
                items: ["Technology Assessment", "Project Planning", "Strategy Development"],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Maintenance & Support",
                description: "Reliable Support to Keep You Running. We offer ongoing maintenance and support services to ensure that your software remains effective and up-to-date.",
                items: ["Bug Fixes & Updates", "Technical Support", "Performance Optimization"],
                image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={service.image} alt={service.title} width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">See Our Impact in Action</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Explore how we've helped businesses like yours achieve their goals with our software solutions. Our case studies and testimonials showcase the real-world impact of our work and the success we've delivered to our clients.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Case Study 1" width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">E-commerce Platform Overhaul</h3>
                <p className="text-gray-600 mb-4">How we helped a retail giant increase online sales by 200% through a complete digital transformation.</p>
                <Link href="/case-studies/1" className="text-blue-600 hover:underline">Read More</Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Case Study 2" width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">AI-Driven Supply Chain Optimization</h3>
                <p className="text-gray-600 mb-4">Implementing machine learning to reduce logistics costs by 30% for a global manufacturer.</p>
                <Link href="/case-studies/2" className="text-blue-600 hover:underline">Read More</Link>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">Client Testimonial</h3>
            <blockquote className="text-gray-600 text-center italic">"OSlicod's custom software solution has transformed our business operations, increasing efficiency by 40% and significantly improving our customer satisfaction rates."</blockquote>
            <p className="text-right mt-4 font-semibold">- John Doe, CEO of XYZ Company</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Let's discuss how our services can benefit your organization. Contact us today to schedule a consultation or get a custom quote. Our team is eager to partner with you and help you achieve your objectives.</p>
          <div className="space-x-4">
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Contact Us</Link>
            <Link href="/demo" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition duration-300 inline-block">Request a Demo</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Empowering businesses with innovative software solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Careers', 'Contact'].map((item) => (
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