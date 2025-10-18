export default function Exams() {
  return (
    <section id="examens" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
              Certifications Internationales
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Examens
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ouvrez-vous toutes les portes à l&apos;international en obtenant le meilleur score possible aux tests 
            de certification reconnus mondialement
          </p>
        </div>

        {/* Modern Interactive Diagram */}
        <div className="relative flex items-center justify-center min-h-[700px] mb-20">
          {/* Central Hub - Enhanced */}
          <div className="relative z-20 group">
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border-4 border-purple-500 rounded-3xl px-12 py-8 shadow-2xl backdrop-blur-xl hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <span className="relative text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                AMERICAN WORKSHOP
              </span>
            </div>
          </div>

          {/* Exam Cards in Circular Formation */}
          
          {/* BACCALAURÉAT - Top (12 o'clock) */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 group animate-float-slow">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="text-xl font-bold text-purple-400 mb-2">BACCALAURÉAT</div>
              <div className="text-sm text-purple-300">Diplôme National</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-3"></div>
            </div>
          </div>

          {/* TOEFL - Top Right (2 o'clock) */}
          <div className="absolute top-16 right-20 group animate-float-medium">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25">
              <div className="text-xl font-bold text-red-400 mb-2">TOEFL</div>
              <div className="text-sm text-gray-300">Test of English</div>
              <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mt-3"></div>
            </div>
          </div>

          {/* SAT - Right (3 o'clock) */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 group animate-float-fast">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="text-xl font-bold text-blue-400 mb-2">SAT</div>
              <div className="text-sm text-gray-300">Scholastic Test</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-3"></div>
            </div>
          </div>

          {/* IELTS - Bottom Right (4 o'clock) */}
          <div className="absolute bottom-16 right-20 group animate-float-reverse">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25">
              <div className="text-xl font-bold text-emerald-400 mb-2">IELTS</div>
              <div className="text-sm text-gray-300">International English</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-3"></div>
            </div>
          </div>

          {/* LINGUASKILL - Bottom (6 o'clock) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group animate-float-slow">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25">
              <div className="text-xl font-bold text-orange-400 mb-2">LINGUASKILL</div>
              <div className="text-sm text-gray-300">Cambridge Assessment</div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-3"></div>
            </div>
          </div>

          {/* GMAT - Bottom Left (8 o'clock) */}
          <div className="absolute bottom-16 left-20 group animate-float-medium">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/25">
              <div className="text-xl font-bold text-violet-400 mb-2">GMAT</div>
              <div className="text-sm text-gray-300">Graduate Management</div>
              <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full mt-3"></div>
            </div>
          </div>

          {/* TOEIC - Left (9 o'clock) */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 group animate-float-fast">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25">
              <div className="text-xl font-bold text-pink-400 mb-2">TOEIC</div>
              <div className="text-sm text-gray-300">Business English</div>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mt-3"></div>
            </div>
          </div>

          {/* CAMBRIDGE - Top Left (10-11 o'clock) */}
          <div className="absolute top-16 left-20 group animate-float-reverse">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/25">
              <div className="text-xl font-bold text-amber-400 mb-2">CAMBRIDGE</div>
              <div className="text-sm text-gray-300">Certificats d&apos;Anglais</div>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-3"></div>
            </div>
          </div>

        </div>

        


      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-2deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-1deg); }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 3.5s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
