import { Code2, Terminal, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "News-AI",
      context: "ET AI Hackathon 2026",
      date: "Apr '26",
      description: "Developed an AI-native news platform combining real-time business curation with local SD-Turbo image generation. Optimized for consumer GPUs (4GB VRAM), providing 1-second image generation and automated narrated news video production.",
      tags: ["FastAPI", "SD-Turbo", "Streamlit", "LLM", "Generative AI"],
      github: "https://github.com/OutstandingWork/News-AI"
    },
    {
      title: "Decision Science Track",
      context: "Hackathon | American Express",
      date: "Jun '24",
      description: "Achieved a 58.75% accuracy predicting match outcomes through robust data preprocessing and handling of diverse datasets. Built a soft voting ensemble of LightGBM, XGBoost, CatBoost, and GradientBoosting. Engineered domain-specific features (e.g., bowling economy).",
      tags: ["LightGBM", "XGBoost", "Data Preprocessing", "Ensemble Methods"],
      github: "https://github.com/OutstandingWork/Decision-Science-Track"
    },
    {
      title: "Unlabelled Image Classification",
      context: "Course Project | DS 203",
      date: "Apr '24",
      description: "Built image preprocessing pipeline with OpenCV for 1,183 layouts. Computed 7 Hu Moments, area, and perimeter to derive shape descriptors. Implemented CNN transfer learning for feature extraction, achieving 0.61 Silhouette score. Optimized clustering categorizing 173 unique layouts.",
      tags: ["OpenCV", "CNNs", "Transfer Learning", "Clustering"],
      github: "https://github.com/OutstandingWork/Unlabelled-Image-Classification"
    },
    {
      title: "News Tagging Automation",
      context: "Course Project | CS 626",
      date: "Nov '24",
      description: "Built bidirectional LSTM tagging 0.2M+ news articles, achieving 51% accuracy over 42 imbalanced categories. Increased F1-score by 5% using contextual short descriptions and attention. Benchmarked LSTM, XGBoost+LSTM, and RoBERTa (67% accuracy).",
      tags: ["NLP", "LSTM", "RoBERTa", "Attention"],
      github: "https://github.com/OutstandingWork/Automated-News-Tagging"
    },
    {
      title: "Geographix",
      context: "Course Project | ME 781",
      date: "Nov '23",
      description: "Developed Pix2Pix GAN to convert satellite imagery to maps, using 1000+ training images. Implemented 7-layer U-Net on 256x256 images with mixed precision, achieving 3x faster training. Deployed CUDA-accelerated real time inference system on Gradio.",
      tags: ["Pix2Pix GAN", "U-Net", "CUDA", "Gradio"],
      github: "https://github.com/OutstandingWork/Geographix"
    },
    {
      title: "Dynamic Style Visualizer",
      context: "Self Project",
      date: "Apr '23",
      description: "Created multimodal AI pipeline for visual storytelling with robust literary text parsing using NLTK. Developed context-aware styling algorithm driven by semantic and emotion detection. Integrated Magenta's style transfer model with Stable Diffusion.",
      tags: ["Multimodal AI", "NLTK", "Stable Diffusion", "Magenta"],
      github: "https://github.com/OutstandingWork/Neural-Style-Transfer"
    },
    {
      title: "Predictive Analytics for Customer Retention",
      context: "Self Project",
      date: "Jan '25",
      description: "Segmented users with K-Means & HDBSCAN to identify 25% high-risk users in non-contractual e-commerce data. Engineered RFM and behavioral ratios, improving clustering accuracy by 12%. Identified key drivers like 90+ day recency.",
      tags: ["K-Means", "HDBSCAN", "RFM Analysis", "Predictive Analytics"],
      github: "https://github.com/OutstandingWork/User-Churning"
    },
    {
      title: "Demon Slayer AI",
      context: "Seasons of Code",
      date: "May '24 - Jul '24",
      description: "Implemented Multi-Armed Bandits and MDPs to optimize RL policies. Designed deep RL models using DQN and policy gradients to automate complex gameplay. Trained AI agents in ViZDoom environment.",
      tags: ["Reinforcement Learning", "DQN", "Policy Gradients", "ViZDoom"],
      github: "https://github.com/OutstandingWork/Demon-Slayer-AI"
    },
    {
      title: "CaptionGenius",
      context: "Self Project",
      date: "Dec '24 - Jan '25",
      description: "Developed Encoder-Decoder architecture for Image Captioning using Flickr8k dataset. Employed GloVe word-embeddings. Utilized pre-trained VGG16 CNN and LSTM for caption processing. Optimized with Beam Search.",
      tags: ["Image Captioning", "VGG16", "LSTM", "Beam Search"],
      github: "https://github.com/OutstandingWork/CaptionGenius"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-white tracking-tight">Key Technical Projects</h1>
        <p className="text-lg text-slate-400">A selection of my work in Machine Learning, Data Science, and Software Development.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-cyan-400 font-medium">{project.context}</p>
              </div>
              <span className="text-xs text-slate-500 font-mono whitespace-nowrap ml-4">{project.date}</span>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-end pt-4 border-t border-slate-800/50">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                    <Terminal size={16} />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}