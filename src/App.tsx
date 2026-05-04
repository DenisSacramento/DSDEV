/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  Globe,
  Instagram,
  LayoutTemplate,
  Link2,
  MessageCircle,
  MessageSquareQuote,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511941900585";
const logoSrc = "/dsdev-logo.jpeg";
const heroPoints = [
  "Mais visibilidade no Google e nas buscas",
  "Mais conversão com páginas focadas em resultado",
  "Mais confiança para o cliente comprar ou chamar",
  "Mais vendas com um sistema que trabalha 24h por dia",
];

const instagramProblems = [
  "Você não é dono do Instagram",
  "Você não controla quem vê seu conteúdo",
  "O alcance pode cair de um dia para o outro",
  "Sua conta pode ser bloqueada ou limitada",
];

const siteReasons = [
  {
    title: "Controle total do seu negócio",
    subtitle: "Com um site, você controla layout, conteúdo e estratégia.",
    bullets: [
      "Não depende do algoritmo",
      "Não precisa pagar para alcançar seus próprios clientes",
      "Tem um espaço realmente seu",
    ],
    icon: Globe,
  },
  {
    title: "Autoridade e credibilidade",
    subtitle: "Empresas com site passam mais confiança.",
    bullets: ["Profissionalismo", "Estabilidade", "Segurança para o cliente comprar"],
    icon: ShieldCheck,
  },
  {
    title: "Aparecer no Google",
    subtitle: "Clientes podem chegar até você sem anúncio.",
    bullets: [
      "Ser encontrado no Google",
      "Receber visitas todos os dias",
      "Gerar clientes sem pagar por clique sempre",
    ],
    icon: Search,
  },
];

const landingReasons = [
  "Não tem distração",
  "Foca em uma única oferta",
  "Guia o cliente até a ação",
];

const journeySteps = [
  {
    step: "01",
    title: "Instagram chama atenção",
    text: "Conteúdo gera curiosidade e desperta interesse.",
    icon: Instagram,
  },
  {
    step: "02",
    title: "Anúncios trazem tráfego",
    text: "As pessoas certas chegam até o seu negócio.",
    icon: Target,
  },
  {
    step: "03",
    title: "Site constrói confiança",
    text: "Apresenta sua empresa, seus serviços e prova sua autoridade.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Landing page converte",
    text: "Foco total na oferta que realmente importa: ação.",
    icon: ShoppingCart,
  },
];

const practicalDifference = {
  a: [
    "Cliente vê o post",
    "Entra no perfil",
    "Manda mensagem",
    "Espera resposta",
    "Pode desistir",
  ],
  b: [
    "Cliente vê o anúncio",
    "Clica no link",
    "Vê proposta clara",
    "Confia",
    "Compra ou agenda na hora",
  ],
};

const directBenefits = [
  {
    n: "01",
    title: "Mais visitantes qualificados",
    text: "Atrai as pessoas certas para o seu negócio.",
    icon: Users,
  },
  {
    n: "02",
    title: "Mais pedidos de orçamento",
    text: "Facilita o contato e aumenta oportunidades.",
    icon: MessageSquareQuote,
  },
  {
    n: "03",
    title: "Mais vendas automáticas",
    text: "Vende 24h por dia, mesmo enquanto você dorme.",
    icon: ShoppingCart,
  },
  {
    n: "04",
    title: "Mais autoridade no mercado",
    text: "Transmite confiança e destaca sua marca da concorrência.",
    icon: Star,
  },
  {
    n: "05",
    title: "Crescimento previsível",
    text: "Cria fluxo constante e escalável de resultados.",
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Criamos o site profissional",
    text: "Um site moderno, rápido e estratégico que transmite confiança.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Criamos landing pages focadas",
    text: "Páginas feitas para converter visitantes em clientes.",
    icon: LayoutTemplate,
  },
  {
    step: "03",
    title: "Integramos com WhatsApp",
    text: "Atendimento rápido, direto e eficiente.",
    icon: MessageCircle,
  },
  {
    step: "04",
    title: "Ligamos com anúncios ou redes sociais",
    text: "Seu site recebe tráfego qualificado dos canais certos.",
    icon: Target,
  },
  {
    step: "05",
    title: "O sistema começa a gerar clientes",
    text: "Tudo passa a trabalhar junto para atrair, converter e escalar.",
    icon: BarChart3,
  },
];

