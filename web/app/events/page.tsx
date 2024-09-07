"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Events = () => {
  const upcomingEvents = [
    { name: "Tech Trends 2024", date: "March 15, 2024", location: "Virtual Webinar", description: "Explore the latest technology trends shaping the industry in 2024.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { name: "AI in Business Conference", date: "April 22-23, 2024", location: "Tech Center, Innovation City", description: "A two-day conference on integrating AI into business processes.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { name: "Coding Workshop: Advanced React", date: "May 10, 2024", location: "OSlicod HQ", description: "Hands-on workshop for developers looking to master advanced React concepts.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  ];

  const pastEvents = [
    { name: "Cloud Computing Symposium", date: "November 5, 2023", description: "Insights on cloud migration and optimization strategies.", recordingLink: "#", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" },
    { name: "Cybersecurity Forum", date: "December 12, 2023", description: "Expert panel on the latest cybersecurity threats and defenses.", recordingLink: "#", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32 relative overflow-hidden">
       
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Join Us for Exciting Events</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Stay informed about our upcoming events and promotions.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={event.image} alt={event.name} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{event.name}</h3>
                  <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
                  <p className="text-gray-600 mb-4"><strong>Location:</strong> {event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                  <Link href="#" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Register Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Past Events</h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">Check out the details of our previous events, including webinars, conferences, and workshops.</p>
          <div className="grid md:grid-cols-2 gap-12">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Image src={event.image} alt={event.name} width={600} height={300} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{event.name}</h3>
                  <p className="text-gray-600 mb-4"><strong>Date:</strong> {event.date}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link href={event.recordingLink} className="text-blue-600 hover:text-blue-800 font-semibold">Watch Recording →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Event Categories</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Webinars', 'Conferences', 'Workshops', 'Networking'].map((category) => (
              <div key={category} className="bg-gray-100 rounded-xl p-6 text-center hover:bg-blue-100 transition duration-300">
                <h3 className="text-xl font-semibold text-blue-600">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Our Events */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Why Attend Our Events?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Expert Insights", description: "Learn from industry leaders and gain valuable knowledge to advance your career." },
              { title: "Networking Opportunities", description: "Connect with peers and potential partners in the tech industry." },
              { title: "Hands-on Learning", description: "Participate in workshops and interactive sessions to enhance your skills." },
              { title: "Latest Trends", description: "Stay up-to-date with the latest technologies and industry trends." },
              { title: "Q&A Sessions", description: "Get your questions answered by experts in the field." },
              { title: "Career Growth", description: "Discover new career opportunities and paths for professional development." },
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Stay Updated</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Subscribe to our newsletter to receive the latest updates on events and promotions.</p>
          <form className="max-w-md mx-auto">
            <div className="flex items-center border-b border-white py-2">
              <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" aria-label="Email" />
              <button className="flex-shrink-0 bg-white hover:bg-gray-200 border-white hover:border-gray-200 text-sm border-4 text-blue-600 py-1 px-2 rounded" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Next Event?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Don't miss out on the opportunity to learn, network, and grow with industry experts and peers.</p>
          <Link href="#" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 inline-block">View All Events</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Empowering tech professionals through knowledge-sharing and networking.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Events', 'About Us', 'Contact'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Event Street, Tech City, TC 12345</p>
              <p>events@OSlicod.com</p>
              <p>+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 OSlicod. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;