import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Database, LineChart, MousePointerClick, RefreshCcw, Target, Heart, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const renderTextWithMentions = (text: string) => {
  return text.split(/(@\w+)/g).map((part, i) => 
    part.startsWith('@') ? <span key={i} className="text-blue-400 font-medium">{part}</span> : part
  );
};

const socialTestimonials = [
  {
    name: 'Estética Avançada',
    handle: '@estetica_avancada',
    platform: 'instagram',
    text: 'A estratégia da @jcdigital nos ajudou a lotar a agenda da clínica e aumentar nossos agendamentos em 350%. Serviço impecável. 🙌',
    likes: '1.2k',
    comments: '124',
    time: '20:10 | 23 Mar 2024',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    layout: 'style1'
  },
  {
    name: 'TechSolutions B2B',
    handle: '@techsolutions_br',
    platform: 'facebook',
    text: 'Reduzimos nosso CPA em 42% em menos de dois meses. A previsibilidade que a @jcdigital trouxe pro nosso comercial foi um game-changer. 🚀',
    likes: '856',
    comments: '45',
    time: '14:30 | 14 Fev 2024',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    layout: 'style2'
  },
  {
    name: 'Imobiliária Prime',
    handle: '@imobiliariaprime',
    platform: 'twitter',
    text: 'Chegamos a R$15M de VGV no nosso último lançamento. O tráfego e o ecossistema montado pela @jcdigital foram o diferencial. Impressionante 🎯',
    likes: '2.4k',
    comments: '312',
    time: '11:45 | 05 Abr 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    layout: 'style2'
  },
  {
    name: 'Escritório Ad.',
    handle: '@escritorio_adv',
    platform: 'instagram',
    text: 'Nunca tivemos tantos leads qualificados. A @jcdigital entende exatamente como funilar nosso público. Assumimos a liderança regional graças a eles. ⚖️',
    likes: '4k',
    comments: '89',
    time: '09:20 | 10 Jan 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    layout: 'style1'
  },
  {
    name: 'E-commerce XY',
    handle: '@ecom_xy',
    platform: 'facebook',
    text: 'Nosso ROAS saltou de 3x para 8.5x depois que mudamos toda a infraestrutura de anúncios com a equipe da @jcdigital. Eles não brincam em serviço! 🛍️',
    likes: '5k',
    comments: '400',
    time: '16:15 | 20 Dez 2023',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    layout: 'style1'
  },
  {
    name: 'Infoprodutor Expert',
    handle: '@info_expert',
    platform: 'twitter',
    text: 'Mais de R$ 1.2M faturados no nosso último lançamento de curso. A escala e a conversão criada pela @jcdigital foi surreal. Muito lucro na mesa! 📈',
    likes: '10.5k',
    comments: '1.2k',
    time: '22:00 | 02 Mai 2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    layout: 'style2'
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Background Glow Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#05070A]/80 backdrop-blur-md border-white/5 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg leading-none tracking-tighter">JC</span>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">JC DIGITAL</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#gestao" className="hover:text-blue-400 transition-colors">Gestão</a>
            <a href="#ecossistema" className="hover:text-white transition-colors">Ecossistema</a>
            <a href="#estrategia" className="hover:text-white transition-colors">Estratégia</a>
            <a href="#especialista" className="hover:text-white transition-colors">A Especialista</a>
            <a href="#clientes" className="hover:text-white transition-colors">Clientes</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-full text-sm hover:bg-blue-50 transition-all shadow-lg shadow-white/5 hover:scale-105 active:scale-95">
            Falar com Especialista
          </button>
        </div>
      </header>

      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400">Tráfego Pago & Alta Performance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-white tracking-tighter max-w-5xl leading-[0.9]"
          >
            Pare de tentar vender.{' '}<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Comece a escalar.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            Construímos um ecossistema completo de tráfego pago desenhado matematicamente para gerar previsibilidade, escala e lucro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all">
              Iniciar meu Projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="hidden sm:flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#05070A]"></div>
                <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#05070A]"></div>
                <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#05070A]"></div>
              </div>
              <span className="text-xs text-slate-500 font-medium">+200 clientes</span>
            </div>
          </motion.div>
        </section>

        {/* Gestão Baseado em Dados, Escala Baseada em Lucro */}
        <section id="gestao" className="py-24 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Escalabilidade</span>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-display font-extrabold text-white leading-[1.1] tracking-tighter break-words md:whitespace-nowrap">
                Gestão Baseada em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Dados,</span><br/>
                Escala Baseada em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Lucro.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Substituímos o "achismo" por previsibilidade matemática. Monitoramos cada etapa do seu funil e alocamos orçamento unicamente onde o Retorno sobre Investimento (ROI) é comprovado.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Tracking Avançado', text: 'Mapeamento completo da jornada do lead.', icon: <Target className="w-5 h-5 text-emerald-400" /> },
                  { title: 'Otimização Contínua', text: 'Testes A/B diários para maximizar conversão.', icon: <RefreshCcw className="w-5 h-5 text-blue-400" /> }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="mt-1 bg-white/5 p-2 rounded-lg border border-white/5">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-20 w-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-slate-500">Crescimento de Receita</p>
                    <h3 className="text-3xl font-bold text-white">R$ 2.4M</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                    <LineChart className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-6">
                  {/* Decorative Chart Bars */}
                  <div className="flex items-end gap-3 h-32 pt-6">
                    {[40, 55, 45, 70, 65, 85, 100].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-emerald-400/50 rounded-t-sm" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Custo por Aquisição (CPA)</p>
                      <p className="text-xl font-bold text-emerald-400">-42%</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Retorno (ROAS)</p>
                      <p className="text-xl font-bold text-blue-400">8.5x</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px] z-10"></div>
            </div>
          </div>
        </section>

        {/* O Ecossistema de Vendas */}
        <section id="ecossistema" className="py-24 px-6 lg:px-12 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tighter">O Ecossistema de Vendas</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Nossa engenharia de atração e retenção opera de forma integrada para converter desconhecidos em defensores da sua marca.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Target className="w-8 h-8 text-blue-400" />, title: "Atração Qualificada", desc: "Campanhas de tráfego pago hiper-segmentadas que atraem demanda com alta intenção de compra." },
                { icon: <MousePointerClick className="w-8 h-8 text-emerald-400" />, title: "Conversão Primária", desc: "Landing pages e funis desenhados com princípios neurocientíficos para máxima conversão." },
                { icon: <Database className="w-8 h-8 text-blue-500" />, title: "Retenção & LTV", desc: "Estratégias de automação e remarketing para maximizar o lucro sobre cada cliente adquirido." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/[0.05] p-10 rounded-3xl hover:bg-white/5 transition-colors group relative z-20"
                >
                  <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Estratégia de Crescimento */}
        <section id="estrategia" className="py-24 px-6 lg:px-12 relative border-t border-white/5">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tighter">Estratégia de Crescimento</h2>
              <p className="text-slate-400 text-lg leading-relaxed">Da imersão inicial ao scaling global: nosso roadmap para elevar o seu negócio ao próximo nível.</p>
            </div>

            <div className="space-y-8">
              {[
                { step: '01', title: 'Imersão Estratégica & Auditoria', desc: 'Mapeamos gargalos do seu funil atual, analisamos a concorrência e encontramos oportunidades ocultas (Blue Ocean).', color: 'from-blue-600 to-blue-400' },
                { step: '02', title: 'Setup de Infraestrutura & Assets', desc: 'Construção ou refatoração das páginas de vendas, criativos de alta performance e configurações de trackeamento.', color: 'from-blue-400 to-emerald-400' },
                { step: '03', title: 'Go-to-Market & Otimização', desc: 'Ativação das campanhas, coleta de dados primários e testes A/B intensivos para validar a melhor oferta.', color: 'from-emerald-400 to-emerald-500' },
                { step: '04', title: 'Escala Vertical e Horizontal', desc: 'Injeção de capital nos canais validados para escalar as vendas mantendo a margem de lucratividade saudável.', color: 'from-emerald-500 to-blue-600' },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i} 
                  className="group relative flex gap-6 md:gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br ${item.color} shadow-lg relative z-10`}>
                      {item.step}
                    </div>
                    {i !== 3 && <div className="w-px h-full bg-white/10 mt-4"></div>}
                  </div>
                  <div className="pb-12 pt-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* A Especialista */}
        <section id="especialista" className="py-24 px-6 lg:px-12 relative border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-5/12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 transition-opacity hover:opacity-0 duration-500"></div>
                {/* Imagem Placeholder - Pode ser substituída pela foto real da cliente */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Especialista JC Digital" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#05070A] via-[#05070A]/80 to-transparent z-20">
                  <p className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-1">Fundadora & Estrategista</p>
                  <h3 className="text-2xl font-bold text-white">Especialista JC Digital</h3>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-7/12 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-[1.1] tracking-tighter mb-6">
                  Prazer, eu sou a mente por trás da <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">JC Digital</span>.
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Não sou apenas uma "apertadora de botões". Sou uma gestora de tráfego e estrategista de negócios focada em <strong className="text-white">receita e escala</strong>. Minha missão é analisar o seu funil de ponta a ponta, elevar a sua taxa de conversão e alocar seu investimento para gerar o máximo de lucro.
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Ao longo da minha trajetória, gerenciei investimentos de 6 e 7 dígitos em anúncios, ajudando diversas empresas — desde comércios locais a e-commerces e infoprodutos — a multiplicarem seus resultados operando com <strong className="text-blue-400">ROI positivo e previsibilidade</strong>.
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Se você busca alguém que trate o caixa da sua empresa com a mesma seriedade que trata as métricas da plataforma de anúncios, você acaba de encontrar a parceira ideal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nossos Clientes */}
        <section id="clientes" className="py-24 px-6 lg:px-12 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tighter">
                Não aceite apenas nossa palavra.
              </h2>
              <h3 className="text-3xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tighter">
                Confie nos nossos parceiros.
              </h3>
            </div>
            
            {/* Masonry Social Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {socialTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="break-inside-avoid bg-white/[0.02] border border-white/[0.05] p-6 rounded-3xl hover:bg-white/[0.04] transition-all flex flex-col gap-4 shadow-xl shadow-black/50"
                >
                  {t.layout === 'style1' ? (
                    <>
                      <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1"><Heart className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors"/> {t.likes}</div>
                            <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors"/> {t.comments}</div>
                        </div>
                        <span>{t.time}</span>
                      </div>
                      <p className="text-slate-300 text-[15px] leading-relaxed mb-2">{renderTextWithMentions(t.text)}</p>
                      <div className="flex justify-between items-center mt-auto pt-2">
                        <div className="flex items-center gap-3">
                            <img src={t.avatar} className="w-10 h-10 rounded-full object-cover border border-white/10" alt={t.name}/>
                            <div className="flex flex-col">
                                <h4 className="text-white font-semibold text-sm leading-tight">{t.name}</h4>
                                <span className="text-slate-500 text-xs">{t.handle}</span>
                            </div>
                        </div>
                        <div className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                          {t.platform === 'instagram' && <Instagram size={20} className="text-pink-500" />}
                          {t.platform === 'facebook' && <Facebook size={20} className="text-blue-500" />}
                          {t.platform === 'twitter' && <Twitter size={20} className="text-slate-300" />}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                            <img src={t.avatar} className="w-10 h-10 rounded-full object-cover border border-white/10" alt={t.name}/>
                            <div className="flex flex-col">
                                <h4 className="text-white font-semibold text-sm leading-tight">{t.name}</h4>
                                <span className="text-slate-500 text-xs">{t.handle}</span>
                            </div>
                        </div>
                        <div className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                          {t.platform === 'instagram' && <Instagram size={20} className="text-pink-500" />}
                          {t.platform === 'facebook' && <Facebook size={20} className="text-blue-500" />}
                          {t.platform === 'twitter' && <Twitter size={20} className="text-slate-300" />}
                        </div>
                      </div>
                      <p className="text-slate-300 text-[15px] leading-relaxed mb-2">{renderTextWithMentions(t.text)}</p>
                      <div className="flex justify-between items-center text-xs text-slate-500 mt-auto pt-4 border-t border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1"><Heart className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors"/> {t.likes}</div>
                            <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors"/> {t.comments}</div>
                        </div>
                        <span>{t.time}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Dúvidas Frequentes */}
        <section id="faq" className="py-24 px-6 lg:px-12 relative border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 tracking-tighter">Dúvidas Frequentes</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { q: 'Em quanto tempo começo a ver resultados?', a: 'Nosso objetivo inicial é validar ofertas e canais nos primeiros 15 a 30 dias. Com o setup de infraestrutura pronto, você já poderá observar métricas de conversão em tempo real após a ativação.' },
                { q: 'A JC Digital cria o site e também faz os anúncios?', a: 'Sim. Oferecemos soluções End-to-End. Nossa equipe multidisciplinar cuida do UI/UX, engenharia da página de vendas e também a gestão de tráfego (Meta, Google, TikTok Ads).' },
                { q: 'Qual a diferença da consultoria para uma agência normal?', a: 'Nós não vendemos "criação de posts" ou "likes". Focamos 100% em engenharia de vendas e aquisição de clientes. Todo o nosso ecossistema é voltado para aumento de receita e ROI.' },
                { q: 'Como acompanho o retorno do meu investimento?', a: 'Disponibilizamos dashboards personalizados e relatórios recorrentes com métricas claras de CPA, ROAS, LTV e ticket médio, de forma 100% transparente.' }
              ].map((faq, i) => (
                <details key={i} className="group border border-white/10 bg-white/[0.02] rounded-2xl p-6 cursor-pointer hover:bg-white/[0.04] transition-colors [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-bold text-lg text-white list-none">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-slate-400 leading-relaxed pl-2 border-l-2 border-blue-500/50">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-12 relative flex justify-center">
          <div className="w-full max-w-5xl relative z-10 bg-gradient-to-br from-blue-900/20 to-emerald-900/10 border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6 relative z-10 tracking-tighter leading-[1.1]">
              O seu próximo nível começa com uma <br className="hidden md:block" /> estratégia sólida.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
              Dê o primeiro passo para escalar suas vendas e dominar o seu mercado. Fale com um de nossos especialistas e descubra onde estão as alavancas do seu negócio.
            </p>
            
            <button className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all mx-auto">
              Agendar uma Consultoria
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer / Bottom Bar (Matched from Design) */}
      <footer className="mt-12 py-12 px-6 lg:px-12 bg-white/[0.02] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg leading-none tracking-tighter">JC</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">JC DIGITAL</span>
            </div>
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} JC Digital. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-slate-400 mt-2">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          
          {/* Services Mini-Grid from Design HTML */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1 w-full md:w-auto">
            <div className="space-y-2 md:border-r border-white/5 pr-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">UI/UX Design</h4>
              <p className="text-xs text-slate-500 leading-tight">Interfaces intuitivas que convertem visitantes em clientes fiéis.</p>
            </div>
            <div className="space-y-2 md:border-r border-white/5 pr-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Development</h4>
              <p className="text-xs text-slate-500 leading-tight">Código performático otimizado para os Core Web Vitals.</p>
            </div>
            <div className="space-y-2 md:border-r border-white/5 pr-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Tráfego Pago</h4>
              <p className="text-xs text-slate-500 leading-tight">Gestão estratégica focada no seu retorno sobre investimento.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-tight">Copywriting</h4>
              <p className="text-xs text-slate-500 leading-tight">Textos persuasivos com foco total em conversão e vendas.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

