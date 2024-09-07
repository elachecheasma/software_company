"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-purple-100">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">We're Here to Support Your AI Journey</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Whether you have questions or want to explore how our AI solutions can enhance your business, we're here to help.</p>
          </div>
        </div>
      </section>

      {/* Contact Information section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Email Us', info: 'maheramara32@yahoo.fr', icon: '✉️' },
              { title: 'Call Us', info: '26 254 253', icon: '📞' },
              { title: 'Visit Us', info: 'OSlicod Company', icon: '🏢' },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg p-8 text-center border-2 border-indigo-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-700">{item.title}</h3>
                <p className="text-gray-700">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map section */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-sky-900">
        <div className="container mx-auto px-10">
          <div className="max-w-6xl mx-auto bg-white rounded-xxl shadow-1xl p-8 border-4 border-indigo-600">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-indigo-900">How Can We Help?</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">Message</label>
                    <textarea id="message" name="message" rows={6} className="w-full px-4 py-2 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required></textarea>
                  </div>
                  <button type="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-lg">Send Message</button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-indigo-900">Our Location</h2>
                <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg shadow-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12957.137508377!2d10.5453!3d35.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212b61f7e8c3b%3A0x8f3f3b4a0a4b8e0!2sKala%C3%A2%20Seghira!5e0!3m2!1sen!2stn!4v1650000000000!5m2!1sen!2stn" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { question: "What industries do you serve?", answer: "We serve a wide range of industries including healthcare, finance, retail, and manufacturing. Our AI solutions are adaptable to various business needs." },
              { question: "Do you offer custom AI solutions?", answer: "Yes, we specialize in developing custom AI solutions tailored to your specific business needs and challenges." },
              { question: "Can you integrate AI with our existing systems?", answer: "Absolutely. Our team is experienced in seamlessly integrating AI solutions with existing infrastructure, ensuring minimal disruption and maximum efficiency." },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-6 border-2 border-indigo-300 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p className="text-gray-300">Empowering businesses with AI innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <li key={item}><Link href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                {['LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                  <li key={platform}><Link href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">{platform}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}><Link href="#" className="text-gray-300 hover:text-indigo-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2024 OSlicod. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;