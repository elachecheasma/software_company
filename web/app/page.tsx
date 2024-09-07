"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const heroButtonControls = useAnimation();
  const fixedButtonControls = useAnimation();

  useEffect(() => {
    if (inView) {
      heroButtonControls.start({ opacity: 1, y: 0 });
      fixedButtonControls.start({ opacity: 0, y: 50 });
    } else {
      heroButtonControls.start({ opacity: 0, y: 50 });
      fixedButtonControls.start({ opacity: 1, y: 0 });
    }
  }, [inView, heroButtonControls, fixedButtonControls]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero section */}
      <section className="bg-[#112365] text-white py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black opacity-30 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Revolutionize with AI Mastery
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-10 font-light"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Transforming Industries with Cutting-Edge Technology
              </motion.p>
              <motion.div
                ref={ref}
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
              >
                <motion.div animate={heroButtonControls} className="space-y-4">
                <Link 
  href="/chat" 
  className="waterfall-btn text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block relative"
>
  <span className="relative z-10">AI Project Manager</span>
</Link>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                alt="AI Technology Concept" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    
      {/* Solutions section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-800">Our Innovative Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'QuantumAI Optimizer', description: 'Revolutionize data processing with our quantum-powered AI solution.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb' },
              { title: 'NeuroCognitive Interface', description: 'Bridge human cognition and machine intelligence for unprecedented insights.', image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008' },
              { title: 'EcoSphere: Sustainable AI', description: 'Optimize resource management and reduce environmental impact with AI.', image: 'https://images.unsplash.com/photo-1473893604213-3df9c15611c0' },
              { title: 'CyberGuardian Pro', description: 'Stay ahead of cyber threats with our predictive AI security system.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' }
            ].map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={solution.image} alt={solution.title} width={600} height={300} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* New About Us section */}
      <section className="py-24 bg-gradient-to-b from-[#112365] to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About OSlicod
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              At OSlicod, we're not just another AI company. We're pioneers in blending cutting-edge AI with quantum computing to solve the most complex business challenges of our time.
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Industry-leading Solutions</h3>
                <p>AI solutions tailored to your unique business needs</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Quantum-powered Algorithms</h3>
                <p>Unparalleled performance for complex problem-solving</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Expert Team</h3>
                <p>Dedicated AI and quantum computing specialists</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Proven Track Record</h3>
                <p>Driving significant business growth for our clients</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link 
                href="/aboutus" 
                className="waterfall-btn bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block relative overflow-hidden"
              >
                <span className="relative z-10">Learn More About Us</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-blue-800">Our Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Advanced AI Integration', description: 'Seamlessly incorporate AI into your existing systems for enhanced efficiency.', icon: '🧠' },
              { title: 'Quantum Computing Solutions', description: 'Harness the power of quantum algorithms for complex problem-solving.', icon: '💻' },
              { title: 'Cybersecurity Intelligence', description: 'Protect your digital assets with our AI-driven security protocols.', icon: '🛡️' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border-b-4 border-blue-500">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Discover how our AI-powered solutions can revolutionize your operations and drive unprecedented growth.</p>
          <Link 
            href="/chat" 
            className="waterfall-btn bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block relative overflow-hidden"
          >
            <span className="relative z-10">Get Started Today</span>
          </Link>
        </div>
      </section>

      {/* Footer section */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About OSlicod</h4>
              <p>We are at the forefront of AI and quantum computing, driving innovation and solving complex challenges for businesses worldwide.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform, index) => (
                  <li key={index}><Link href="#" className="hover:text-orange-400 transition duration-300">{platform}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>1234 AI Innovation Drive, Tech Valley, CA 94000</p>
              <p>info@OSlicod.com</p>
              <p>+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 OSlicod. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Project Manager Button */}
      <motion.div 
        className="fixed z-50 right-4 bottom-4"
        initial={{ opacity: 0, y: 50 }}
        animate={fixedButtonControls}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link 
          href="/chat"
          className="waterfall-btn bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
        >
          <span className="relative z-10 mr-2">💬</span>
          <span className="relative z-10">AI Chat</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;