import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Check, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const plans = [
  {
    name: 'Ampliado',
    price: 'R$ 329,00',
    diseases: [
      'Hipotireoidismo Congênito primário',
      'Hipotireoidismo Congênito secundário',
      'HipoTBGnemia',
      'Fenilcetonúria',
      'Anemia Falciforme',
      'Doença do Xarope do Bordo',
      'Hiperleucinemia',
      'Hipervalinemia',
      'Hiperfenilalaninemia',
      'Hidroxiprolinemia',
      'Hiperglicinemia',
      'Hiperprolinemia',
      'Homocistinúria',
      'Hipermetioninemia transitórias',
      'Hiperargininemia',
      'Hiperlisinemia',
      'Hiperfenilalaninemia (HPHE)',
      'Hipertriptofaninemia',
      'Histidinemia',
      'Tirosinemias',
      'Tirosinemia Neonatal Transitória (TNT)',
      'Hiperplasia Adrenal Congênita',
      'Fibrose Cística',
      'Portador de HbS, HbC, HbD, HbE e outras variantes de Hb (Hemoglobinopatias)'
    ]
  },
  {
    name: 'Plus',
    price: 'R$ 399,00',
    diseases: [
      'Hipotireoidismo Congênito primário',
      'Hipotireoidismo Congênito secundário',
      'HipoTBGnemia',
      'Fenilcetonúria',
      'Anemia Falciforme',
      'Doença do Xarope do Bordo',
      'Hiperleucinemia',
      'Hipervalinemia',
      'Hiperfenilalaninemia',
      'Hidroxiprolinemia',
      'Hiperglicinemia',
      'Hiperprolinemia',
      'Homocistinúria',
      'Hipermetioninemia transitórias',
      'Hiperargininemia',
      'Hiperlisinemia',
      'Hiperfenilalaninemia (HPHE)',
      'Hipertriptofaninemia',
      'Histidinemia',
      'Tirosinemias',
      'Tirosinemia Neonatal Transitória (TNT)',
      'Hiperplasia Adrenal Congênita',
      'Fibrose Cística',
      'Galactosemia Tipo I',
      'Galactosemia Tipo II',
      'Galactosemia tipo III',
      'Deficiência de Biotinidase',
      'Toxoplasmose Congênita',
      'Portador de HbS, HbC, HbD, HbE e outras variantes de Hb (Hemoglobinopatias)'
    ]
  },
  {
    name: 'Master',
    price: 'R$ 599,00',
    diseases: [
      'Hipotireoidismo Congênito primário',
      'Hipotireoidismo Congênito secundário',
      'HipoTBGnemia',
      'Fenilcetonúria',
      'Anemia Falciforme',
      'Doença do Xarope do Bordo',
      'Hiperleucinemia',
      'Hipervalinemia',
      'Hiperfenilalaninemia',
      'Hidroxiprolinemia',
      'Hiperglicinemia',
      'Hiperprolinemia',
      'Homocistinúria',
      'Hipermetioninemia transitórias',
      'Hiperargininemia',
      'Hiperlisinemia',
      'Hiperfenilalaninemia (HPHE)',
      'Hipertriptofaninemia',
      'Histidinemia',
      'Tirosinemias',
      'Tirosinemia Neonatal Transitória (TNT)',
      'Hiperplasia Adrenal Congênita',
      'Fibrose Cística',
      'Galactosemia Tipo I',
      'Galactosemia Tipo II',
      'Galactosemia tipo III',
      'Deficiência de Biotinidase',
      'Toxoplasmose Congênita',
      'Deficiência de G-6-PD',
      'Sífilis Congênita',
      'Citomegalovirose Congênita',
      'Doença de Chagas Congênita',
      'Rubéola Congênita',
      'Portador de HbS, HbC, HbD, HbE e outras variantes de Hb (Hemoglobinopatias)'
    ]
  },
  {
    name: 'Ultra',
    price: 'R$ 949,00',
    diseases: [
      'Hipotireoidismo Congênito primário',
      'Hipotireoidismo Congênito secundário',
      'HipoTBGnemia',
      'Fenilcetonúria',
      'Anemia Falciforme',
      'Portador de HbS, HbC, HbD, HbE e outras variantes de Hb (Hemoglobinopatias)',
      'Doença do Xarope do Bordo',
      'Hiperleucinemia',
      'Hipervalinemia',
      'Hidroxiprolinemia',
      'Hiperglicinemia',
      'Hiperprolinemia',
      'Homocistinúria',
      'Hipermetioninemia transitórias',
      'Hiperargininemia',
      'Hiperlisinemia',
      'Hiperfenilalaninemia (HPHE)',
      'Hipertriptofaninemia',
      'Histidinemia',
      'Tirosinemias',
      'Tirosinemia Neonatal Transitória (TNT)',
      'Hiperplasia Adrenal Congênita',
      'Fibrose Cística',
      'Galactosemia Tipo I, Tipo II e Tipo III',
      'Deficiência de Biotinidase',
      'Toxoplasmose Congênita',
      'Deficiência de G-6-PD',
      'Sífilis Congênita',
      'Citomegalovirose Congênita',
      'Doença de Chagas Congênita',
      'Rubéola Congênita',
      'Homocistinúria clássica (HCU)',
      'Hipermetioninemia',
      'Hiperalaninemia',
      'Argininemia',
      'Hiperornitinemia',
      'Defeitos da biosíntese do cofator da biopterina e defeitos da regeneração do cofator da biopterina',
      'Acidúria Arginosuccínica (Deficiência de ASA liase)',
      'Citrulinemia (Deficiência de ASA Sintetase)',
      'Homocitrulinemia',
      'Acidemia Metilmalônica (MMA)',
      'Acidemia Malônica (MAL)',
      'Acidemia Propiônica (PA)',
      'Acidemia Isovalérica (IA)',
      'Acidemia Glutárica Tipo I (GA-I)',
      'Deficiência Múltipla de Carboxilases (MCD)',
      'Deficiência de 3-metilcrotonil-CoA Carboxilase (3MCC)',
      'Deficiência de 2-metilbutiril-CoA Desidrogenase (2MBG)',
      'Deficiência de Isobutiril-CoA Desidrogenase (IBG)',
      'Acidúria hidroximetilglutárica (HMG-CoA)',
      'Deficiência de cobalamina A e B (Cbl A,B)',
      'Deficiência de beta-cetotiolase (BKT)',
      'Distúrbios da cobalamina C e D (Cbl C,D)',
      'Acidúria 2-metil-3-hidroxibutírica (2M3HBA)',
      'Acidúria 3-metilglutacônica (3MGA)',
      'Deficiência de Carnitina/Acilcarnitina Translocase (CACT)',
      'Deficiência de Carnitina Palmitoil Transferase Tipo I e II (CPT I, II)',
      'Deficiência de Acil-CoA Desidrogenase de Cadeia Curta (SCAD)',
      'Deficiência de L-3-Hidroxiacil-CoA Desidrogenase de Cadeia média/Curta (M/SCHAD)',
      'Deficiência de Acil-CoA Desidrogenase de Cadeia Média (MCAD)',
      'Deficiência de Acil-CoA Desidrogenase de Cadeia Muito Longa (VLCAD)',
      'Deficiência de Hidroxi-Acil-CoA Desidrogenase de Cadeia Longa (LCHAD)',
      'Deficiência Múltipla na desidrogenação de Acil-CoA (MADD ou Acidúria Glutárica Tipo II)',
      'Deficiência de Proteína Trifuncional (TFP)',
      'Deficiência de 2,4-Dienoil-CoA Redutase (DERED)',
      'Deficiência primária de carnitina (CUD)',
      'Deficiência de cetoacil-CoAtiolase de cadeia média (MCAT)'
    ]
  },
  {
    name: 'Premium',
    price: 'R$ 2.399,00',
    diseases: [
      'Hipotireoidismo Congênito primário',
      'Hipotireoidismo Congênito secundário',
      'HipoTBGnemia',
      'Fenilcetonúria',
      'Anemia Falciforme',
      'Portador de HbS, HbC, HbD, HbE e outras variantes de Hb (Hemoglobinopatias)',
      'Doença do Xarope do Bordo',
      'Hiperleucinemia',
      'Hipervalinemia',
      'Hidroxiprolinemia',
      'Hiperglicinemia',
      'Hiperprolinemia',
      'Homocistinúria',
      'Hipermetioninemia transitórias',
      'Hiperargininemia',
      'Hiperlisinemia',
      'Hiperfenilalaninemia (HPHE)',
      'Hipertriptofaninemia',
      'Histidinemia',
      'Tirosinemias',
      'Tirosinemia Neonatal Transitória (TNT)',
      'Hiperplasia Adrenal Congênita',
      'Fibrose Cística',
      'Galactosemia Tipo I, Tipo II e Tipo III',
      'Deficiência de Biotinidase',
      'Toxoplasmose Congênita',
      'Deficiência de G-6-PD',
      'Sífilis Congênita',
      'Citomegalovirose Congênita',
      'Doença de Chagas Congênita',
      'Rubéola Congênita',
      'Doença de Gaucher',
      'Doença de Pompe',
      'Doença de Fabry',
      'MPS tipo 1 – Doença de Hurler',
      'Doença de Kraabe',
      'Niemann-Pick A ou B',
      'HIV 1 e 2',
      'Deficiência de Ácidos Graxos de Cadeia Média - Mutação da MCAD',
      'Surdez Congênita Não Sindrômica de Origem Genética - Mutação da Conexina',
      'Síndrome da Imunodeficiência Combinada Grave (SCID)',
      'Deficiência de c (CD 132)',
      'Deficiência de JAK3',
      'Deficiência de IL7R',
      'Deficiência de CD45',
      'Deficiência de CD3',
      'Deficiência de coronin-1A',
      'Deficiência de LAT',
      'Deficiência de RAG 1',
      'Deficiência de RAG2',
      'Deficiência de Artemis (DCLREC1C)',
      'Deficiência de DNA-PKcs',
      'Deficiência de Cernunnos/XLF',
      'DNA Ligase IV',
      'Disgenina reticular (Deficiência de AK2)',
      'Deficiência de Adesonina deaminase (ADA)',
      'Agamaglobulinemia ligada ao X - Deficiência de BTK',
      'Deficiência de cadeias pesadas',
      'Deficiência de 5',
      'Deficiência de Ig',
      'Deficiência de BLNK',
      'Deficiência de PIK3R1',
      'Deficiência do fator de transcrição E47',
      'Deficiência ligada a RAC2',
      'Deficiência ligada a SLC39A7',
      'Deficiência ligada a TOP2B',
      'Homocistinúria clássica (HCU)',
      'Hipermetioninemia',
      'Defeitos da biosíntese do cofator da biopterina e defeitos da regeneração do cofator da biopterina',
      'Hiperalaninemia',
      'Argininemia',
      'Hiperornitinemia',
      'Acidúria Arginosuccínica (Deficiência de ASA liase)',
      'Citrulinemia (Deficiência de ASA Sintetase)',
      'Homocitrulinemia',
      'Acidemia Metilmalônica (MMA)',
      'Acidemia Malônica (MAL)',
      'Acidemia Propiônica (PA)',
      'Acidemia Isovalérica (IA)',
      'Acidemia Glutárica Tipo I (GA-I)',
      'Deficiência Múltipla de Carboxilases (MCD)',
      'Deficiência de 3-metilcrotonil-CoA Carboxilase (3MCC)',
      'Deficiência de 2-metilbutiril-CoA Desidrogenase (2MBG)',
      'Deficiência de Isobutiril-CoA Desidrogenase (IBG)',
      'Acidúria hidroximetilglutárica (HMG-CoA)',
      'Deficiência de cobalamina A e B (Cbl A,B)',
      'Deficiência de beta-cetotiolase (BKT)',
      'Distúrbios da cobalamina C e D (Cbl C,D)',
      'Acidúria 2-metil-3-hidroxibutírica (2M3HBA)',
      'Acidúria 3-metilglutacônica (3MGA)',
      'Deficiência de Carnitina/Acilcarnitina Translocase (CACT)',
      'Deficiência de Carnitina Palmitoil Transferase Tipo I e II (CPT I, II)',
      'Deficiência de Acil-CoA Desidrogenase de Cadeia Curta (SCAD)',
      'Deficiência de L-3-Hidroxiacil-CoA Desidrogenase de Cadeia média/Curta (M/SCHAD)',
      'Deficiência de Acil-CoA Desidrogenase de Cadeia Média (MCAD)',
      'Deficiência de Acil-CoA Desidrogenase de Cadeia Muito Longa (VLCAD)',
      'Deficiência de Hidroxi-Acil-CoA Desidrogenase de Cadeia Longa (LCHAD)',
      'Deficiência Múltipla na desidrogenação de Acil-CoA (MADD ou Acidúria Glutárica Tipo II)',
      'Deficiência de Proteína Trifuncional (TFP)',
      'Deficiência de 2,4-Dienoil-CoA Redutase (DERED)',
      'Deficiência primária de carnitina (CUD)',
      'Deficiência de cetoacil-CoAtiolase de cadeia média (MCAT)',
      'Atrofia Muscular Espinhal (AME5q)'
    ]
  }
];

