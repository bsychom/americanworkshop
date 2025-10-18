import Image from 'next/image';

interface Stat {
  number: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  {
    number: "80 000+",
    label: "Étudiants cumulés",
    icon: "👨‍🎓"
  },
  {
    number: "250+", 
    label: "Entreprises formées",
    icon: "🏢"
  },
  {
    number: "5",
    label: "Centres au maroc",
    icon: "📍"
  },
  {
    number: "190+",
    label: "Professeurs certifiés", 
    icon: "👨‍🏫"
  }
];

export default function Statistics() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900/70"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-purple-500/20 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-purple-300">📊 Nos Résultats</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-white">Nos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Statistiques
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre excellence et de la confiance de nos étudiants
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3 shadow-2xl overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing orb effect */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl group-hover:blur-lg transition-all duration-500"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-24 transition-all duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon container */}
                <div className="mb-6 relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-500">
                      {stat.icon}
                    </span>
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                    {stat.number}
                  </div>
                  {/* Number underline */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-2 group-hover:w-12 transition-all duration-500"></div>
                </div>

                {/* Label */}
                <div className="text-slate-300 font-semibold text-lg group-hover:text-white transition-colors duration-500 leading-relaxed">
                  {stat.label}
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl group-hover:from-purple-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}