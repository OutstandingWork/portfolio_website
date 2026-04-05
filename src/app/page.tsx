import { ArrowRight, Terminal, Brain, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 text-sm text-cyan-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-cyan-500">Pratyush Ranjan</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-400">
            B.Tech at <span className="text-white">IIT Bombay</span>
            <br /> Minor in <span className="text-cyan-400">AI & Data Science</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            I specialize in building intelligent systems, ranging from Generative AI workflows to deep learning models for predictive analytics. Currently exploring agentic pipelines and computer vision.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>
            <a href="https://github.com/OutstandingWork" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <Terminal size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                  <Brain className="text-cyan-500 w-8 h-8" />
                  <span className="text-xl font-semibold text-white">Core Focus</span>
                </div>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-cyan-500 mt-0.5 flex-shrink-0 w-5 h-5" />
                    <span><strong>Generative AI & LLMs:</strong> RAG, Agentic pipelines, Langchain, Prompt Engineering.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-cyan-500 mt-0.5 flex-shrink-0 w-5 h-5" />
                    <span><strong>Computer Vision:</strong> YOLO, U-Net, CNNs, Image Classification.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ChevronRight className="text-cyan-500 mt-0.5 flex-shrink-0 w-5 h-5" />
                    <span><strong>Data Science:</strong> Predictive Modeling, Clustering, Time Series (LSTM).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}