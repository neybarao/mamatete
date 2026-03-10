import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

interface ServiceProps {
  service: { title: string; desc: string };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [isFlipped, ReactSetIsFlipped] = React.useState(false);

  const CardContent = (
    <motion.div
      className="relative w-full h-full transition-all duration-500 preserve-3d"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
    >
      {/* Front */}
      <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-3xl shadow-sm border border-brand-beige/50 flex flex-col justify-center items-center text-center">
        <div className="w-12 h-12 bg-brand-sage/20 text-brand-terracotta rounded-xl flex items-center justify-center mb-6">
          <Sparkles size={24} />
        </div>
        <h3 className="text-2xl font-sans text-ink">{service.title}</h3>
        <p className="mt-4 text-[10px] uppercase tracking-widest text-brand-terracotta font-bold">Clique para detalhes</p>
      </div>

      {/* Back */}
      <div 
        className="absolute inset-0 backface-hidden bg-brand-beige p-8 rounded-3xl shadow-sm border border-brand-beige flex flex-col justify-center items-center text-center"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <h3 className="text-xl font-sans text-ink mb-4">{service.title}</h3>
        <p className="text-ink/70 leading-relaxed font-light">{service.desc}</p>
      </div>
    </motion.div>
  );

  if (service.title === 'Teste do Pezinho') {
    return (
      <Link 
        to="/teste-do-pezinho"
        className="relative h-80 w-full cursor-pointer perspective-1000 block"
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div 
      className="relative h-80 w-full cursor-pointer perspective-1000"
      onClick={() => ReactSetIsFlipped(!isFlipped)}
    >
      {CardContent}
    </div>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: 'Atendimento Domiciliar', desc: 'Conforto e segurança no ambiente familiar para mãe e bebê.' },
    { title: 'Avaliação e Tratamento Fonoaudiológico', desc: 'Especialista em funções orofaciais e amamentação.' },
    { title: 'Consultoria em Amamentação', desc: 'Apoio técnico e emocional para uma amamentação tranquila.' },
    { title: 'Consultoria nos Cuidados com o Recém Nascido', desc: 'Orientações práticas sobre a rotina e cuidados diários.' },
    { title: 'Curso de Primeiros Socorros', desc: 'Capacitação essencial para lidar com emergências infantis.' },
    { title: 'Exame de Bilirrubina Transcutâneo', desc: 'Avaliação rápida e indolor do nível de icterícia.' },
    { title: 'Fototerapia Neonatal Domiciliar', desc: 'Tratamento de icterícia com equipamentos modernos em casa.' },
    { title: 'Furo Humanizado', desc: 'Colocação de brincos com técnica segura e acolhedora.' },
    { title: 'Infusão de Medicação', desc: 'Administração segura de medicamentos sob supervisão.' },
    { title: 'Laserterapia', desc: 'Auxílio na cicatrização e alívio de dores mamárias.' },
    { title: 'Taping', desc: 'Técnica de bandagem para suporte e alívio de desconfortos.' },
    { title: 'Teste da Bochechinha', desc: 'Triagem genética neonatal avançada para prevenção.' },
    { title: 'Teste da Orelhinha', desc: 'Avaliação auditiva precoce e fundamental para o bebê.' },
    { title: 'Teste do Pezinho', desc: 'Exame laboratorial para detecção de doenças raras.' },
    { title: 'Treinamento de Babá', desc: 'Capacitação profissional para cuidados especializados.' },
  ].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <header className="py-12 px-8 md:px-24 border-b border-brand-beige flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-ink/60 hover:text-brand-terracotta transition-colors">
          <ChevronLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
        </Link>
        <span className="text-ink">
          <Logo className="h-16" />
        </span>
      </header>

      <section className="section-padding">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-2xl space-y-6 mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-terracotta">Nossa Especialidade</p>
            <h2 className="text-5xl md:text-7xl">Todos os nossos <br /> <span>serviços.</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-brand-beige text-center">
        <p className="text-[10px] uppercase tracking-widest text-ink/30">
          © Mamatetê • Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default ServicesPage;
