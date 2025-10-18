'use client'
import { useState } from 'react';

interface ContactCenter {
  city: string;
  location: string;
  phones: string[];
  email: string;
  address: string;
  icon: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    center: ''
  });

  const contactCenters: ContactCenter[] = [
    {
      city: "Casablanca",
      location: "C.I.L",
      phones: ["06 00 00 00 00", "05 00 00 00 00"],
      email: "casablanca@americanworkshop.ma",
      address: "9 Rue Aïn Asserdoune, C.I.L Casablanca, Maroc",
      icon: "🏢"
    },
    {
      city: "Rabat",
      location: "Hay Riad",
      phones: ["06 00 00 00 00", "05 00 00 00 00", "05 00 00 00 00"],
      email: "rabat@americanworkshop.ma",
      address: "Avenue Hassan II, Hay Riad, Rabat, Maroc",
      icon: "🏛️"
    },
    {
      city: "Mohammedia",
      location: "Central Park",
      phones: ["06 00 00 00 00"],
      email: "mohammedia@americanworkshop.ma",
      address: "Central Park, Mohammedia, Maroc",
      icon: "🌳"
    },
    {
      city: "Dar Bouazza",
      location: "Route d'Azemmour",
      phones: ["06 00 00 00 00", "05 00 00 00 00"],
      email: "darbouazza@americanworkshop.ma",
      address: "Route d'Azemmour, Dar Bouazza, Maroc",
      icon: "🏖️"
    },
    {
      city: "El Jadida",
      location: "Lot AL MASSIRA",
      phones: ["05 00 00 00 00", "06 00 00 00 00"],
      email: "eljadida@americanworkshop.ma",
      address: "Lot AL MASSIRA, El Jadida, Maroc",
      icon: "🌊"
    }
  ];

  const openingHours = {
    weekdays: "Lun-Jeu: 09h00 – 18h00",
    friday: "Vendredi: 09h00 – 12h00 / 14h00 – 18h00",
    saturday: "Samedi: 09h00 – 18h00"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      center: ''
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Floating background shapes */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8 shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-bold text-purple-300">📞 Contactez-nous</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            <span className="text-white">Nous Sommes </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Là Pour Vous
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pour toute demande d'information n'hésitez pas à contacter le centre le plus proche de vous.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-2xl">✉️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Envoyez-nous un message</h3>
                <p className="text-gray-400">Nous vous répondrons rapidement</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="+212 6 00 00 00 00"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Centre préféré</label>
                  <select
                    name="center"
                    value={formData.center}
                    onChange={handleInputChange}
                    title="Sélectionnez votre centre préféré"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="">Choisir un centre</option>
                    {contactCenters.map((center, index) => (
                      <option key={index} value={center.city} className="bg-slate-800">
                        {center.city} - {center.location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
              >
                <span className="mr-2">🚀</span>
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Opening Hours & Quick Info */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Horaires d'ouverture</h3>
                  <p className="text-gray-400">Nos centres vous accueillent</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-white font-medium">Lundi - Jeudi</span>
                  <span className="text-cyan-400 font-bold">09h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-white font-medium">Vendredi</span>
                  <span className="text-purple-400 font-bold">09h00 - 12h00 / 14h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-white font-medium">Samedi</span>
                  <span className="text-pink-400 font-bold">09h00 - 18h00</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-8 border border-pink-500/20 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Rapide</h3>
                  <p className="text-gray-400">Pour une réponse immédiate</p>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+212600000000"
                  className="flex items-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <div className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                      Appelez-nous maintenant
                    </div>
                    <div className="text-gray-400 text-sm">06 00 00 00 00</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@americanworkshop.ma"
                  className="flex items-center p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      Envoyez un email
                    </div>
                    <div className="text-gray-400 text-sm">info@americanworkshop.ma</div>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-xl border border-pink-500/20">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <div className="text-white font-semibold">6 centres au Maroc</div>
                    <div className="text-gray-400 text-sm">Trouvez le plus proche</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centers Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Centres</span>
            </h3>
            <p className="text-gray-300 text-lg">Choisissez le centre le plus proche de vous</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactCenters.map((center, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-6 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{center.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{center.city}</h4>
                    <p className="text-gray-400 text-sm">{center.location}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  {/* Phones */}
                  <div>
                    <div className="text-cyan-400 font-semibold text-sm mb-2 flex items-center">
                      <span className="mr-1">📞</span>
                      Téléphones:
                    </div>
                    <div className="space-y-1">
                      {center.phones.map((phone, phoneIndex) => (
                        <a
                          key={phoneIndex}
                          href={`tel:+212${phone.replace(/\s/g, '')}`}
                          className="block text-white hover:text-cyan-400 transition-colors duration-300 font-mono text-sm"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="text-purple-400 font-semibold text-sm mb-1 flex items-center">
                      <span className="mr-1">✉️</span>
                      Email:
                    </div>
                    <a
                      href={`mailto:${center.email}`}
                      className="text-white hover:text-purple-400 transition-colors duration-300 text-sm break-all"
                    >
                      {center.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <div className="text-pink-400 font-semibold text-sm mb-1 flex items-center">
                      <span className="mr-1">📍</span>
                      Adresse:
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {center.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
    </section>
  );
}