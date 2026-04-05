import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-white tracking-tight">Experience & Education</h1>
        <p className="text-lg text-slate-400">My professional journey, research experience, and scholastic background.</p>
      </div>

      <div className="space-y-16">
        
        {/* Professional Experience */}
        <section>
          <div className="flex items-center space-x-3 mb-8 border-b border-slate-800 pb-4">
            <Briefcase className="text-cyan-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-white">Professional & Research Experience</h2>
          </div>
          
          <div className="space-y-12">
            
            {/* Experience 1 */}
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-slate-800">
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-xl font-bold text-white">Generative AI Developer</h3>
                  <span className="text-cyan-500 font-mono text-sm mt-1 sm:mt-0">May '25 - Jul '25</span>
                </div>
                <p className="text-lg text-slate-300">Smart Analytica</p>
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 mt-4 text-slate-400">
                  <p className="text-sm italic text-slate-500 mb-4 border-l-2 border-slate-700 pl-3">Earned Letter of Recommendation from the founder at Smart Analytica for exceptional technical contributions.</p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed">
                    <li>Automated doc ingestion and processing on GCP for <strong>RAG</strong> workflows achieving median latency under <strong>3 minutes</strong>.</li>
                    <li>Engineered <strong>agentic pipelines</strong> with ADK, deploying modular tools for NER, summarization, embedding, and querying.</li>
                    <li>Designed <strong>6 REST APIs</strong> enabling real-time document parsing, semantic search, and high-throughput processing.</li>
                    <li>Benchmarked chunking strategies on LangChain, achieving median <strong>cosine similarity of 0.75+</strong> for top-3 chunks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-slate-800">
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-slate-600"></div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-xl font-bold text-white">ML Intern</h3>
                  <span className="text-slate-400 font-mono text-sm mt-1 sm:mt-0">May '25 - Jun '25</span>
                </div>
                <p className="text-lg text-slate-300">MindWealth</p>
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 mt-4 text-slate-400">
                  <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed">
                    <li>Explored position sizing methods and dynamic TP/SL exit logic, refining trading strategies via performance metrics.</li>
                    <li>Designed and implemented models for automated candlestick pattern detection on stock charts using <strong>YOLO</strong>.</li>
                    <li>Developed Python scripts for <strong>automated backtesting workflows</strong> with integrated error handling and validation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative pl-8 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-slate-800">
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-slate-600"></div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="text-xl font-bold text-white">Research Intern (IoT Edge Gateway)</h3>
                  <span className="text-slate-400 font-mono text-sm mt-1 sm:mt-0">May '24 - Jul '24</span>
                </div>
                <p className="text-lg text-slate-300">Guide: Prof. P Sunthar</p>
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 mt-4 text-slate-400">
                  <p className="text-sm italic text-slate-500 mb-4 border-l-2 border-slate-700 pl-3">Secured Letter of Recommendation for exceptional dedication and innovative problem-solving.</p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed">
                    <li>Built a layered pipeline via <strong>Docker</strong> to log temperature and pressure data at 2Hz via Raspberry Pi and InfluxDB.</li>
                    <li>Enabled lossless and real-time wireless data collection from ESP32 devices under 100m range using MQTT protocol.</li>
                    <li>Monitored real-time sensor data in Grafana and implemented <strong>LSTM forecasting</strong> on logged data, with <strong>3.4% error</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center space-x-3 mb-8 border-b border-slate-800 pb-4">
            <GraduationCap className="text-purple-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase bg-slate-950/50 border-b border-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-4">Examination</th>
                    <th scope="col" className="px-6 py-4">University / Board</th>
                    <th scope="col" className="px-6 py-4">Institute</th>
                    <th scope="col" className="px-6 py-4">Year</th>
                    <th scope="col" className="px-6 py-4">CPI / %</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/20">
                    <td className="px-6 py-4 font-medium text-white">Graduation (B.Tech)</td>
                    <td className="px-6 py-4">IIT Bombay</td>
                    <td className="px-6 py-4">IIT Bombay</td>
                    <td className="px-6 py-4">2026</td>
                    <td className="px-6 py-4 font-bold text-cyan-400">8.07</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/20">
                    <td className="px-6 py-4">Intermediate</td>
                    <td className="px-6 py-4">CBSE</td>
                    <td className="px-6 py-4">St. Michael's High School</td>
                    <td className="px-6 py-4">2022</td>
                    <td className="px-6 py-4">95.60%</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="px-6 py-4">Matriculation</td>
                    <td className="px-6 py-4">ICSE</td>
                    <td className="px-6 py-4">St. Paul's High School</td>
                    <td className="px-6 py-4">2020</td>
                    <td className="px-6 py-4">95.67%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 flex-1">
                <h3 className="font-bold text-white mb-2">Scholastic Achievements</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-400">
                  <li>Secured a position among the <strong>top 6K</strong> from over 150K applicants in JEE Advanced ('22).</li>
                  <li>Achieved score of <strong>98.5 percentile</strong> in JEE Mains 2022, ranking among top 1.1 million+.</li>
                  <li>Excelled in NTSE Stage-1 with state-level rank 3 among 0.1 million+ candidates.</li>
                </ul>
             </div>
             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 flex-1">
                <h3 className="font-bold text-white mb-2">Positions of Responsibility</h3>
                <h4 className="text-cyan-400 text-sm mb-1">Marketing and Events Coordinator | E-Cell, IIT Bombay</h4>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-400">
                  <li>Secured 40+ sponsorships for Eureka! with 15k+ registrants via LinkedIn outreach.</li>
                  <li>Led sponsorship negotiations with Healthcare, SaaS, and Fintech sectors.</li>
                  <li>Organized Eureka! Zonals at IIT Delhi for 70+ startups and 30+ mentors.</li>
                </ul>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}