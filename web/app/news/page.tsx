"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsUpdates() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Stay Informed</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Latest News and Updates from Our Company</p>
          </div>
        </div>
      </section>

      {/* News Introduction section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Keep up with the latest news and developments at OSlicod. Our news updates cover company announcements, new product launches, and significant milestones.</p>
        </div>
      </section>

      {/* Latest News section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "OSlicod Launches Revolutionary AI Platform", date: "May 15, 2024", excerpt: "Our new AI platform is set to transform the industry with its innovative features and unparalleled performance.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
              { title: "Partnership Announcement: OSlicod Teams Up with Tech Giant", date: "April 28, 2024", excerpt: "We're excited to announce our strategic partnership with a leading tech company to drive innovation in software development.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
              { title: "OSlicod Recognized as Top Employer in Tech", date: "March 10, 2024", excerpt: "We're proud to be named one of the best places to work in the tech industry, thanks to our commitment to employee growth and well-being.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={news.image} alt={news.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.date}</p>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the Media section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">In the Media</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Find us featured in leading news websites and apps. Explore articles and reports highlighting our achievements and industry contributions.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { source: "TechCrunch", title: "OSlicod's Innovative Approach to AI Development", link: "#" },
              { source: "Forbes", title: "How OSlicod is Reshaping the Software Industry", link: "#" },
              { source: "The Verge", title: "OSlicod's New Product Set to Disrupt the Market", link: "#" },
              { source: "Wired", title: "Inside OSlicod's Cutting-Edge Development Process", link: "#" }
            ].map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <p className="text-gray-600 mb-2">{article.source}</p>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{article.title}</h3>
                <Link href={article.link} className="text-blue-600 hover:text-blue-800 font-semibold">Read Article →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Press Releases</h2>
          <div className="space-y-8">
            {[
              { title: "OSlicod Secures $50 Million in Series B Funding", date: "June 1, 2024" },
              { title: "OSlicod Expands Operations to Europe", date: "May 20, 2024" },
              { title: "OSlicod Achieves ISO 27001 Certification", date: "April 15, 2024" }
            ].map((release, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.date}</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read Full Release →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Subscribe for Updates</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Sign up for our newsletters to receive updates, insights, and exclusive content directly to your inbox. Stay connected and informed about our latest news and offerings.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900" />
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
              <p>Staying at the forefront of technology and innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'News', 'Contact'].map((item) => (
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