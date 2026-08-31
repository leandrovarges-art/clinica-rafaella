'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import InvisalignViewer from './components/InvisalignViewer'

const WHATSAPP_NUMBER = '5521990472849'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de agendar uma consulta na Clínica Dra. Rafaella.'
)}`
const INVISALIGN_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar uma visualização 3D do Invisalign.'
)}`

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

const TREATMENTS = [
  {
    title: 'Lentes de Contato',
    description: 'Lentes de contato dental para um sorriso natural, alinhado e duradouro.',
    image: '/images/tratamentos/lentes-de-contato.jpg',
  },
  {
    title: 'Clareamento',
    description: 'Clareamento dental profissional com resultados visíveis e seguros.',
    image: '/images/tratamentos/clareamento.jpg',
  },
  {
    title: 'Restaurações',
    description: 'Restaurações estéticas e funcionais com materiais de alta qualidade.',
    image: '/images/tratamentos/restauracoes.jpg',
  },
  {
    title: 'Harmonização',
    description: 'Harmonização orofacial para equilíbrio, simetria e naturalidade.',
    image: '/images/tratamentos/harmonizacao.jpg',
  },
  {
    title: 'Invisalign TOP DOCTOR',
    description: 'Alinhadores invisíveis para corrigir o sorriso sem aparelho fixo.',
    image: '/images/tratamentos/invisalign.jpg',
  },
  {
    title: 'Limpeza',
    description: 'Profilaxia e limpeza profunda para manter a saúde bucal em dia.',
    image: '/images/tratamentos/limpeza.jpg',
  },
  {
    title: 'Laserterapia',
    description: 'Tratamentos a laser de alta precisão, com mínima invasão e desconforto.',
    image: '/images/tratamentos/laserterapia.jpg',
  },
  {
    title: 'Tratamento Ronco/Apneia',
    description: 'Aparelhos intraorais para tratar ronco e apneia obstrutiva do sono.',
    image: '/images/tratamentos/ronco-apneia.jpg',
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
            className="block h-screen w-screen object-cover object-center"
          />

          <div className="bg-canvas px-6 py-16 sm:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-[1200px]"
            >
              <motion.p
                variants={fadeSlideUp}
                className="text-body-sm font-semibold uppercase tracking-[0.05em] text-graphite"
              >
                Invisalign TOP DOCTOR
              </motion.p>
              <motion.h1
                variants={fadeSlideUp}
                className="mt-2 font-serif text-[80px] font-normal leading-[1.05] tracking-[-0.025em] text-ink sm:text-display"
              >
                Dra. Rafaella Gomes
              </motion.h1>
              <motion.p variants={fadeSlideUp} className="mt-4 text-body text-pencil">
                Invisalign especialista
              </motion.p>
              <motion.a
                variants={fadeSlideUp}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkButtonClass} mt-8`}
              >
                Agendar Consulta
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* INVISALIGN 3D */}
        <section id="invisalign-3d" className="bg-canvas px-6 py-16 sm:px-10">
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
            <InvisalignViewer />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h2 variants={fadeSlideUp} className="text-heading font-bold text-ink">
                Invisalign 3D
              </motion.h2>
              <motion.p variants={fadeSlideUp} className="mt-6 text-body text-pencil">
                Veja o alinhador em ação — tecnologia de vidro cristal, direto no seu navegador.
              </motion.p>
              <motion.a
                variants={fadeSlideUp}
                href={INVISALIGN_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkButtonClass} mt-8`}
              >
                Solicitar Visualização 3D
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-canvas px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-bold text-ink"
            >
              Como Funciona
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {STEPS.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeSlideUp}
                  className="border-t border-hairline pt-6 text-center"
                >
                  <span className="text-body-sm font-semibold text-graphite">{step.number}</span>
                  <h3 className="mt-2 text-subheading font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-body-sm text-pencil">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
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
                  variants={fadeSlideUp}
                  whileHover={{ scale: 1.02, backgroundColor: '#f5f5f5' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden rounded-card border border-hairline bg-card"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-[250px] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-subheading font-semibold text-ink">{treatment.title}</h3>
                    <p className="mt-2 text-body-sm text-pencil">{treatment.description}</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Olá! Gostaria de saber mais sobre o tratamento de ${treatment.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-graphite transition-colors hover:text-ink"
                    >
                      Saiba Mais →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-canvas px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-bold text-ink"
            >
              Fale Conosco
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              <motion.div
                variants={fadeSlideUp}
                whileHover={{ scale: 1.02, backgroundColor: '#f5f5f5' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-card border border-hairline bg-card p-6"
              >
                <p className="text-body-sm font-semibold uppercase tracking-[0.05em] text-faint">
                  Telefone
                </p>
                <a
                  href="tel:+5521990472849"
                  className="mt-2 inline-block text-subheading font-semibold text-ink transition-colors hover:text-pencil"
                >
                  +55 (21) 99047-2849
                </a>
              </motion.div>

              <motion.div
                variants={fadeSlideUp}
                whileHover={{ scale: 1.02, backgroundColor: '#f5f5f5' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-card border border-hairline bg-card p-6"
              >
                <p className="text-body-sm font-semibold uppercase tracking-[0.05em] text-faint">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkButtonClass} mt-3`}
                >
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                variants={fadeSlideUp}
                whileHover={{ scale: 1.02, backgroundColor: '#f5f5f5' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-card border border-hairline bg-card p-6"
              >
                <p className="text-body-sm font-semibold uppercase tracking-[0.05em] text-faint">
                  Endereço
                </p>
                <p className="mt-2 text-subheading font-semibold text-ink">
                  Av. Embaixador Abelardo Bueno, 3500, Barra da Tijuca
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-hairline bg-card px-6 py-10 sm:px-10">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-body-sm text-ink">
              © {new Date().getFullYear()} Clínica Dra. Rafaella Gomes — CRO-RJ 22601
            </p>
            <div className="flex items-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-ink transition-colors hover:text-pencil"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/dentistatop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-ink transition-colors hover:text-pencil"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
