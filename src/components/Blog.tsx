import { ArrowLeft, Sparkles, Code, Shield, Smartphone, Rocket } from 'lucide-react';

interface BlogProps {
  onBack: () => void;
}

interface BlogSection {
  icon: React.ComponentType<any>;
  title: string;
  articles: BlogArticle[];
}

interface BlogArticle {
  question: string;
  answer: string;
  highlights?: string[];
}

const blogSections: BlogSection[] = [
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    articles: [
      {
        question: "What are the Top 5 AI Tools Changing Everyday Life in 2025?",
        answer: "AI tools have become part of everything—from chatbots to creativity. Here are 5 trending AI tools in 2025:",
        highlights: [
          "ChatGPT-5 – For instant AI conversations and writing.",
          "DeepSeek AI – A new open-source large model gaining attention.",
          "Claude 3.5 – Great for reasoning and coding.",
          "Runway ML – Turns text into videos using AI.",
          "Perplexity AI – Combines web search and chat results in real time.",
          "💡 AI is now not just assisting — it's collaborating."
        ]
      },
      {
        question: "How is Generative AI Transforming App Development?",
        answer: "Generative AI is speeding up app creation by generating code, designs, and content automatically. Developers now use AI copilots like GitHub Copilot and Replit Ghostwriter to:",
        highlights: [
          "Write clean, efficient code faster.",
          "Auto-design UI mockups.",
          "Test and debug instantly.",
          "🚀 In 2025, even small developers can build powerful AI apps in days instead of months."
        ]
      },
      {
        question: "What is DeepSeek and Why Is Everyone Talking About It?",
        answer: "DeepSeek is a free, open-source AI model that rivals GPT and Gemini. It's designed for high performance with zero cost, making it popular on OpenRouter. It supports coding, chat, translation, and content creation — all without subscription limits.",
        highlights: ["🔓 DeepSeek is the new hero for indie AI developers."]
      }
    ]
  },
  {
    icon: Code,
    title: "Software & Coding",
    articles: [
      {
        question: "What Are the Best Free APIs for Developers in 2025?",
        answer: "Free APIs every developer should try:",
        highlights: [
          "Brave API – For AI search and summarization.",
          "OpenRouter – Unified access to multiple AI models.",
          "Supabase API – Best free backend for apps.",
          "Hugging Face API – For AI model deployment.",
          "OpenWeather API – For real-time weather integration.",
          "🧩 APIs make your app smarter without heavy backend work."
        ]
      },
      {
        question: "How to Build Your Own ChatGPT-Like Bot Without an API Key?",
        answer: "You can build a personal chatbot by combining web crawling + local AI models. Steps:",
        highlights: [
          "Use Python (BeautifulSoup) to fetch answers from websites.",
          "Integrate a local LLM like DeepSeek or Ollama.",
          "Create a chat UI using HTML + Flask or Streamlit.",
          "🧠 This gives you a free, offline, and private chatbot engine."
        ]
      }
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity & Web",
    articles: [
      {
        question: "How to Protect Your Data Online in 2025?",
        answer: "",
        highlights: [
          "Enable 2-Factor Authentication everywhere.",
          "Use password managers like Bitwarden.",
          "Avoid saving credentials in browsers.",
          "Keep your OS and antivirus updated.",
          "Use VPNs for public Wi-Fi.",
          "🔒 In the AI age, your privacy is your password strength."
        ]
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Gadget & Tech Innovation",
    articles: [
      {
        question: "What Are the Smartest AI Gadgets of 2025?",
        answer: "",
        highlights: [
          "Meta Ray-Ban Glasses 2 – Record and translate in real time.",
          "Apple Vision Pro 2 – Blends AR with productivity tools.",
          "Samsung AI Phone (S25 Ultra) – Auto-edits photos using on-device AI.",
          "Anker Solix PowerHub – Smart AI home power system.",
          "Neuralink Link – First brain-computer interface approved for trials.",
          "🤖 AI gadgets are now extensions of our brain and lifestyle."
        ]
      }
    ]
  },
  {
    icon: Rocket,
    title: "Startup & Innovation",
    articles: [
      {
        question: "How Teen Entrepreneurs Are Launching AI Startups in 2025?",
        answer: "Teen founders are building startups faster using AI tools + no-code platforms like Bubble, Glide, and Jotform Apps. They combine creativity with free cloud services to publish apps. Examples: AI diaries, chatbot assistants, or smart school planners.",
        highlights: ["✨ You don't need funding — just an idea and internet access."]
      },
      {
        question: "How to Turn Your School Project into a Real App?",
        answer: "Steps:",
        highlights: [
          "Choose a useful topic (health, education, or AI tools).",
          "Use Jotform Apps or Supabase + React for the backend.",
          "Add AI APIs to make it smart.",
          "Publish under your own brand name (like Quantum Lab).",
          "💡 Many school projects evolve into startups with just one launch."
        ]
      }
    ]
  }
];

function Blog({ onBack }: BlogProps) {
  return (
    <div className="min-h-screen bg-black text-gray-100 pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white lightning-text">
            Codence Insights
          </h1>
          <p className="text-gray-400 text-lg">Exploring innovation, technology, and entrepreneurship</p>
        </div>

        {blogSections.map((section, sectionIndex) => {
          const IconComponent = section.icon;
          return (
            <div key={sectionIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <IconComponent className="w-8 h-8 text-white animated-icon" />
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.articles.map((article, articleIndex) => (
                  <article
                    key={articleIndex}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all shadow-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                      Q{sectionIndex * 3 + articleIndex + 1}. {article.question}
                    </h3>

                    {article.answer && (
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {article.answer}
                      </p>
                    )}

                    {article.highlights && article.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {article.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-400 leading-relaxed pl-4 border-l-2 border-gray-600">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
