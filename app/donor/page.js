export default function Donor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="p-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-teal-400">দাতা ও আজীবন সদস্য</h1>
          <p className="text-gray-200 text-lg">দাতা ও আজীবন সদস্য সম্পর্কিত তথ্য শীঘ্রই প্রকাশিত হবে।</p>
        </div>
      </div>
    </div>
  );
} 