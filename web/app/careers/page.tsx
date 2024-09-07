"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Join Our Innovative Team</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">At OSlicod, we're shaping the future of AI. Join us in creating cutting-edge solutions that transform industries and improve lives.</p>
            <a href="#openings" className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">View Open Positions</a>
          </div>
        </div>
      </section>

      {/* Why Join Us section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Why Choose OSlicod?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Cutting-Edge Technology', description: 'Work with the latest AI and machine learning technologies.', icon: '🚀' },
              { title: 'Professional Growth', description: 'Continuous learning and development opportunities.', icon: '📈' },
              { title: 'Collaborative Culture', description: 'Join a team of passionate and innovative professionals.', icon: '🤝' },
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings section */}
      <section id="openings" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'AI Research Scientist', department: 'Research & Development', location: 'San Francisco, CA' },
              { title: 'Senior Software Engineer', department: 'Engineering', location: 'New York, NY' },
              { title: 'Data Scientist', department: 'Data Analytics', location: 'London, UK' },
              { title: 'UX/UI Designer', department: 'Design', location: 'Remote' },
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.department} | {job.location}</p>
                  <Link href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">What Our Team Says</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Sarah Chen', role: 'AI Engineer', quote: "Working at OSlicod has been an incredible journey. The challenges we tackle and the impact we make are truly inspiring.", image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
              { name: 'Michael Ross', role: 'Data Scientist', quote: "The collaborative environment and cutting-edge projects at OSlicod have accelerated my professional growth exponentially.", image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 flex items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="rounded-full mr-6" />
                <div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-gray-200">
              {[
                { title: 'Apply Online', description: 'Submit your application through our career portal.' },
                { title: 'Initial Screening', description: 'Our HR team reviews your application.' },
                { title: 'Technical Assessment', description: 'Complete a coding challenge or technical interview.' },
                { title: 'Team Interviews', description: 'Meet with potential team members and managers.' },
                { title: 'Offer', description: 'Receive and review our offer package.' },
              ].map((step, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Make an Impact?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Join our team of innovators and help shape the future of AI technology. Explore our open positions and take the next step in your career.</p>
          <a href="#openings" className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">View Open Positions</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Shaping the future with AI innovation.</p>
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
              <p>000, Z1 Kalâa Seghira 4021</p>
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