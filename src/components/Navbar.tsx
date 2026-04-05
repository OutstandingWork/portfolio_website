import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white tracking-tighter">
              PRATYUSH<span className="text-cyan-500">.AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/experience" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</Link>
              <Link href="/projects" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</Link>
              <Link href="/skills" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills & Academics</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;