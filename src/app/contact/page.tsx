'use client'
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Revolutionary Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Floating background shapes */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Contact />
        <Footer />
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
        
        .bg-grid-white {
          background-image: linear-gradient(white 1px, transparent 1px),
                          linear-gradient(90deg, white 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
}