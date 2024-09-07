"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Resources = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Stay updated with the latest insights</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Access a wealth of information on various topics related to our services, technologies, and best practices.</p>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Blog</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Our blog features the latest news, updates, and insights from the world of technology and software development. Stay informed and engaged with our expert articles and industry trends.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "The future of AI in software development", date: "June 15, 2024", excerpt: "Explore how AI is revolutionizing the software development process and what it means for developers and businesses.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
              { title: "5 best practices for cloud security", date: "June 10, 2024", excerpt: "Learn essential strategies to keep your cloud infrastructure secure and protect your valuable data.", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" },
              { title: "The rise of low-code development platforms", date: "June 5, 2024", excerpt: "Discover how low-code platforms are changing the landscape of software development and empowering citizen developers.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
            ].map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.date}</p>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:text-blue-800 font-semibold">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 inline-block">View all blog posts</Link>
          </div>
        </div>
      </section>

      {/* Knowledge Base section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Knowledge base</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Access a wealth of information on various topics related to our services, technologies, and best practices. Our knowledge base provides answers to frequently asked questions and detailed guides.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Getting started with our services", description: "A comprehensive guide to help you begin using our software solutions effectively." },
              { title: "Troubleshooting common issues", description: "Step-by-step instructions to resolve frequently encountered problems." },
              { title: "API documentation", description: "Detailed documentation for integrating our services into your applications." },
              { title: "Best practices for software development", description: "Industry-standard practices to improve your development process and code quality." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={`/knowledge-base/${item.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:text-blue-800 font-semibold">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Webinars</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Join our live webinars or view past sessions to gain valuable insights and learn about the latest trends and technologies. Our webinars cover a range of topics designed to help you stay ahead in the industry.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "The impact of 5G on IoT development", date: "June 20, 2024", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
              { title: "Mastering microservices architecture", date: "June 25, 2024", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
              { title: "Cybersecurity in the age of AI", date: "June 30, 2024", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
            ].map((webinar, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={webinar.image} alt={webinar.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.date}</p>
                  <Link href={`/webinars/${webinar.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:text-blue-800 font-semibold">Register now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Case studies</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Explore detailed case studies showcasing our work with clients across different industries. Learn how we've tackled challenges and delivered impactful solutions.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Revolutionizing healthcare with AI", client: "MedTech Innovations", industry: "Healthcare" },
              { title: "Scaling e-commerce operations", client: "Global Retail Co.", industry: "Retail" },
              { title: "Optimizing supply chain with IoT", client: "LogisTech Solutions", industry: "Logistics" },
              { title: "Enhancing cybersecurity for financial services", client: "SecureBank", industry: "Finance" }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{study.title}</h3>
                <p className="text-gray-600 mb-2">Client: {study.client}</p>
                <p className="text-gray-600 mb-4">Industry: {study.industry}</p>
                <Link href={`/case-studies/${study.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:text-blue-800 font-semibold">Read case study →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Whitepapers</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Download our whitepapers to delve into comprehensive research and analysis on key industry topics. Our whitepapers provide valuable information and thought leadership on emerging trends and technologies.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "The future of edge computing", description: "An in-depth look at how edge computing is reshaping the technology landscape." },
              { title: "Blockchain in enterprise: Beyond cryptocurrencies", description: "Exploring practical applications of blockchain technology in various industries." },
              { title: "AI ethics and governance", description: "A comprehensive guide to navigating the ethical challenges of AI implementation." }
            ].map((whitepaper, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{whitepaper.title}</h3>
                <p className="text-gray-600 mb-4">{whitepaper.description}</p>
                <Link href={`/whitepapers/${whitepaper.title.toLowerCase().replace(/ /g, '-')}`} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block">Download</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Stay informed</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Subscribe to our newsletter to receive the latest resources, insights, and updates directly in your inbox.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900" />
              <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 transition duration-300">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Empowering through knowledge and innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Resources', 'Contact'].map((item) => (
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
              <h4 className="text-lg font-semibold mb-4">Contact us</h4>
              <p>123 Tech Street, Innovation City, IC 12345</p>
              <p>support@OSlicod.com</p>
              <p>+1 (800) 123-4567</p>
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

export default Resources;