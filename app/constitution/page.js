export default function Constitution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="p-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-emerald-400">গঠনতন্ত্র</h1>
          <p className="text-gray-200 text-lg">আমাদের সংস্থার গঠনতন্ত্র শীঘ্রই প্রকাশিত হবে।</p>
        </div>
      </div>
    </div>
  );
} 