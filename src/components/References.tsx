'use client'
import Image from 'next/image';

// Placeholder for client references/logos
const references = [
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Apple", logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Meta", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Tesla", logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Netflix", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
  { name: "Spotify", logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&w=200&h=100&fit=crop&q=80" },
];

export default function References() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900/70"></div>
      
      {/* Multiple floating background shapes */}
      <div className="absolute top-10 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8 shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-bold text-purple-300">🤝 Nos Partenaires de Confiance</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            <span className="text-white">Nos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Références
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-4xl lg:text-5xl">
              d'Excellence
            </span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Plus de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">250 entreprises</span> de renommée mondiale nous font confiance pour former leurs équipes
          </p>
        </div>
        
        {/* Premium Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          {references.map((ref, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3 shadow-2xl overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-20 transition-all duration-500"></div>
              
              {/* Glowing orb effect */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-lg group-hover:blur-md transition-all duration-500"></div>
              
              <div className="relative z-10 p-8 flex flex-col items-center justify-center h-32">
                {/* Logo container */}
                <div className="relative mb-4">
                  <Image
                    src={ref.logo}
                    alt={`${ref.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  />
                  {/* Logo glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Company name */}
                <div className="text-slate-400 font-semibold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                  {ref.name}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-2xl group-hover:from-purple-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-4xl mb-4">🏆</div>
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">250+</div>
            <div className="text-slate-300 font-semibold">Entreprises Partenaires</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-4xl mb-4">⭐</div>
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">98%</div>
            <div className="text-slate-300 font-semibold">Taux de Satisfaction</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="text-4xl mb-4">🌍</div>
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2">50+</div>
            <div className="text-slate-300 font-semibold">Pays de Confiance</div>
          </div>
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
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}