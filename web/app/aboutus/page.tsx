"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Pioneering AI Excellence</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Discover the story, mission, and people behind OSlicod's revolutionary AI solutions.</p>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-800">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">Founded in 2019, OSlicod emerged from a team of passionate technologists with a shared vision to revolutionize industries through AI. Our journey began in a small garage, fueled by late-night coding sessions and an unwavering belief in the transformative potential of artificial intelligence.</p>
              <p className="text-lg mb-6">As we grew, so did our ambitions. We quickly realized that our unique approach to AI development could revolutionize industries far beyond our initial scope. From healthcare to finance, from environmental conservation to space exploration, we saw opportunities to make a lasting impact.</p>
              <p className="text-lg">Today, OSlicod stands at the forefront of AI innovation, continuously pushing the boundaries of what's possible. Our story is one of relentless pursuit of excellence, collaborative spirit, and a deep commitment to using technology as a force for good.</p>
            </div>
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="OSlicod Journey" width={600} height={400} className="rounded-lg shadow-xl" />
              <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-4 rounded-tl-lg">
                <p className="font-semibold">Est. 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-800">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl mb-8">Empowering Your Success: Our mission is clear: to empower businesses and individuals with software that enhances efficiency, user experience, and growth. We are committed to:</p>
            <ul className="text-left list-disc pl-6 space-y-4 mb-8">
              <li>Developing AI technologies that solve real-world problems and improve lives</li>
              <li>Fostering a culture of continuous learning and innovation</li>
              <li>Promoting ethical AI practices and responsible technology development</li>
              <li>Collaborating with partners across industries to drive digital transformation</li>
              <li>Inspiring the next generation of AI researchers and developers</li>
            </ul>
            <p className="text-xl italic">"We don't just build software; we shape the future of technology and society."</p>
          </div>
        </div>
      </section>

      {/* Our Team section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-800">Meet Our Team</h2>
          <p className="text-xl text-center mb-12">Meet the Minds Behind the Magic: Our team is our greatest asset. Comprising experts with diverse backgrounds and deep technical expertise, we push the limits of what's possible.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Emily Chen', role: 'Chief AI Scientist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', bio: 'With a Ph.D. in Machine Learning from MIT, Emily leads our AI research initiatives.' },
              { name: 'Michael Rodriguez', role: 'CTO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', bio: 'A veteran software architect with 20+ years of experience in building scalable systems.' },
              { name: 'Sarah Patel', role: 'Head of Ethics & Compliance', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', bio: 'Ensuring our AI solutions adhere to the highest ethical standards and regulations.' },
              { name: 'David Kim', role: 'Director of Innovation', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', bio: 'Spearheading our efforts to identify new applications for AI across industries.' },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 text-center">
                <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-800">Awards and Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AI Innovation of the Year', organization: 'Tech Innovators Association', year: '2023' },
              { title: 'Best AI Startup', organization: 'Silicon Valley Awards', year: '2022' },
              { title: 'Ethical AI Leadership', organization: 'Global AI Ethics Board', year: '2023' },
            ].map((award, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.organization}</p>
                <p className="text-sm text-gray-500">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team section */}
      <section className="py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Are you passionate about AI and want to make a difference? We're always looking for talented individuals to join our team.</p>
          <Link href="/careers" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Pioneering the future with advanced AI solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Solutions', 'Careers', 'Contact'].map((item) => (
                  <li key={item}><Link href={`/${item.toLowerCase()}`} className="hover:text-orange-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {['LinkedIn', 'Twitter', 'GitHub', 'Medium'].map((platform) => (
                  <li key={platform}><a href="#" className="hover:text-orange-400 transition duration-300">{platform}</a></li>
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
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 OSlicod. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}