const DiseaseModal = ({ isOpen, onClose, planName, diseases }: { isOpen: boolean, onClose: () => void, planName: string, diseases: string[] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-brand-beige flex justify-between items-center bg-brand-cream/30">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-terracotta mb-1">Lista Completa</p>
                <h3 className="text-2xl font-sans text-ink">{planName}</h3>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brand-beige/20 flex items-center justify-center text-ink hover:bg-brand-terracotta hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-grow">
              <p className="text-xs text-ink/40 uppercase tracking-widest font-bold mb-6">{diseases.length} Doenças Identificadas</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {diseases.map((disease, idx) => (
                  <div key={idx} className="flex gap-3 text-xs text-ink/70 leading-tight items-start">
                    <Check size={14} className="text-brand-sage shrink-0 mt-0.5" />
                    <span>{disease}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border-t border-brand-beige bg-brand-cream/30">
              <a 
                href={`https://wa.me/5567998285845?text=Olá! Gostaria de agendar o Teste do Pezinho plano ${planName}`}
                target="_blank"
                rel="noreferrer"
                className="btn-pill bg-ink text-white w-full text-center hover:bg-brand-terracotta flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> Agendar este Plano
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TestePezinho: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string, diseases: string[] } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream">
      <DiseaseModal 
        isOpen={!!selectedPlan} 
        onClose={() => setSelectedPlan(null)} 
        planName={selectedPlan?.name || ''} 
        diseases={selectedPlan?.diseases || []} 
      />
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

      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-terracotta">Exames Neonatais</p>
            <h1 className="text-6xl md:text-8xl leading-tight">Teste do <span>Pezinho</span></h1>
            <p className="max-w-2xl mx-auto text-lg text-ink/70 font-light leading-relaxed">
              Um dos exames mais importantes para o seu bebê. Realizado através da coleta de gotinhas de sangue do calcanhar, permite identificar precocemente diversas doenças.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="pb-24 px-8 md:px-16">
          <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-brand-beige/50 flex flex-col h-full"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-sans text-ink mb-2">{plan.name}</h3>
                  <p className="text-3xl font-light text-brand-terracotta">{plan.price}</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Doenças Cobertas ({plan.diseases.length})</p>
                  <ul className="space-y-3">
                    {plan.diseases.slice(0, 10).map((disease, idx) => (
                      <li key={idx} className="flex gap-3 text-xs text-ink/70 leading-tight">
                        <Check size={14} className="text-brand-sage shrink-0 mt-0.5" />
                        <span>{disease}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.diseases.length > 10 && (
                    <button 
                      onClick={() => setSelectedPlan(plan)}
                      className="text-[11px] font-bold text-brand-terracotta uppercase tracking-widest hover:text-ink transition-colors pt-2 flex items-center gap-2"
                    >
                      + {plan.diseases.length - 10} doenças testadas
                    </button>
                  )}
                </div>

                <a 
                  href={`https://wa.me/5567998285845?text=Olá! Gostaria de agendar o Teste do Pezinho plano ${plan.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill bg-ink text-white w-full text-center hover:bg-brand-terracotta flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> Agendar
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-brand-beige text-center">
        <p className="text-[10px] uppercase tracking-widest text-ink/30">
          © Mamatetê • Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default TestePezinho;
