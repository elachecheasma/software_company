"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Partners() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Building Strong Alliances for Mutual Success</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">We're proud to collaborate with leading companies and organizations to deliver exceptional solutions. Our partnerships help us enhance our offerings and drive innovation.</p>
          </div>
        </div>
      </section>

      {/* Our Valued Partners section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Valued Partners</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Here's a list of our esteemed partners. Each partnership plays a crucial role in our ability to provide cutting-edge solutions and exceptional service.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "TechInnovate", description: "Collaborating on cutting-edge AI solutions for enterprise clients.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "CloudMasters", description: "Partnering to deliver robust cloud infrastructure and services.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "DataDynamics", description: "Joint development of advanced data analytics platforms.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "SecureNet", description: "Collaboration on state-of-the-art cybersecurity solutions.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "IoT Pioneers", description: "Co-creating innovative Internet of Things applications.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { name: "AI Research Institute", description: "Academic partnership for groundbreaking AI research and development.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
            ].map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={partner.image} alt={partner.name} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Benefits of Partnering with Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Innovation Synergy", description: "Collaborate on cutting-edge projects and drive industry innovation." },
              { title: "Market Expansion", description: "Gain access to new markets and customer segments through our network." },
              { title: "Technological Expertise", description: "Leverage our advanced technological capabilities and knowledge." },
              { title: "Co-marketing Opportunities", description: "Benefit from joint marketing initiatives and increased brand visibility." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Articles section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Partnership Insights and Achievements</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Read about the latest developments and achievements in our partnerships. These articles provide insights into how our collaborations are driving progress and innovation.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "AI Breakthrough: OSlicod and TechInnovate's Latest Collaboration", excerpt: "Exploring the groundbreaking AI solution developed through our partnership with TechInnovate.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { title: "Revolutionizing Cloud Security with CloudMasters", excerpt: "How our partnership with CloudMasters is setting new standards in cloud infrastructure security.", image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { title: "Data-Driven Insights: The Power of Our DataDynamics Partnership", excerpt: "Discover how our collaboration with DataDynamics is transforming big data analytics.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { title: "IoT Innovation: OSlicod and IoT Pioneers Pave the Way", excerpt: "Learn about the cutting-edge IoT applications emerging from our partnership with IoT Pioneers.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
            ].map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={article.image} alt={article.title} width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{article.title}</h3>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">What Our Partners Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { quote: "Our partnership with OSlicod has been instrumental in driving our AI initiatives forward. Their expertise and collaborative approach have been invaluable.", author: "Jane Doe, CTO of TechInnovate", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" },
              { quote: "OSlicod's cloud solutions have significantly enhanced our service offerings. They're not just a partner, but an extension of our team.", author: "John Smith, CEO of CloudMasters", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex items-center">
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
          <h2 className="text-4xl font-bold mb-8">Interested in Partnering with Us?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">If you're looking to collaborate on innovative projects or want to explore partnership opportunities, we'd love to hear from you.</p>
          <Link href="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Contact Us for Partnerships</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Building strong alliances for mutual success.</p>
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