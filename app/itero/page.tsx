'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WHATSAPP_NUMBER = '5521990472849'

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeSlideUpSmall = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const passthrough = {
  hidden: {},
  visible: {},
}

const darkButtonClass =
  'inline-block rounded-btn border border-graphite bg-graphite px-[22px] py-[14px] text-body-sm font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite'

const bigDarkButtonClass =
  'inline-block rounded-btn border border-graphite bg-graphite px-[32px] py-[18px] text-[18px] font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite'

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const WHAT_IS_ITERO_CARDS = [
  {
    title: 'Diagnóstico Preciso',
    description:
      'Cada detalhe do seu sorriso é mapeado em 3D com altíssima precisão, sem margem para erros de molde.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </>
    ),
  },
  {
    title: 'Sem Desconforto',
    description:
      'Substitui os moldes tradicionais por um scanner rápido, sem gosto ruim e sem sensação de sufocamento.',
    icon: (
      <path
        d="M12 21s-7-4.35-9.5-8.5C.5 8 2 4 6 4c2 0 3.5 1.5 4 3 .5-1.5 2-3 4-3 4 0 5.5 4 3.5 8.5C19 16.65 12 21 12 21z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Visualização Imediata',
    description:
      'Veja simulações do resultado do seu tratamento antes mesmo de começar, com total transparência.',
    icon: (
      <>
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
      </>
    ),
  },
]

const ITERO_STEPS = [
  {
    number: '01',
    title: 'Escaneamento',
    description: 'O scanner iTero passa pela sua boca e captura tudo em poucos minutos, sem moldes.',
  },
  {
    number: '02',
    title: 'Modelagem 3D',
    description: 'As imagens capturadas viram um modelo digital detalhado do seu sorriso.',
  },
  {
    number: '03',
    title: 'Diagnóstico',
    description: 'A Dra. Rafaella analisa o mapa da sua mordida e identifica pontos de atenção.',
  },
  {
    number: '04',
    title: 'Planejamento',
    description: 'Com o modelo em mãos, o tratamento é planejado sob medida para o seu caso.',
  },
]

const ADVANTAGES = [
  {
    title: 'Precisão',
    description: 'Captura milimétrica de cada dente e da sua mordida, para um diagnóstico confiável.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="white" />
      </>
    ),
  },
  {
    title: 'Conforto',
    description: 'Nada de moldes desconfortáveis: é só o scanner passando suavemente pela sua boca.',
    icon: (
      <path
        d="M12 21s-7-4.35-9.5-8.5C.5 8 2 4 6 4c2 0 3.5 1.5 4 3 .5-1.5 2-3 4-3 4 0 5.5 4 3.5 8.5C19 16.65 12 21 12 21z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Visualização',
    description: 'Veja seu sorriso antes e depois do tratamento, ainda na fase de planejamento.',
    icon: (
      <>
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: 'Velocidade',
    description: 'O escaneamento completo leva poucos minutos e o resultado já sai digital.',
    icon: (
      <path
        d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function IteroPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-canvas">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#fafafa] to-white px-4 pb-[120px] pt-[160px]">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-serif text-[48px] font-normal leading-[1.05] tracking-[-0.025em] text-ink sm:text-[80px]"
              >
                Tecnologia iTero — Diagnóstico Digital do Sorriso
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="mt-6 text-[20px] font-medium text-faint"
              >
                Veja seu sorriso em 3D antes de começar o tratamento
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                href={whatsappUrl('Olá! Gostaria de agendar uma avaliação com o scanner iTero.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkButtonClass} mt-8`}
              >
                Agendar Avaliação
              </motion.a>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              src="/images/itero.jpg"
              alt="Scanner iTero para planejamento digital do sorriso"
              className="h-auto w-full max-w-[600px] rounded-3xl object-cover shadow-sm"
            />
          </div>
        </section>

        {/* O QUE É ITERO */}
        <section className="bg-white px-4 py-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-bold text-ink"
            >
              O que é o iTero?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="mt-4 max-w-2xl text-body text-pencil"
            >
              O iTero é um scanner intraoral que digitaliza sua boca em minutos, sem moldes
              desconfortáveis, gerando um modelo 3D preciso do seu sorriso para diagnóstico e
              planejamento de tratamento.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {WHAT_IS_ITERO_CARDS.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeIn}
                  className="rounded-card border border-hairline bg-card p-8"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-graphite">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      {card.icon}
                    </svg>
                  </span>
                  <h3 className="mb-2 text-[20px] font-bold text-ink">{card.title}</h3>
                  <p className="text-[14px] font-medium leading-[1.66] text-pencil">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-canvas px-4 py-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-bold text-ink"
            >
              Como Funciona
            </motion.h2>

            <div className="relative mt-16">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 hidden h-[2px] bg-hairline lg:block"
              />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="grid grid-cols-1 gap-y-10 gap-x-0 md:grid-cols-2 lg:grid-cols-4 lg:pt-4"
              >
                {ITERO_STEPS.map((step) => (
                  <motion.div key={step.number} variants={passthrough} className="px-6 lg:px-4">
                    <motion.p
                      variants={fadeSlideUpSmall}
                      className="mb-2 text-[32px] font-bold text-faint"
                    >
                      {step.number}
                    </motion.p>
                    <motion.h3
                      variants={fadeSlideUpSmall}
                      className="mb-2 text-[20px] font-bold text-ink"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      variants={fadeIn}
                      className="min-h-[60px] text-[14px] font-medium leading-[1.66] text-pencil"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* VANTAGENS */}
        <section className="bg-white px-4 py-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-bold text-ink"
            >
              Vantagens
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {ADVANTAGES.map((advantage) => (
                <motion.div
                  key={advantage.title}
                  variants={fadeSlideUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex items-start gap-5 rounded-card border border-hairline bg-card p-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-graphite">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {advantage.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="mb-2 text-[24px] font-bold text-ink">{advantage.title}</h3>
                    <p className="text-[14px] font-medium leading-[1.66] text-pencil">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 py-10 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-6xl rounded-card bg-card px-8 py-16 text-center sm:px-16"
          >
            <h2 className="text-heading font-bold text-ink">Pronto para conhecer seu sorriso?</h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-pencil">
              Agende sua avaliação com o scanner iTero e veja seu sorriso em 3D antes de começar o
              tratamento.
            </p>
            <a
              href={whatsappUrl('Olá! Gostaria de agendar uma avaliação com o scanner iTero.')}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bigDarkButtonClass} mt-8`}
            >
              Agendar Agora
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