const pricingPlans = [
  {
    name: "Básico",
    price: "R$ 599,00",
    featured: false,
    points: ["Landing page simples", "1 página", "Ideal para começar", "Foco em conversão rápida"],
  },
  {
    name: "Profissional",
    price: "R$ 999,00",
    featured: true,
    points: ["Site 2 páginas", "Estrutura completa", "Design profissional", "Mais autoridade e confiança"],
  },
  {
    name: "Avançado",
    price: "R$ 2.200,00",
    featured: false,
    points: ["Site 3 páginas completo", "Estrutura completa", "Design estratégico", "Foco em resultados reais"],
  },
] as const;

type BriefFormData = {
  nome: string;
  endereco: string;
  empresa: string;
  telefone: string;
  whatsapp: string;
  descricao: string;
};

const emptyBriefForm: BriefFormData = {
  nome: "",
  endereco: "",
  empresa: "",
  telefone: "",
  whatsapp: "",
  descricao: "",
};

function Navbar({ onOpenBrief }: { onOpenBrief: (context: string, description?: string) => void }) {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="site-shell fixed left-0 right-0 top-0 z-50 pt-4"
    >
      <div className="nav-frame mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#top" className="brand-mark" aria-label="DSDev">
          <img src={logoSrc} alt="DSDev" className="brand-logo" />
        </a>

        <div className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 md:flex">
          <a href="#problema" className="hover:text-white transition-colors">
            Problema
          </a>
          <a href="#metodo" className="hover:text-white transition-colors">
            Método
          </a>
          <a href="#investimento" className="hover:text-white transition-colors">
            Investimento
          </a>
        </div>

        <button
          type="button"
          onClick={() => onOpenBrief("Quero falar sobre meu projeto")}
          className="cta-chip"
        >
          Chama no WhatsApp
        </button>
      </div>
    </motion.nav>
  );
}

