const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Pratyush Ranjan. Built with Next.js & Tailwind.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
          <a href="https://github.com/OutstandingWork" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/pratyush-ranjan-a20957278/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;