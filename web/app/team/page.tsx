"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Meet Our Team</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">The Passionate Experts Driving Innovation</p>
          </div>
        </div>
      </section>

      {/* Team Introduction section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Talented Professionals</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Our team of professionals brings a wealth of expertise and a passion for technology to every project. Get to know the talented individuals who are dedicated to delivering exceptional software solutions.</p>
        </div>
      </section>

      {/* Team Bios section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Team Bios</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "John Doe", role: "CEO", bio: "Leading with vision and expertise, John drives the company's strategic direction and growth.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "Jane Smith", role: "Lead Developer", bio: "Expert in full-stack development, Jane ensures top-quality development and innovation.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "Mike Johnson", role: "Design Lead", bio: "Creative visionary behind our intuitive and engaging user interfaces.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "Sarah Lee", role: "Project Manager", bio: "Ensuring smooth project execution and client satisfaction with her exceptional organizational skills.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "Alex Chen", role: "AI Specialist", bio: "Pioneering our AI initiatives and driving cutting-edge solutions for our clients.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "Emily Brown", role: "UX Researcher", bio: "Crafting user-centric designs through in-depth research and analysis.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{member.name}</h3>
                  <p className="text-gray-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team in Action section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Team in Action</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Learn more about our team's achievements, contributions, and roles within the company. Each member plays a vital role in our success and the delivery of high-quality software solutions.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Innovative AI Solution", description: "Our AI team, led by Alex Chen, developed a groundbreaking machine learning algorithm that increased client efficiency by 40%." },
              { title: "Award-Winning UX Design", description: "Emily Brown's user research led to a complete redesign of our flagship product, earning us the 'Best UX Design' award at TechExpo 2023." },
              { title: "Record-Breaking Project Delivery", description: "Under Sarah Lee's management, we completed a complex enterprise software implementation 2 months ahead of schedule." },
              { title: "Open Source Contribution", description: "Jane Smith led our team in contributing to a major open-source project, enhancing our reputation in the developer community." }
            ].map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Team Culture</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Innovation", description: "We foster a culture of continuous learning and innovation, encouraging our team to explore new technologies and methodologies." },
              { title: "Collaboration", description: "Our open and inclusive work environment promotes collaboration and the free exchange of ideas across all levels." },
              { title: "Work-Life Balance", description: "We believe in the importance of work-life balance, offering flexible working arrangements and wellness programs." }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Are you passionate about technology and innovation? We're always looking for talented individuals to join our team and help shape the future of software development.</p>
          <Link href="/careers" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">View Open Positions</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Driving innovation with passionate experts.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Team', 'Careers', 'Contact'].map((item) => (
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