function Hero({ onOpenBrief }: { onOpenBrief: (context: string, description?: string) => void }) {
  return (
    <section id="top" className="hero-shell site-shell overflow-hidden pt-28 md:pt-34">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="mx-auto grid min-h-[94vh] max-w-6xl items-center gap-10 px-4 pb-28 pt-10 md:grid-cols-[1.08fr_0.92fr] md:px-6 md:pb-36">
        <div className="hero-copy-column">
          <div className="hero-logo-side">
            <div className="hero-logo-wrap hero-logo-wrap-floating">
              <img src={logoSrc} alt="DSDev" className="hero-logo" />
            </div>
          </div>
          <div className="eyebrow mb-5">
            <Rocket className="h-4 w-4" />
            Autoridade + conversão + resultados
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title max-w-4xl"
          >
            <span>QUER ISSO</span>
            <span>NO SEU</span>
            <span className="hero-title-accent">NEGÓCIO?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-copy mt-5 max-w-xl"
          >
            Eu crio o site + landing page que gera clientes todos os dias. Um sistema
            completo para transformar sua presença digital em resultado real.
          </motion.p>

          <div className="mt-7 grid gap-3 sm:max-w-[38rem]">
            {heroPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.16 + index * 0.08 }}
                className="hero-bullet"
              >
                <CheckCircle2 className="h-5 w-5 text-[#ffd34d]" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => onOpenBrief("Quero uma landing page para meu negócio")}
              className="primary-cta"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#problema" className="secondary-cta">
              Ver estrutura completa
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="hero-device"
        >
          <div className="device-screen">
            <div className="device-topline">
              <span>SUA MARCA</span>
              <span>INÍCIO</span>
              <span>SERVIÇOS</span>
              <span>DEPOIMENTOS</span>
              <span>CONTATO</span>
            </div>
            <div className="device-body">
              <div>
                <p className="device-kicker">SOLUÇÕES QUE GERAM RESULTADOS DE VERDADE</p>
                <h2>Foco em resultados, foco no crescimento do seu negócio.</h2>
                <p className="device-copy">
                  Estrutura, design, performance e comunicação montados para atrair e converter.
                </p>
                <div className="device-cta">QUERO RESULTADOS</div>
              </div>
              <div className="rocket-badge">
                <Zap className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="phone-card">
            <span className="phone-tag">SITE</span>
            <strong>Mais autoridade</strong>
            <strong>Mais clientes</strong>
            <strong>Mais vendas</strong>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function InstagramProblem() {
  return (
    <section id="problema" className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[0.95fr_1.05fr]">
        <div className="headline-box">
          <p className="section-kicker">O grande erro</p>
          <h2 className="ad-section-title">DEPENDER SÓ DE INSTAGRAM</h2>
          <p className="section-copy mt-3">
            Redes sociais são ótimas para atrair atenção, mas não são ideais para fechar vendas
            e estruturar um negócio sólido.
          </p>
          <div className="warning-box mt-6">
            <strong>Você está construindo um negócio em terreno alugado.</strong>
          </div>
        </div>

        <div className="panel-stack">
          {instagramProblems.map((item) => (
            <div key={item} className="problem-row">
              <Instagram className="h-5 w-5" />
              <span>{item}</span>
            </div>
          ))}
          <div className="problem-footer">
            A maioria das empresas comete o mesmo erro: depender 100% das redes sociais.
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySite() {
  return (
    <section className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Por que ter um site ou landing page</p>
          <h2 className="ad-section-title">MAIS CONTROLE, MAIS AUTORIDADE, MAIS CLIENTES</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {siteReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="reason-card"
              >
                <div className="reason-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{item.title}</h3>
                <p className="reason-sub">{item.subtitle}</p>
                <div className="reason-list">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="reason-list-row">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LandingMachine() {
  return (
    <section className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Landing page</p>
          <h2 className="ad-section-title">A MÁQUINA DE VENDAS</h2>
          <p className="section-copy mt-3">
            Se o site é a base, a landing page é o vendedor. Ela é criada com um único objetivo:
            fazer a pessoa comprar ou entrar em contato.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="compare-card compare-card-good">
            <div className="compare-head">
              <div className="compare-icon">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3>Dados reais de conversão</h3>
            </div>
            <div className="conversion-vs">
              <div className="vs-box">
                <span>Sites comuns</span>
                <strong>2,23%</strong>
                <small>média de conversão</small>
              </div>
              <div className="vs-center">VS</div>
              <div className="vs-box vs-box-highlight">
                <span>Landing pages</span>
                <strong>50%+</strong>
                <small>podem chegar a isso em campanhas bem feitas</small>
              </div>
            </div>
            <div className="conversion-claim">Ou seja: até 20x mais eficiência.</div>
          </div>

          <div className="feature-column">
            {landingReasons.map((item) => (
              <div key={item} className="mini-feature-card">
                <Target className="h-5 w-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Como site + landing page trabalham juntos</p>
          <h2 className="ad-section-title">A ESTRATÉGIA QUE GERA RESULTADOS REAIS</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {journeySteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="journey-card"
              >
                <div className="journey-step">{item.step}</div>
                <div className="reason-icon mt-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="conversion-bar mt-6">
          <strong>NÃO DEPENDA SÓ DE REDES SOCIAIS.</strong>
          <span>Tenha sua própria máquina de vendas.</span>
        </div>
      </div>
    </section>
  );
}

function PracticalDifference() {
  return (
    <section className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Diferença prática</p>
          <h2 className="ad-section-title">QUAL VENDE MAIS?</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="compare-card compare-card-bad">
            <div className="compare-head">
              <div className="compare-icon">
                <Instagram className="h-5 w-5" />
              </div>
              <h3>Negócio A: só Instagram</h3>
            </div>
            <div className="compare-list">
              {practicalDifference.a.map((item, index) => (
                <div key={item} className="compare-row">
                  <span className="compare-mark">{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="compare-note bad-note">Muita dependência, muita fuga, poucas vendas.</div>
          </div>

          <div className="compare-card compare-card-good">
            <div className="compare-head">
              <div className="compare-icon">
                <Link2 className="h-5 w-5" />
              </div>
              <h3>Negócio B: site + landing page</h3>
            </div>
            <div className="compare-list">
              {practicalDifference.b.map((item, index) => (
                <div key={item} className="compare-row">
                  <span className="compare-mark">{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="compare-note good-note">Fluxo profissional, confiança e conversão.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectBenefits() {
  return (
    <section className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Benefícios diretos</p>
          <h2 className="ad-section-title">NO SEU NEGÓCIO</h2>
        </div>

        <div className="grid gap-4">
          {directBenefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="benefit-row"
              >
                <div className="benefit-number">{item.n}</div>
                <div className="reason-icon !mb-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <TrendingUp className="benefit-trend h-8 w-8" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ onOpenBrief }: { onOpenBrief: (context: string, description?: string) => void }) {
  return (
    <section className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Como funciona na prática</p>
          <h2 className="ad-section-title">UM SISTEMA COMPLETO QUE GERA CLIENTES TODOS OS DIAS</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="process-row"
                >
                  <div className="process-step">{item.step}</div>
                  <div className="reason-icon !mb-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="results-panel">
            <div className="results-grid">
              <div className="result-chip">Profissionalismo que gera confiança</div>
              <div className="result-chip">Estratégia que converte</div>
              <div className="result-chip">Clientes chegando todos os dias</div>
              <div className="result-chip">Resultados previsíveis e escaláveis</div>
              <div className="result-chip">Crescimento contínuo para o negócio</div>
            </div>
            <button
              type="button"
              onClick={() => onOpenBrief("Quero montar esse sistema completo para gerar clientes")}
              className="primary-cta mt-6"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ onSelectPlan }: { onSelectPlan: (planName: string) => void }) {
  return (
    <section id="investimento" className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="headline-box mb-8">
          <p className="section-kicker">Valor (investimento)</p>
          <h2 className="ad-section-title">NÃO É CUSTO, É INVESTIMENTO</h2>
          <p className="section-copy mt-3">
            Hoje existem 3 níveis base. Os valores são a partir de e podem aumentar conforme páginas,
            integrações, automações e itens adicionais que o cliente incluir.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={plan.featured ? "price-card price-card-featured" : "price-card"}>
              <div className="price-head">
                <h3>{plan.name}</h3>
                <span className="price-from">A partir de</span>
                <strong>{plan.price}</strong>
              </div>
              <div className="price-list">
                {plan.points.map((point) => (
                  <div key={point} className="price-row">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => onSelectPlan(plan.name)} className="primary-cta mt-6 w-full justify-center">
                Quero esse
              </button>
            </article>
          ))}
        </div>

        <div className="grid gap-4 pt-6 md:grid-cols-[1fr_0.7fr]">
          <div className="investment-note">
            <BadgeDollarSign className="h-6 w-6" />
            <div>
              <strong>Um cliente pode pagar todo o seu site. E o resto vira lucro.</strong>
              <p>
                Valores referentes somente à criação e desenvolvimento. Hospedagem, domínio,
                ferramentas pagas e extras são consultados à parte.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectPlan("Quero entender qual plano é ideal")}
            className="primary-cta justify-center"
          >
            Quero meu orçamento
          </button>
        </div>
      </div>
    </section>
  );
}

function About({ onOpenBrief }: { onOpenBrief: (context: string, description?: string) => void }) {
  return (
    <section id="sobre" className="site-shell px-4 py-14 md:px-6 md:py-18">
      <div className="mx-auto max-w-4xl">
        <div className="about-panel p-6 md:p-8">
          <div>
            <div className="about-logo-wrap mb-5">
              <img src={logoSrc} alt="DSDev" className="about-logo" />
            </div>
            <p className="section-kicker">Sobre mim</p>
            <h2 className="ad-section-title mt-3">TRANSFORMAR PRESENÇA DIGITAL EM RESULTADO</h2>
            <p className="section-copy mt-4 max-w-2xl">
              Sou estudante de Análise e Desenvolvimento de Sistemas e crio sites, landing pages
              e estruturas digitais focadas em profissionalismo, clareza e conversão.
            </p>
          </div>

          <div className="quote-box mt-7">
            <Quote className="h-5 w-5" />
            <p>
              Menos dependência de redes sociais. Mais controle. Mais resultados. Seu negócio merece
              mais que um perfil: merece um sistema que vende.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => onOpenBrief("Quero conversar sobre um site ou landing page")}
              className="primary-cta"
            >
              <MessageCircle className="h-4 w-4" />
              Chama no WhatsApp
            </button>

            <a
              href="https://www.instagram.com/denis_dsdev?igsh=b2h1N3J0NG1wbHQz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanBriefModal({
  selectedPlan,
  formData,
  onClose,
  onChange,
  onSubmit,
}: {
  selectedPlan: string | null;
  formData: BriefFormData;
  onClose: () => void;
  onChange: (field: keyof BriefFormData, value: string) => void;
  onSubmit: () => void;
}) {
  if (!selectedPlan) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="brief-title">
      <div className="modal-card">
        <div className="modal-head">
          <div>
            <p className="section-kicker">Solicitação</p>
            <h2 id="brief-title" className="modal-title">
              {selectedPlan}
            </h2>
            <p className="modal-copy">
              Preencha o formulário. Logo entraremos em contato direto no seu WhatsApp.
            </p>
          </div>
          <button type="button" onClick={onClose} className="modal-close" aria-label="Fechar formulário">
            ×
          </button>
        </div>

        <div className="form-grid">
          <label className="form-field">
            <span>Nome</span>
            <input value={formData.nome} onChange={(e) => onChange("nome", e.target.value)} required />
          </label>

          <label className="form-field">
            <span>Nome da empresa</span>
            <input value={formData.empresa} onChange={(e) => onChange("empresa", e.target.value)} required />
          </label>

          <label className="form-field form-field-full">
            <span>Endereço</span>
            <input value={formData.endereco} onChange={(e) => onChange("endereco", e.target.value)} required />
          </label>

          <label className="form-field">
            <span>Telefone</span>
            <input value={formData.telefone} onChange={(e) => onChange("telefone", e.target.value)} required />
          </label>

          <label className="form-field">
            <span>WhatsApp</span>
            <input value={formData.whatsapp} onChange={(e) => onChange("whatsapp", e.target.value)} required />
          </label>

          <label className="form-field form-field-full">
            <span>Descreva aqui o seu projeto</span>
            <textarea
              rows={5}
              value={formData.descricao}
              onChange={(e) => onChange("descricao", e.target.value)}
              required
            />
          </label>
        </div>

        <div className="modal-actions">
          <button type="button" onClick={onClose} className="secondary-cta">
            Cancelar
          </button>
          <button type="button" onClick={onSubmit} className="primary-cta">
            Enviar solicitação
          </button>
        </div>
      </div>
    </div>
  );
}

function ExitOfferModal({
  isOpen,
  secondsLeft,
  onAccept,
  onDismiss,
}: {
  isOpen: boolean;
  secondsLeft: number;
  onAccept: () => void;
  onDismiss: () => void;
}) {
  if (!isOpen) return null;

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  const expired = secondsLeft <= 0;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="exit-offer-title">
      <div className="exit-offer-card">
        <button type="button" onClick={onDismiss} className="modal-close exit-offer-close" aria-label="Fechar oferta">
          ×
        </button>

        <p className="section-kicker">Antes de sair</p>
        <h2 id="exit-offer-title" className="exit-offer-title">
          LANDING PAGE DE <span>R$ 599,00</span> POR <strong>R$ 459,99</strong>
        </h2>
        <p className="exit-offer-copy">
          Oferta promocional para garantir sua landing page de entrada com foco em conversão.
          Valor válido somente para criação e desenvolvimento.
        </p>

        <div className="exit-offer-timer">
          <span>Oferta expira em</span>
          <strong>
            {minutes}:{seconds}
          </strong>
        </div>

        <div className="exit-offer-actions">
          <button type="button" onClick={onDismiss} className="secondary-cta">
            Sair mesmo assim
          </button>
          <button type="button" onClick={onAccept} className="primary-cta" disabled={expired}>
            Aproveitar oferta
          </button>
        </div>

        {expired ? <p className="exit-offer-expired">Essa condição promocional expirou.</p> : null}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-shell px-4 pb-10 pt-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#325688] pt-6 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-white/42 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Denis Sacramento</span>
        <span>DSDev • sites, landing pages e sistemas web</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [briefForm, setBriefForm] = useState<BriefFormData>(emptyBriefForm);
  const [showExitOffer, setShowExitOffer] = useState(false);
  const [exitOfferSeconds, setExitOfferSeconds] = useState(120);
  const [exitOfferSeen, setExitOfferSeen] = useState(false);
  const [exitOfferSource, setExitOfferSource] = useState<"desktop" | "mobile" | null>(null);
  const skipNextBackPopupRef = useRef(false);

  const triggerExitOffer = (source: "desktop" | "mobile", markSeen = true) => {
    setShowExitOffer(true);
    setExitOfferSeconds(120);
    setExitOfferSource(source);
    if (markSeen) {
      setExitOfferSeen(true);
    }
  };

  const openBrief = (context: string, description?: string) => {
    setSelectedPlan(context);
    if (description) {
      setBriefForm((current) => ({ ...current, descricao: description }));
    }
  };

  const handleFormChange = (field: keyof BriefFormData, value: string) => {
    setBriefForm((current) => ({ ...current, [field]: value }));
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setBriefForm(emptyBriefForm);
  };

  const dismissExitOffer = () => {
    setShowExitOffer(false);
    if (exitOfferSource === "mobile") {
      skipNextBackPopupRef.current = true;
      window.history.go(-2);
    }
  };

  const acceptExitOffer = () => {
    setShowExitOffer(false);
    setExitOfferSource(null);
    openBrief(
      "Oferta especial: Landing page de R$ 599,00 por R$ 459,99",
      "Quero aproveitar a oferta promocional da landing page de R$ 599,00 por R$ 459,99.",
    );
  };

  const handleSubmitBrief = () => {
    const requiredValues = Object.values(briefForm).map((value) => value.trim());
    if (requiredValues.some((value) => !value) || !selectedPlan) return;

    const message = [
      "Olá, quero solicitar um projeto.",
      "",
      `Plano de interesse: ${selectedPlan}`,
      `Nome: ${briefForm.nome}`,
      `Empresa: ${briefForm.empresa}`,
      `Endereço: ${briefForm.endereco}`,
      `Telefone: ${briefForm.telefone}`,
      `WhatsApp: ${briefForm.whatsapp}`,
      `Descrição: ${briefForm.descricao}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    closeModal();
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isMobile) return;
    if (selectedPlan || showExitOffer || exitOfferSeen) return;

    const handleMouseOut = (event: MouseEvent) => {
      const relatedTarget = event.relatedTarget as Node | null;
      if (relatedTarget) return;
      if (event.clientY > 24) return;
      triggerExitOffer("desktop", true);
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [selectedPlan, showExitOffer, exitOfferSeen]);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (!isMobile) return;

    const hashMarker = "#dsdev-exit-offer";

    if (window.location.hash !== hashMarker) {
      window.history.pushState({ dsdevExitOffer: true }, "", `${window.location.pathname}${window.location.search}${hashMarker}`);
    }

    const handleBackIntent = () => {
      if (skipNextBackPopupRef.current) {
        skipNextBackPopupRef.current = false;
        return;
      }

      if (selectedPlan || showExitOffer) {
        return;
      }

      triggerExitOffer("mobile", false);
      window.history.pushState(
        { dsdevExitOffer: true },
        "",
        `${window.location.pathname}${window.location.search}${hashMarker}`,
      );
    };

    window.addEventListener("popstate", handleBackIntent);
    window.addEventListener("hashchange", handleBackIntent);
    return () => {
      window.removeEventListener("popstate", handleBackIntent);
      window.removeEventListener("hashchange", handleBackIntent);
    };
  }, [selectedPlan, showExitOffer, exitOfferSeen]);

  useEffect(() => {
    if (!showExitOffer) return;

    const intervalId = window.setInterval(() => {
      setExitOfferSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(intervalId);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [showExitOffer]);

  return (
    <div className="page-bg min-h-screen text-white">
      <Navbar onOpenBrief={openBrief} />
      <main>
        <Hero onOpenBrief={openBrief} />
        <InstagramProblem />
        <WhySite />
        <LandingMachine />
        <Method />
        <PracticalDifference />
        <DirectBenefits />
        <HowItWorks onOpenBrief={openBrief} />
        <Pricing onSelectPlan={setSelectedPlan} />
        <About onOpenBrief={openBrief} />
      </main>
      <Footer />
      <PlanBriefModal
        selectedPlan={selectedPlan}
        formData={briefForm}
        onClose={closeModal}
        onChange={handleFormChange}
        onSubmit={handleSubmitBrief}
      />
      <ExitOfferModal
        isOpen={showExitOffer}
        secondsLeft={exitOfferSeconds}
        onAccept={acceptExitOffer}
        onDismiss={dismissExitOffer}
      />
    </div>
  );
}
