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
            CRAFT BYTE
          </h1>
        </div>
      )}
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-white lightning-logo" fill="white" />
            <span className="text-2xl font-bold text-white lightning-text">CRAFT BYTE</span>
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
            CRAFT BYTE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Revolutionizing the digital world through AI-driven innovation
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A cutting-edge IT startup combining creativity, technology, and artificial intelligence to create products that make life smarter, easier, and more connected.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Us</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              CRAFT BYTE is not just a tech company—it's a vision brought to life by passion, curiosity, and innovation.
              Founded by a young prodigy who recognized the potential of technology to improve everyday life, CRAFT BYTE develops
              apps, solutions, and tools that empower users with intelligence and efficiency.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our brand identity reflects sophistication and elegance, with a black and grey theme symbolizing simplicity,
              focus, and high-tech professionalism.
            </p>
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
                  alt="Varun.S , Founder of CRAFT BYTE"
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
                CRAFT BYTE to create meaningful solutions that enhance people's lives.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Combining technical expertise with creative thinking, Varun leads the development of AI-powered applications
                that push the boundaries of what's possible in personal technology.
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
          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section id="join" className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are always looking for talented, motivated individuals who want to create amazing projects and grow with us.
            If you want to be part of the CRAFT BYTE family, reach out to us.
          </p>
          <a
            href="mailto:mailatcraftbyte@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-6 h-6 animated-icon" />
            mailatcraftbyte@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 bg-black">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-white lightning-logo" fill="white" />
            <span className="text-xl font-bold text-white lightning-text">CRAFT BYTE</span>
          </div>
          <p className="text-gray-500">
            © 2025 CRAFT BYTE. Crafting the future, one byte at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
