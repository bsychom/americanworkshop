'use client'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110">
                <span className="text-white font-bold text-2xl">AW</span>
              </div>
              <div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  American Workshop
                </div>
                <div className="text-sm text-gray-400 font-medium">Excellence in English</div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
                AMERICAN WORKSHOP
              </span> est une institution d&apos;enseignement de haut niveau dédiée à l&apos;excellence en langue anglaise.
            </p>
            
            {/* CTA Button */}
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <span>🚀 Commencer Maintenant</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', href: '#accueil', isExternal: false },
                { name: 'À propos', href: '#about', isExternal: false },
                { name: 'Formations', href: '#formations', isExternal: false },
                { name: 'Centres', href: '#centres', isExternal: false },
                { name: 'Examens', href: '#examens', isExternal: false },
                { name: 'Contact', href: '/contact', isExternal: true }
              ].map((item, index) => (
                <li key={index}>
                  {item.isExternal ? (
                    <Link 
                      href={item.href} 
                      className="text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium flex items-center group"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Formation Corporate', icon: '🏢', href: '#formations', isExternal: false },
                { name: 'Coaching Personnel', icon: '👨‍🏫', href: '#formations', isExternal: false },
                { name: 'Préparation Examens', icon: '📚', href: '#examens', isExternal: false },
                { name: 'Application Mobile', icon: '📱', href: '/contact', isExternal: true }
              ].map((service, index) => (
                <li key={index}>
                  {service.isExternal ? (
                    <Link 
                      href={service.href} 
                      className="text-slate-300 hover:text-white transition-all duration-300 font-medium flex items-center group"
                    >
                      <span className="text-lg mr-3 group-hover:scale-125 transition-transform duration-300">{service.icon}</span>
                      <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400">
                        {service.name}
                      </span>
                    </Link>
                  ) : (
                    <a 
                      href={service.href} 
                      className="text-slate-300 hover:text-white transition-all duration-300 font-medium flex items-center group"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="text-lg mr-3 group-hover:scale-125 transition-transform duration-300">{service.icon}</span>
                      <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400">
                        {service.name}
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Contactez-nous
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-300">
                <span className="text-2xl mr-3">📍</span>
                <span>6 centres au Maroc</span>
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-2xl mr-3">📞</span>
                <span>+212 6 00 00 00 00</span>
              </div>
              <div className="flex items-center text-slate-300">
                <span className="text-2xl mr-3">✉️</span>
                <span>info@americanworkshop.ma</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Suivez-nous :</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', color: 'from-blue-500 to-blue-600' },
                  { name: 'Instagram', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z', color: 'from-pink-500 to-purple-600' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'from-blue-600 to-cyan-600' },
                  { name: 'YouTube', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z', color: 'from-red-500 to-red-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg group`}
                    title={social.name}
                  >
                    <svg className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © 2024 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">American Workshop</span>. 
              Tous droits réservés.
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 transition-all duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">
                Conditions d&apos;utilisation
              </a>
              <a href="#" className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 transition-all duration-300">
                Mentions légales
              </a>
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
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}