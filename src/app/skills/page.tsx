import { Code, Database, Cpu, Layers } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      skills: ["C++", "Python", "MATLAB", "HTML", "CSS", "Java", "JavaScript"]
    },
    {
      category: "Libraries & Frameworks",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      skills: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "SciPy", "Matplotlib", "LangChain", "FastAPI", "Streamlit", "Gradio"]
    },
    {
      category: "Software & Packages",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ["RESTful API", "PostgreSQL", "GitHub", "LaTeX", "InfluxDB", "Docker", "GCP"]
    }
  ];

  const courses = [
    {
      area: "Math & Physics",
      list: "Quantum Physics and Application, Classical Physics, Calculus I, Calculus II, Differential Equations, Linear Algebra, Introduction to Numerical Analysis"
    },
    {
      area: "Computer Science & Data",
      list: "Computer Programming and Utilization, Programming in Data Science, Statistical Machine Learning, Natural Language Processing and Web"
    },
    {
      area: "Miscellaneous",
      list: "Economics, Optimization, Product Research and Development, Introduction to Management"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-white tracking-tight">Skills & Academics</h1>
        <p className="text-lg text-slate-400">Technical toolkit and relevant coursework undertaken at IIT Bombay.</p>
      </div>

      <div className="space-y-16">
        
        {/* Technical Skills */}
        <section>
          <div className="flex items-center space-x-3 mb-8 border-b border-slate-800 pb-4">
            <Cpu className="text-cyan-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((section, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {section.icon}
                  <h3 className="text-white font-semibold">{section.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Courses */}
        <section>
          <div className="flex items-center space-x-3 mb-8 border-b border-slate-800 pb-4">
            <Layers className="text-cyan-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-white">Relevant Courses Undertaken</h2>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl divide-y divide-slate-800">
            {courses.map((course, index) => (
              <div key={index} className="p-6 sm:flex sm:items-start sm:justify-between">
                <h3 className="text-white font-semibold w-1/3 shrink-0 mb-2 sm:mb-0">{course.area}</h3>
                <p className="text-slate-400 text-sm leading-relaxed sm:w-2/3">{course.list}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}