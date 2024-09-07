"use client";
import React from 'react';
import Link from 'next/link';

const SocialMediaMarketing = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Engage with Your Audience</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Boost Your Online Presence with Strategic Marketing</p>
          </div>
        </div>
      </section>

      {/* Introduction section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Leverage our expertise in social media marketing to enhance your brand's visibility and engagement. We create tailored strategies to connect with your target audience and drive results.</p>
        </div>
      </section>

      {/* Social Media Strategies section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Crafting Winning Strategies</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Develop effective social media strategies that align with your business goals. Our approach includes content creation, audience targeting, and performance analysis to maximize your social media impact.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Content Creation</h3>
              <p className="text-gray-600">Develop engaging and shareable content that resonates with your audience and reinforces your brand message.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Audience Targeting</h3>
              <p className="text-gray-600">Identify and reach your ideal audience through data-driven insights and platform-specific targeting options.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Performance Analysis</h3>
              <p className="text-gray-600">Track and analyze your social media performance to continuously refine and improve your strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Campaigns section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Reach Your Audience with Precision</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Launch targeted advertising campaigns to reach potential customers and drive conversions. Our team designs and manages ads across various platforms to ensure optimal performance.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Platform-Specific Campaigns</h3>
              <p className="text-gray-600 mb-4">Tailor your advertising campaigns for each social media platform, leveraging their unique features and audience demographics.</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Facebook & Instagram Ads</li>
                <li>Twitter Advertising</li>
                <li>LinkedIn Campaigns</li>
                <li>TikTok Ads</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Ad Creative & Copywriting</h3>
              <p className="text-gray-600 mb-4">Create compelling ad visuals and copy that capture attention and drive action.</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Eye-catching graphics and videos</li>
                <li>Persuasive ad copy</li>
                <li>A/B testing for optimization</li>
                <li>Brand-consistent messaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Platforms We Specialize In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Pinterest', 'YouTube', 'Snapchat'].map((platform) => (
              <div key={platform} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-blue-600">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "E-commerce Brand Boost", result: "300% increase in social media-driven sales" },
              { title: "B2B Lead Generation", result: "150% growth in qualified leads from LinkedIn" },
              { title: "Local Business Exposure", result: "5x increase in foot traffic from Facebook ads" }
            ].map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.result}</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read Full Case Study →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Social Media Presence?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Let's create a tailored social media strategy that drives results for your business.</p>
          <Link href="#" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Get Started Today</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Empowering brands through strategic social media marketing.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Social Media Strategy', 'Content Creation', 'Advertising Campaigns', 'Analytics & Reporting'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Case Studies', 'Whitepapers', 'Webinars'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Social Street, Digital City, DC 12345</p>
              <p>info@OSlicod.com</p>
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

export default SocialMediaMarketing;