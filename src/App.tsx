import { Zap, Brain, Mail, ExternalLink, Bot, MessagesSquare, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Blog from './components/Blog';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (currentPage === 'blog') {
    return <Blog onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Intro Screen */}
      {showIntro && (
        <div className="intro-screen fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
          <Zap className="intro-logo w-32 h-32 text-white mb-8" fill="white" />
          <h1 className="intro-text text-6xl font-bold text-white tracking-wider">
            CODENCE
          </h1>
        </div>
      )}
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-white lightning-logo" fill="white" />
            <span className="text-2xl font-bold text-white lightning-text">CODENCE</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#founder" className="text-gray-300 hover:text-white transition-colors">Founder</a>
            <button onClick={() => setCurrentPage('blog')} className="text-gray-300 hover:text-white transition-colors">Blog</button>
            <a href="#join" className="text-gray-300 hover:text-white transition-colors">Join Us</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <Zap className="w-20 h-20 text-white lightning-logo" fill="white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white lightning-text">
            CODENCE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Empowering the Builders of Tomorrow
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A next-generation innovation company that empowers young minds to create, innovate, and build real businesses through AI, automation, creativity, and collaboration.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Us</h2>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                To make entrepreneurship possible for everyone — even as young as 14 years old — by providing the right tools, automation, and digital support to turn ideas into reality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Divisions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <p className="text-lg font-semibold text-blue-400 mb-3">💻 Codence Tech</p>
                  <p className="text-gray-300 leading-relaxed">
                    Building the future through AI-powered software, automation, web, and app development. We design intelligent systems that simplify work, enhance productivity, and help businesses grow efficiently.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <p className="text-lg font-semibold text-blue-400 mb-3">🎨 Codence Studio</p>
                  <p className="text-gray-300 leading-relaxed">
                    A creative powerhouse for design, branding, marketing, and digital identity — helping brands stand out with innovation and visual excellence.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <p className="text-lg font-semibold text-blue-400 mb-3">🌱 Codence Founders</p>
                  <p className="text-gray-300 leading-relaxed">
                    An incubation and mentorship platform where young entrepreneurs (14+) can start, run, and scale real businesses with full support from Codence experts.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700">
              <p className="text-2xl font-semibold italic text-blue-300">
                "Don't wait to grow up to start — grow up by starting."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl blur-2xl opacity-50"></div>
                <img
                  src="/ChatGPT Image Aug 27, 2025, 12_35_25 PM.png"
                  alt="Varun S., Founder of Codence Group"
                  className="relative rounded-2xl shadow-2xl border-2 border-gray-700 max-w-md w-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">Varun S.</h3>
              <p className="text-xl text-gray-400 mb-6">Founder & Visionary | Age 14</p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At just 14 years old, Varun S. is proving that age is no barrier to innovation and entrepreneurship.
                With a deep passion for technology and a vision to revolutionize the digital landscape, Varun founded
                Codence Group to create meaningful solutions that enhance people's lives.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Combining technical expertise with creative thinking, Varun leads the development of AI-powered applications
                that push the boundaries of what's possible in personal technology and entrepreneurship.
              </p>
              <a
                href="https://www.linkedin.com/in/varun-suresh-a25387382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative AI-powered solutions designed to enhance your digital life
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI LIFE COMPANION */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl">
              <Brain className="w-16 h-16 text-white mb-6 animated-icon" />
              <h3 className="text-2xl font-bold mb-4">AI LIFE COMPANION</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A smart personal assistant powered by GPT-3.5 Turbo. Manage your diary, health, tasks, calendar, and connect with a community — all in one place.
              </p>
              <a
                href="https://mindstone-harmony-craftbyte.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Launch App
                <ExternalLink className="w-4 h-4 animated-icon" />
              </a>
            </div>

            {/* AI Assistant */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl">
              <Bot className="w-16 h-16 text-white mb-6 animated-icon" />
              <h3 className="text-2xl font-bold mb-4">AI Assistant</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Powered by GPT-3.5 Turbo. A smart personal companion that helps you chat, plan, write, and organize your day — all in one place. Simple, fast, and always learning.
              </p>
              <a
                href="https://sparky-aide.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Launch App
                <ExternalLink className="w-4 h-4 animated-icon" />
              </a>
            </div>

            {/* NEXO Chat App */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl">
              <MessagesSquare className="w-16 h-16 text-white mb-6 animated-icon" />
              <h3 className="text-2xl font-bold mb-4">NEXO</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Smart Chat App that lets you chat one-on-one instantly by searching Gmail IDs. NEXO makes private conversations simple, secure, and fast — powered by smart AI.
              </p>
              <a
                href="https://talk-nexo-hub.lovable.app/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Launch App
                <ExternalLink className="w-4 h-4 animated-icon" />
              </a>
            </div>

            {/* School Management */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl">
              <Brain className="w-16 h-16 text-white mb-6 animated-icon" />
              <h3 className="text-2xl font-bold mb-4">EduSphere</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A comprehensive school management system built with Codence Tech. Streamlines student records, attendance, grades, and communication between teachers, students, and parents in one unified platform.
              </p>
              <a
                href="https://edusphere-codence.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Launch App
                <ExternalLink className="w-4 h-4 animated-icon" />
              </a>
            </div>

            {/* Hostel Management */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl">
              <Bot className="w-16 h-16 text-white mb-6 animated-icon" />
              <h3 className="text-2xl font-bold mb-4">Hostel Management</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A smart hostel management solution that handles room allocation, guest check-ins, billing, maintenance requests, and visitor management. Designed for efficiency and seamless operations.
              </p>
              <a
                href="https://hostel-codence-02.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Launch App
                <ExternalLink className="w-4 h-4 animated-icon" />
              </a>
            </div>

            {/* AI Business Buddy */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl">
              <Zap className="w-16 h-16 text-white mb-6 animated-icon" />
              <h3 className="text-2xl font-bold mb-4">AI Business Buddy</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your AI-powered business companion that helps entrepreneurs plan, strategize, and grow. Get instant insights, business advice, and actionable recommendations tailored to your goals.
              </p>
              <a
                href="https://dream-plan-ai-07.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Launch App
                <ExternalLink className="w-4 h-4 animated-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section id="join" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are always looking for talented, motivated individuals who want to create amazing projects and grow with us.
            If you want to be part of the Codence Group family, reach out to us.
          </p>
          <a
            href="mailto:hello@codencegroup.com"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-6 h-6 animated-icon" />
            hello@codencegroup.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 bg-black">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-white lightning-logo" fill="white" />
            <span className="text-xl font-bold text-white lightning-text">CODENCE</span>
          </div>
          <p className="text-gray-500">
            © 2025 Codence Group. Empowering the builders of tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
