'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import InvisalignViewer from './components/InvisalignViewer'
import Footer from './components/Footer'

const WHATSAPP_NUMBER = '5521990472849'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de agendar uma consulta na Clínica Dra. Rafaella.'
)}`

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const aboutFadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const passthrough = {
  hidden: {},
  visible: {},
}

const fadeSlideUpSmall = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const darkButtonClass =
  'inline-block rounded-btn border border-graphite bg-graphite px-[22px] py-[14px] text-body-sm font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite'

const STEPS = [
  {
    number: '01',
    title: 'Avaliação',
    description:
      'Consulta clínica investigativa para entender seu sorriso e identificar exatamente o que precisa de atenção.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Mapeamento digital do sorriso e definição do plano de tratamento, etapa por etapa, já na primeira consulta.',
  },
  {
    number: '03',
    title: 'Alinhadores',
    description:
      'Seus alinhadores Invisalign são produzidos sob medida para mover os dentes de forma gradual e confortável.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description:
      'Consultas periódicas para acompanhar a evolução do tratamento até o resultado final.',
  },
]

const ITERO_BENEFITS = [
  'Precisão em 3D',
  'Visualização do Resultado',
  'Conforto Total',
]

const ABOUT_CREDENTIALS = [
  { value: '28', label: 'Anos de Experiência', valueClass: 'text-[32px]' },
  { value: '⭐ Invisalign', label: 'Top Doctor 2025 e 2026', valueClass: 'text-[24px]' },
  { value: 'Milhares', label: 'Sorrisos Transformados', valueClass: 'text-[32px]' },
]

const TREATMENTS = [
  {
    title: 'Lentes de Contato Dental',
    description: 'Lentes de contato dental para um sorriso natural, alinhado e duradouro.',
    image: '/images/tratamentos/lentes-contato.jpg',
  },
  {
    title: 'Clareamento Dental',
    description: 'Clareamento dental profissional com resultados visíveis e seguros.',
    image: '/images/tratamentos/clareamento.jpg',
  },
  {
    title: 'Restaurações/Obturações',
    description: 'Restaurações estéticas e funcionais com materiais de alta qualidade.',
    image: '/images/tratamentos/restauracoes.jpg',
  },
  {
    title: 'Harmonização Orofacial',
    description: 'Harmonização orofacial para equilíbrio, simetria e naturalidade.',
    image: '/images/tratamentos/harmonizacao.jpg',
  },
  {
    title: 'Invisalign',
    description: 'Alinhadores invisíveis para corrigir o sorriso sem aparelho fixo.',
    image: '/images/tratamentos/invisalign.jpg',
  },
  {
    title: 'Limpeza Profissional',
    description: 'Profilaxia e limpeza profunda para manter a saúde bucal em dia.',
    image: '/images/tratamentos/limpeza.jpg',
  },
  {
    title: 'Implante e Prótese',
    description:
      'Reabilitação completa com implantes dentários e próteses de alta qualidade para restaurar sua mastigação e estética.',
    image: '/images/tratamentos/implante-protese.jpg',
  },
  {
    title: 'Ortodontia Infantil',
    description:
      'Tratamento ortodôntico especializado para crianças, guiando o desenvolvimento correto dos dentes e maxilares.',
    image: '/images/tratamentos/ortodontia-infantil.jpg',
  },
  {
    title: 'Apnéia do Sono',
    description:
      'Aparelhos intraorais para tratar apnéia obstrutiva do sono com conforto e eficácia.',
    image: '/images/tratamentos/apneia-sono.jpg',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-canvas">
        {/* HERO */}
        <section id="home" className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src="/images/dra-rafaella-hero.jpg"
            alt="Dra. Rafaella Gomes segurando um alinhador Invisalign, com o consultório ao fundo"
            className="block h-screen w-screen object-cover object-[center_30%]"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-20 left-8 z-20 px-8 sm:px-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-[40px] font-normal leading-none tracking-[-0.025em] text-white sm:text-[48px]"
            >
              O sorriso dos seus sonhos agora é real
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-2 font-serif text-[48px] font-normal leading-[1.05] tracking-[-0.025em] text-white sm:text-[96px]"
            >
              Dra. Rafaella Gomes
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 flex items-center gap-2 text-body-sm font-semibold uppercase tracking-[0.05em] text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
              <span>INVISALIGN TOP DOCTOR</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 text-body text-white"
            >
              Invisalign especialista
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-6 h-px w-[80px] bg-white"
            />
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkButtonClass} mt-8`}
            >
              Agendar Consulta
            </motion.a>
          </div>
        </section>

        {/* INVISALIGN 3D */}
        <InvisalignViewer />

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-white px-4 py-[120px]">
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
                {STEPS.map((step) => (
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

        {/* TRATAMENTOS */}
        <section id="tratamentos" className="bg-canvas px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-bold text-ink"
            >
              Tratamentos
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {TREATMENTS.map((treatment) => (
                <motion.div
                  key={treatment.title}
                  variants={fadeScale}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex flex-col"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="aspect-[16/9] h-[150px] w-full rounded-t-card object-cover sm:h-[180px]"
                  />
                  <div className="rounded-b-card border border-hairline bg-card p-5">
                    <h3 className="mb-3 text-[24px] font-bold leading-tight text-ink">
                      {treatment.title}
                    </h3>
                    <p className="mb-4 text-[14px] font-medium leading-[1.66] text-pencil">
                      {treatment.description}
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Olá! Gostaria de saber mais sobre o tratamento de ${treatment.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[14px] font-medium text-graphite transition-colors hover:text-ink"
                    >
                      Saiba Mais →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-white px-4 py-[120px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/images/dra-rafaella-about.jpg"
              alt="Dra. Rafaella Gomes"
              className="h-auto w-full max-w-[500px] rounded-[28px] object-cover shadow-lg"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h2
                variants={aboutFadeSlideUp}
                className="mb-8 font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.025em] text-ink md:text-[48px]"
              >
                Sobre a Dra. Rafaella Gomes
              </motion.h2>
              <motion.div
                variants={aboutFadeSlideUp}
                className="mb-12 space-y-5 text-[14px] font-normal leading-[1.7] text-pencil md:text-[16px]"
              >
                <p>
                  Formada há 28 anos com Mestrado e Especialidades em diversas áreas da
                  odontologia, a Dra. Rafaella Gomes tem o propósito de preservar a saúde, o
                  sorriso e a qualidade de vida de seus pacientes, a partir de um atendimento
                  personalizado, humanizado, ético e profissional.
                </p>
                <p>
                  Premiada Invisalign Top Doctor 2025 e 2026, é uma profissional que transformou
                  muitos sorrisos com qualidade.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ABOUT_CREDENTIALS.map((credential) => (
                  <motion.div
                    key={credential.label}
                    variants={aboutFadeSlideUp}
                    className="rounded-[20px] border border-hairline bg-card p-5"
                  >
                    <p
                      className={`font-bold leading-tight text-ink ${credential.valueClass}`}
                    >
                      {credential.value}
                    </p>
                    <p className="mt-1 text-[12px] font-medium uppercase text-faint">
                      {credential.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ITERO */}
        <section id="itero" className="bg-white px-4 py-[120px]">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src="/images/itero.jpg"
              alt="Scanner iTero para planejamento digital do sorriso"
              className="h-auto w-full max-w-[600px] rounded-3xl object-cover shadow-sm"
            />

            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="mb-4 font-serif text-heading text-ink"
              >
                Tecnologia iTero
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="mb-6 text-[20px] font-medium text-faint"
              >
                Planejamento Digital do Sorriso
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="mb-6 text-[16px] font-medium leading-[1.66] text-pencil"
              >
                <p className="mb-4">
                  Com o scanner iTero, sua boca é digitalizada em poucos minutos, sem
                  moldes e materiais desconfortáveis. A tecnologia captura cada detalhe
                  do seu sorriso em 3D, permitindo um diagnóstico mais preciso e um
                  planejamento de tratamento pensado especialmente para você.
                </p>
                <p>
                  Com esse exame, você vai conhecer seu sorriso de uma maneira
                  totalmente diferente, ver se tem cárie entre os dentes, conhecer o
                  mapa da sua mordida (se está mordendo corretamente) e ter a
                  oportunidade de ver seu sorriso antes e depois de um tratamento com
                  Invisalign.
                </p>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
                href="/itero"
                className={`${darkButtonClass} mt-4 mb-8`}
              >
                Saiba Mais
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                className="flex flex-col gap-3"
              >
                {ITERO_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-graphite">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 6.5L4.75 8.75L9.5 3.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-[16px] font-semibold text-ink">{benefit}</p>
                  </div>
                ))}
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Olá! Gostaria de agendar uma avaliação com o scanner iTero.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkButtonClass} mt-8`}
              >
                Agendar Avaliação iTero
              </motion.a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
