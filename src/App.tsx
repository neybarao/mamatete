/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import TestePezinho from './pages/TestePezinho';
import ServicesPage from './pages/ServicesPage';
import Logo from './components/Logo';
import { 
  Heart, 
  Baby, 
  Sparkles, 
  Phone, 
  Instagram, 
  Menu, 
  X, 
  CheckCircle2, 
  Calendar,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  MapPin,
  BookOpen,
  Home as HomeIcon,
  Users
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <a href="#inicio" className="text-ink hover:text-brand-terracotta transition-colors">
          <Logo className="h-20" />
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
            <a key={item} href={item === 'Serviços' ? '#teste-do-pezinho' : `#${item.toLowerCase().replace('í', 'i').replace('ç', 's')}`} className="text-[11px] uppercase tracking-[0.2em] font-medium text-ink/60 hover:text-brand-terracotta transition-colors">
              {item}
            </a>
          ))}
          <a href="https://wa.me/5567998285845" target="_blank" rel="noreferrer" className="btn-pill bg-ink text-white hover:bg-brand-terracotta">
            Agendar
          </a>
        </div>
        
        <button className="md:hidden text-ink">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="h-screen relative flex items-center overflow-hidden">
      {/* Full Screen Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop" 
        alt="Maternidade" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 w-full px-8 md:px-24 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-white/90 text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Consultoria Especializada</p>
          <h1 className="text-6xl md:text-9xl text-white leading-[0.9] mb-8">
            Onde o cuidado <br />
            <span className="font-light">encontra a paz.</span>
          </h1>
          <div className="flex gap-6">
            <a href="#servicos" className="btn-pill bg-white text-ink hover:bg-brand-sage">
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Glass Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="glass-card p-8 rounded-2xl max-w-xs">
          <p className="text-[10px] uppercase tracking-widest text-ink/60 mb-4">Próxima Turma</p>
          <p className="text-xl font-sans font-medium mb-4">Preparação para o Parto & Amamentação</p>
          <a href="#contact" className="text-xs font-bold border-b border-ink pb-1 hover:text-brand-terracotta hover:border-brand-terracotta transition-all">Saber mais</a>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="img-rounded aspect-[4/5] relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" 
              alt="Consultoria" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-terracotta">Nossa Essência</p>
              <h2 className="text-5xl md:text-7xl leading-tight">
                Apoiamos sua jornada <br />
                <span>com leveza.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-ink/70 leading-relaxed font-light">
              <p>
                Na Mamatetê, acreditamos que cada mãe merece ser ouvida, acolhida e guiada com base em evidências e muito afeto.
              </p>
              <p>
                Nossa missão é transformar o desafio da amamentação em um momento de conexão profunda entre você e seu bebê.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-beige">
              <div>
                <p className="text-3xl font-serif mb-2">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-ink/50">Famílias Apoiadas</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-ink/50">Atendimento Humanizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const homeServices = [
    { 
      title: 'Atendimento Domiciliar', 
      desc: 'Conforto e segurança no ambiente familiar para mãe e bebê.',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      icon: <HomeIcon size={24} />
    },
    { 
      title: 'Consultoria em Amamentação', 
      desc: 'Apoio técnico e emocional para uma amamentação tranquila.',
      img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop',
      icon: <Heart size={24} />
    },
    { 
      title: 'Cursos', 
      desc: 'Capacitação essencial: Primeiros Socorros e Treinamento de Babá.',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
      icon: <BookOpen size={24} />
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-brand-beige/10">
      <div className="max-w-[1600px] mx-auto">
        {/* Highlight for Teste do Pezinho */}
        <div id="teste-do-pezinho" className="mb-24 bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-brand-beige/50 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-terracotta">Destaque</p>
            <h2 className="text-5xl md:text-7xl">Teste do <br /><span>Pezinho</span></h2>
            <p className="text-lg text-ink/70 font-light leading-relaxed">
              Oferecemos 5 planos completos (Ampliado, Plus, Master, Ultra e Premium) para garantir a saúde do seu bebê desde os primeiros dias.
            </p>
            <Link to="/teste-do-pezinho" className="btn-pill bg-ink text-white inline-flex items-center gap-3 hover:bg-brand-terracotta">
              Ver Planos e Doenças <ChevronRight size={18} />
            </Link>
          </div>
          <div className="img-rounded aspect-video relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop" 
              alt="Teste do Pezinho" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-terracotta">Nossa Especialidade</p>
            <h2 className="text-5xl md:text-7xl">Serviços pensados <br /> para o <span>seu bem-estar.</span></h2>
          </div>
          <Link to="/servicos" className="btn-pill border border-ink/20 hover:bg-ink hover:text-white flex items-center gap-2">
            Ver todos os serviços <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeServices.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-sans mb-4">{service.title}</h3>
                <p className="text-white/80 font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Quote = () => {
  const testimonials = [
    {
      text: "O apoio que recebi da Mamatetê foi fundamental para que eu pudesse amamentar com prazer e sem dor. Um divisor de águas na minha maternidade.",
      author: "Mariana Silva",
      info: "Mãe do Theo, 4 meses"
    },
    {
      text: "A consultoria domiciliar trouxe a calma que eu precisava nos primeiros dias. O atendimento humanizado faz toda a diferença.",
      author: "Ana Paula",
      info: "Mãe da Alice, 2 meses"
    },
    {
      text: "O curso de primeiros socorros me deu a segurança necessária para cuidar do meu filho. Recomendo a todos os pais.",
      author: "Beatriz Costa",
      info: "Mãe do Pedro, 6 meses"
    },
    {
      text: "O teste do pezinho ultra foi realizado com muito carinho e precisão. Me senti muito segura com a equipe.",
      author: "Juliana Lima",
      info: "Mãe da Clara, 1 mês"
    },
    {
      text: "A laserterapia ajudou muito na minha cicatrização. A equipe da Mamatetê é extremamente profissional e acolhedora.",
      author: "Fernanda Souza",
      info: "Mãe do Lucas, 3 meses"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-brand-sage/20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        <Heart className="mx-auto text-brand-terracotta" size={40} fill="currentColor" />
        
        <div className="relative h-[300px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center"
            >
              <h2 className="text-3xl md:text-5xl leading-tight italic font-light font-serif">
                "{testimonials[current].text}"
              </h2>
              <div className="mt-8 space-y-2">
                <p className="font-bold tracking-widest uppercase text-[10px] font-sans">{testimonials[current].author}</p>
                <p className="text-ink/50 text-xs font-sans">{testimonials[current].info}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-brand-terracotta w-6' : 'bg-brand-terracotta/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-terracotta">Contato</p>
              <h2 className="text-5xl md:text-7xl">Vamos iniciar <br /> essa <span>jornada?</span></h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/50">Instagram</p>
                  <p className="text-lg">@espacomamatete</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/50">WhatsApp</p>
                  <p className="text-lg">(67) 99828-5845</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-beige flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/50">Endereço</p>
                  <p className="text-lg">Rua Humberto de Campos 185 A, Jardim dos Estados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative img-rounded aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
              alt="Consultório" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-terracotta/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href="https://wa.me/5567998285845" 
                target="_blank" 
                rel="noreferrer"
                className="btn-pill bg-white text-ink shadow-2xl hover:bg-brand-sage flex items-center gap-3"
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-brand-beige">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <span className="text-ink">
          <Logo className="h-24" />
        </span>
        
        <div className="flex gap-12">
          <a href="https://instagram.com/espacomamatete" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold text-ink/40 hover:text-brand-terracotta transition-colors">
            Instagram
          </a>
          <a href="https://wa.me/5567998285845" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold text-ink/40 hover:text-brand-terracotta transition-colors">
            WhatsApp
          </a>
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-ink/30">
          © Mamatetê • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen selection:bg-brand-sage selection:text-ink">
      <Navbar />
      <Hero />
      <About />
      <Quote />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste-do-pezinho" element={<TestePezinho />} />
        <Route path="/servicos" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}
