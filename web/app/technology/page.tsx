"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TechnologyStack = () => {
  const technologies = {
    languages: [
      { name: "Java", description: "Used for building high-performance applications and robust systems.", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
      { name: "Python", description: "Ideal for data analysis, machine learning, and rapid development.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "JavaScript", description: "Essential for creating interactive web applications and enhancing user experiences.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    ],
    frameworks: [
      { name: "React", description: "For building dynamic and responsive user interfaces.", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
      { name: "Django", description: "A high-level Python framework that encourages rapid development and clean, pragmatic design.", icon: "https://cdn-icons-png.flaticon.com/512/9307/9307630.png" },
    ],
    databases: [
      { name: "SQL", description: "Structured Query Language for relational databases, providing reliable and scalable data management.", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
      { name: "MongoDB", description: "A NoSQL database that offers flexibility and scalability for handling unstructured data.", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" },
    ],
    apis: [
      { name: "REST", description: "Representational State Transfer APIs for scalable and stateless communication between clients and servers.", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
      { name: "GraphQL", description: "A query language for APIs, enabling clients to request exactly the data they need.", icon: "https://cdn-icons-png.flaticon.com/512/8297/8297437.png" },
    ],
    frontend: [
      { name: "HTML", description: "The standard markup language for creating web pages.", icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" },
      { name: "CSS", description: "Cascading Style Sheets for designing and layout.", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "React", description: "For building interactive and dynamic user interfaces.", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime for building scalable network applications.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
      { name: "Django", description: "A high-level Python framework that encourages rapid development and clean, pragmatic design.", icon: "https://cdn-icons-png.flaticon.com/512/9307/9307630.png" },
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-32 relative overflow-hidden">
      
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Our Technology Stack</h1>
            <p className="text-xl md:text-2xl mb-10 font-light">Harnessing the Latest Technologies to Deliver Excellence</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">We leverage a diverse range of technologies to create robust, scalable, and efficient software solutions. Our technology stack is carefully selected to ensure we provide the best possible outcomes for our clients.</p>
        </div>
      </section>

      {/* Technology Categories */}
      {Object.entries(technologies).map(([category, techs]) => (
        <section key={category} className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-800 capitalize">{category.replace('_', ' ')}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {techs.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                  <Image src={tech.icon} alt={tech.name} width={64} height={64} className="mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Planning", description: "We start by understanding your requirements and planning the project architecture." },
              { step: "2", title: "Design", description: "Our designers create intuitive and appealing user interfaces tailored to your needs." },
              { step: "3", title: "Development", description: "Our developers bring the designs to life using our robust technology stack." },
              { step: "4", title: "Testing & Deployment", description: "We rigorously test the application and deploy it to your specified environment." },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tech Stack */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">Why Choose Our Tech Stack?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Scalability", description: "Our technologies are chosen for their ability to scale, ensuring your application can grow with your business." },
              { title: "Performance", description: "We prioritize performance, selecting technologies that deliver fast and responsive applications." },
              { title: "Security", description: "Security is built into our stack, with robust measures to protect your data and users." },
              { title: "Flexibility", description: "Our diverse stack allows us to choose the best tools for each unique project requirement." },
              { title: "Future-Proof", description: "We stay updated with the latest technologies to ensure your application remains cutting-edge." },
              { title: "Cost-Effective", description: "Our efficient development process and technology choices help keep costs down without compromising quality." },
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Build Your Next Project?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Let's leverage our cutting-edge technology stack to bring your vision to life.</p>
          <Link href="#" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-block">Start Your Project</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">OSlicod</h3>
              <p>Empowering businesses with cutting-edge technology solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & Machine Learning'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-blue-400 transition duration-300">{item}</Link></li>
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
};

export default TechnologyStack;