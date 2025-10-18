
import { useState, useEffect } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Évaluation & Conseil",
    description: "Analyse approfondie de vos objectifs professionnels et recommandations personnalisées pour votre parcours d'apprentissage.",
    icon: "📊",
    features: ["Test de niveau gratuit", "Consultation personnalisée", "Plan de formation sur mesure"]
  },
  {
    number: "02", 
    title: "Inscription & Planification",
    description: "Formalisation de votre inscription avec planification flexible adaptée à votre emploi du temps professionnel.",
    icon: "�",
    features: ["Inscription simplifiée", "Horaires flexibles", "Paiement échelonné"]
  },
  {
    number: "03",
    title: "Formation & Certification", 
    description: "Démarrage immédiat de votre formation avec accompagnement dédié et certification reconnue internationalement.",
    icon: "🎯",
    features: ["Accompagnement personnalisé", "Certification internationale", "Suivi de progression"]
  }
];

export default function RegistrationProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('registration-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="registration-section"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8">
            <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
              Processus d&apos;inscription professionnel
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Votre Parcours vers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              l&apos;Excellence Linguistique
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Un processus d&apos;inscription simplifié et professionnel, conçu pour les professionnels exigeants 
            qui souhaitent développer leurs compétences linguistiques.
          </p>
        </div>

        {/* Professional Process Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Professional Illustration */}
          <div className="relative">
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700/30">
              
              {/* Professional Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110">
                      <span className="text-white font-bold text-xl">AW</span>
                    </div>
                    <div>
                      <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        American Workshop
                      </div>
                      <div className="text-xs text-gray-400 font-medium">Excellence in English</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">2025</div>
                </div>

                {/* Progress Steps */}
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-xl border transition-all duration-500 cursor-pointer ${
                        activeStep === index 
                          ? 'bg-purple-500/20 border-purple-400/40 shadow-md' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-white/10 text-gray-300 border border-white/10'
                        }`}>
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold transition-colors duration-300 ${
                            activeStep === index ? 'text-purple-300' : 'text-gray-300'
                          }`}>
                            {step.title}
                          </div>
                          <div className={`w-full h-1 rounded-full mt-2 transition-all duration-500 ${
                            activeStep === index 
                              ? 'bg-purple-600' 
                              : 'bg-white/10'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Statistiques Professionnelles */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">98%</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Taux de réussite</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">15+</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Années d&apos;expertise</div>
                  </div>
                  <div className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl font-bold text-purple-500 group-hover:text-purple-400 transition-colors duration-300">250+</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Entreprises partenaires</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-3 shadow-xl hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer animate-pulse">
              <div className="text-white font-bold text-sm">Certifié</div>
              <div className="text-emerald-100 text-xs">International</div>
            </div>
          </div>

          {/* Right Side - Professional Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`group relative transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Professional Step Container */}
                <div className="relative p-8 bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                  
                  {/* Professional Badge */}
                  <div className="flex items-start space-x-6">
                    <div className="relative flex-shrink-0">
                      {/* Numéro Badge */}
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                        <span className="text-xl font-bold text-white">{step.number}</span>
                      </div>
                      
                      {/* Icône */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-sm shadow-md">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Contenu Professionnel */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Fonctionnalités Professionnelles */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 group/feature hover:translate-x-2 transition-all duration-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/feature:bg-cyan-400 group-hover/feature:scale-125 transition-all duration-300"></div>
                            <span className="text-sm text-gray-300 font-medium group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Accent subtil */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-cyan-600 rounded-l-2xl group-hover:w-2 transition-all duration-500"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}

            {/* CTA Professionnel */}
            <div className="text-center pt-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                <span className="flex items-center">
                  Commencer mon évaluation
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}