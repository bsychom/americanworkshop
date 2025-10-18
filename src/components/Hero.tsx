'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Students learning English in classroom"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20 mb-8 animate-float">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-300">�🇸 American Workshop</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-text">
                  Maîtrisez
                </span>
                <span className="text-white ml-4">
                  l'Anglais
                </span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 mt-2">
                Aujourd'hui
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Transformez votre avenir avec nos méthodes d'apprentissage modernes. 
              <span className="text-cyan-400 font-semibold"> Des cours interactifs </span> 
              qui s'adaptent à votre rythme.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
              {[
                { value: "80K+", label: "Étudiants" },
                { value: "250+", label: "Entreprises" },
                { value: "98%", label: "Réussite" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-cyan-500/25 inline-block text-center">
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Commencer Maintenant
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <button className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-semibold text-white text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Voir Démo
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Floating Achievement Cards */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Floating Achievement Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Center Achievement Card */}
              <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🏆
                  </div>
                  <h3 className="text-2xl font-bold text-white">Prix d'Excellence</h3>
                  <p className="text-gray-300">Meilleur Institut d'Anglais 2024</p>
                </div>
              </div>

              {/* Floating Cards Around */}
              <div className="absolute top-16 left-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 animate-float" title="Taux de Réussite">
                <div className="text-white font-bold text-lg">98%</div>
                <div className="text-cyan-100 text-sm">Réussite</div>
              </div>

              <div className="absolute top-20 right-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300 animate-float" title="Années d'Expérience">
                <div className="text-white font-bold text-lg">15+</div>
                <div className="text-purple-100 text-sm">Années</div>
              </div>

              <div className="absolute bottom-16 left-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300 animate-float" title="Excellence Garantie">
                <div className="text-white font-bold text-lg">98%</div>
                <div className="text-orange-100 text-sm">Réussite</div>
              </div>

              <div className="absolute bottom-20 right-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-2xl transform -rotate-6 hover:-rotate-12 transition-transform duration-300 animate-float" title="Support 24/7">
                <div className="text-white font-bold text-lg">24/7</div>
                <div className="text-emerald-100 text-sm">Support</div>
              </div>

              <div className="absolute top-1/2 left-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 shadow-2xl transform rotate-45 hover:rotate-90 transition-transform duration-300 animate-float" title="Note 5 Étoiles">
                <div className="text-white font-bold">5★</div>
              </div>

              <div className="absolute top-1/2 right-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-4 shadow-2xl transform -rotate-45 hover:-rotate-90 transition-transform duration-300 animate-float" title="250+ Entreprises">
                <div className="text-white font-bold">250+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease infinite;
        }
      `}</style>
    </section>
  );
}