import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';

interface BlogProps {
  onBack: () => void;
}

interface Article {
  title: string;
  description: string;
  source: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "Google's latest AI model uses a web browser like you do",
    description: "A new model that navigates web pages visually and does form submissions, interactions like a human using a browser.",
    source: "The Verge",
    url: "https://www.theverge.com"
  },
  {
    title: "Invisible commands, real threats: The rise of prompt injection in AI",
    description: "On how malicious hidden instructions in prompts can hijack AI behavior.",
    source: "Axios",
    url: "https://www.axios.com"
  },
  {
    title: "OpenAI and AMD sign chip supply partnership for AI infrastructure",
    description: "A big deal in AI infrastructure and hardware supply chain.",
    source: "AP News",
    url: "https://apnews.com"
  },
  {
    title: "AI at Meta Blog",
    description: "Meta's AI team's updates and research.",
    source: "Meta AI",
    url: "https://ai.meta.com/blog"
  },
  {
    title: "From Mind to Machine: The Rise of Manus AI as a Fully Autonomous Digital Agent",
    description: "A paper about an autonomous agent that moves from reasoning to action.",
    source: "arXiv",
    url: "https://arxiv.org"
  },
  {
    title: "Demystifying AI Agents: The Final Generation of Intelligence",
    description: "A look at how agentic AI may represent a new phase of intelligence.",
    source: "arXiv",
    url: "https://arxiv.org"
  },
  {
    title: "From Generative AI to Innovative AI: An Evolutionary Roadmap",
    description: "Exploring how we might move beyond generative systems to AI that can truly innovate.",
    source: "arXiv",
    url: "https://arxiv.org"
  },
  {
    title: "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developers",
    description: "Interesting finding: early AI tools sometimes slow down developers.",
    source: "Metr",
    url: "https://metr.org"
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

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white lightning-text">
            Tech Blog
          </h1>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5 animated-icon" />
            <span>Recent Interesting AI & Tech Articles (2025)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all hover:transform hover:scale-105 shadow-xl"
            >
              <h2 className="text-xl font-bold mb-3 text-white leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">
                  {article.source}
                </span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 animated-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
