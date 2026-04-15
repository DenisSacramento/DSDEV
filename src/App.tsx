/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  MessageCircle,
  ArrowRight, 
  Github, 
  Linkedin, 
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import { useRef, useState } from "react";
import profileImage from "./assets/dsdev1.png";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 glass"
    >
      <div className="text-[20px] font-bold tracking-[-1px] uppercase">
        DSDev
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-[12px] font-medium tracking-[1px] uppercase opacity-60">
        <a href="#servicos" className="hover:opacity-100 transition-opacity">Projetos</a>
        <a href="#diferenciais" className="hover:opacity-100 transition-opacity">Processo</a>
        <a href="#sobre" className="hover:opacity-100 transition-opacity">Sobre</a>
      </div>

      <motion.a 
        href="https://wa.me/5511941900585?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20landing%20page."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-2.5 bg-white text-black text-[12px] font-semibold uppercase tracking-wider rounded-full hover:bg-white/90 transition-all text-center"
      >
        Solicitar Orçamento
      </motion.a>
    </motion.nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-48 pb-32 flex flex-col items-center justify-center overflow-hidden px-12 text-center min-h-[90vh]">
      {/* Hero Background Highlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </motion.div>
      </div>

      <motion.div style={{ y, opacity }} className="max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-8 border border-[#4ade80]/30 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] bg-[#4ade80]/5 text-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.1)]"
        >
          Aumente seus clientes sem gastar mais com anúncios
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[52px] md:text-[64px] font-semibold leading-[1.1] tracking-[-2px] mb-4 text-gradient"
        >
          Soluções Digitais<br />com DNA de Inovação
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[16px] md:text-[18px] opacity-60 max-w-[600px] mx-auto leading-relaxed mb-10"
        >
          Criador de interfaces de alto impacto e aplicações eficientes para gerar renda no seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <motion.a 
            href="https://wa.me/5511941900585?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20landing%20page."
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white text-black text-[14px] font-bold uppercase tracking-wider rounded-full hover:bg-white/90 transition-all text-center shadow-xl shadow-white/10"
          >
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  const techStack = ["Python", "JavaScript", "HTML5", "CSS3", "Git/GitHub", "React", "Vite"];

  const cards = [
    {
      title: "Especialidade Principal",
      content: <>Desenvolvimento de Sites e Web Apps focados em <span className="text-white font-bold">performance e experiência do usuário</span>.</>,
      className: "md:col-span-2 accent-box",
      bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      label: "WEB"
    },
    {
      title: "Formação",
      content: <>Universidade Cruzeiro do Sul <br /><span className="text-[14px] opacity-60 font-normal">Análise e Desenv. de Sistemas</span></>,
      bg: "https://images.unsplash.com/photo-1523050335456-c38a70a7dfa1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Tech Stack",
      content: (
        <div className="flex flex-wrap mt-2">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>
      ),
      bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Valores",
      content: <>Transparência, Parceria e <span className="text-white font-bold">Honestidade</span> em cada entrega.</>,
      bg: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Diferencial",
      content: <>Abordagem proativa e cuidadosa com foco nos <span className="text-white font-bold">objetivos de negócio</span> do cliente.</>,
      className: "md:col-span-2",
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      label: "PRO"
    },
    {
      title: "Status",
      content: <span className="text-[#4ade80]">● Disponível para Novos Projetos</span>,
      bg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="diferenciais" className="py-10 px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bento-card relative overflow-hidden group ${card.className || ""}`}
          >
            <div className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
              <img src={card.bg} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10">
              <div className="card-title">{card.title}</div>
              <div className="card-content">{card.content}</div>
            </div>
            {card.label && (
              <div className="absolute bottom-[-20px] right-[-20px] text-[80px] font-black opacity-[0.03] pointer-events-none z-0">
                {card.label}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Sistemas Customizados",
      desc: "Desenvolvimento de softwares sob medida para automação de processos e gestão eficiente.",
      icon: <Code2 className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />,
      bg: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Landing Pages",
      desc: "Páginas focadas em transformar visitantes em clientes reais através de design persuasivo.",
      icon: <Zap className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />,
      bg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Consultoria Técnica",
      desc: "Orientação especializada para quem está iniciando sua jornada digital ou quer evoluir.",
      icon: <MessageSquare className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />,
      bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="servicos" className="py-24 px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-[12px] uppercase tracking-[2px] opacity-40 mb-2">Serviços</h2>
        <h3 className="text-[40px] font-semibold tracking-[-1.5px] leading-tight">Soluções Digitais que<br />Geram Resultados Reais</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bento-card min-h-[280px] group relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
              <img src={s.bg} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="relative z-10">
              <div className="p-4 bg-black rounded-2xl w-fit mb-6 border border-cyan-500/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1),0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1),0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
                {s.icon}
              </div>
              <div>
                <h4 className="text-[20px] font-semibold mb-3">{s.title}</h4>
                <p className="text-[14px] opacity-60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const [avatarSrc, setAvatarSrc] = useState(profileImage);

  return (
    <section id="sobre" className="py-24 px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative w-32 h-32 mx-auto mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent animate-pulse" />
          <img 
            src={avatarSrc}
            onError={() => setAvatarSrc("/dsdev1.png")}
            alt="Denis Sacramento" 
            className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10"
            loading="eager"
            decoding="async"
          />
        </div>
        <Quote className="w-10 h-10 mx-auto opacity-20 mb-8" />
        <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight leading-tight italic opacity-90">
          "Acredito que a tecnologia pode transformar vidas e estou em constante evolução para contribuir com esse impacto."
        </h2>
      </motion.div>
      
      <p className="text-[16px] opacity-60 leading-relaxed mb-12">
        Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação. Meu objetivo é me tornar um desenvolvedor capaz de criar soluções eficientes que impactem positivamente pessoas e empresas.
      </p>

      <div className="flex justify-center">
        <motion.a 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/5511941900585?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20landing%20page." 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#25D366]/20"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[11px] uppercase tracking-[1px] opacity-40">
          &copy; 2026 Denis Sacramento - DSDev.
        </div>
        
        <div className="text-[11px] uppercase tracking-[1px] opacity-40">
          ESTUDANTE DE ADS | CRUZEIRO DO SUL
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global Background Image & Gradient */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
        <div className="absolute inset-0 opacity-[0.04]">
          <img 
            src="https://images.unsplash.com/photo-1517139274687-b92719af0e83?auto=format&fit=crop&q=80&w=2000" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Subtle Grid Pattern for the whole page */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}
