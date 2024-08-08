import { useState } from 'react';
import { motion } from 'framer-motion';
import { Waves, Code, Globe, Zap, Server, Users } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <nav className="bg-blue-800 p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Vercel</a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#features" className="hover:text-blue-300">Features</a>
            <a href="#testimonials" className="hover:text-blue-300">Testimonials</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-800 z-20 flex flex-col items-center justify-center">
          <a href="#about" className="py-2 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#features" className="py-2 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="py-2 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="py-2 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}

      <header className="pt-20 pb-40 px-4 text-center relative overflow-hidden">
        <Waves className="absolute bottom-0 left-0 w-full h-40 text-blue-600 opacity-50" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Vercel</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering developers to build the future of the web</p>
        <a href="#" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">Get Started</a>
      </header>

      <main>
        <section id="about" className="py-20 px-4 bg-blue-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">About Guillaume</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://placekitten.com/500/500" alt="Guillaume" className="rounded-full w-64 h-64 mx-auto object-cover" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Guillaume is the visionary founder of Vercel, a platform that's revolutionizing the way developers build, deploy, and scale web applications. With a passion for performance and user experience, Guillaume has led Vercel to become a leader in the JAMstack ecosystem.
                </p>
                <p className="text-lg">
                  Under Guillaume's leadership, Vercel has empowered countless developers to create lightning-fast websites and applications, pushing the boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 bg-blue-700">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Vercel Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Code size={48} />, title: 'Next.js Integration', description: 'Seamless integration with Next.js for optimal performance and developer experience.' },
                { icon: <Globe size={48} />, title: 'Global CDN', description: 'Lightning-fast content delivery through our global edge network.' },
                { icon: <Zap size={48} />, title: 'Instant Deployments', description: 'Deploy your changes instantly with our automated CI/CD pipeline.' },
                { icon: <Server size={48} />, title: 'Serverless Functions', description: 'Build and deploy serverless functions with ease.' },
                { icon: <Users size={48} />, title: 'Team Collaboration', description: 'Effortless collaboration tools for your development team.' },
                { icon: <img src="/placeholder.svg" alt="Analytics" className="w-12 h-12" />, title: 'Analytics', description: 'Gain insights into your application\'s performance and user behavior.' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-600 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-blue-300 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-4 bg-blue-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">What Developers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Frontend Developer', quote: 'Vercel has completely transformed our development workflow. Deployments are a breeze, and the performance gains are incredible.' },
                { name: 'Michael Chen', role: 'Full Stack Engineer', quote: 'The integration with Next.js is seamless. Vercel has become an indispensable part of our tech stack.' },
                { name: 'Emily Rodriguez', role: 'CTO', quote: 'Vercel\'s global CDN and analytics have given us the edge we needed in a competitive market. Highly recommended!' },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-700 p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-blue-300">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-blue-900">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-blue-800 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-blue-800 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 rounded bg-blue-800 text-white"></textarea>
              </div>
              <button type="submit" className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 py-8 px-4 text-center">
        <p>&copy; 2024 Vercel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
