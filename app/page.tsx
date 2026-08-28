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

const pillClass =
  'inline-block rounded-pill bg-iris px-[22px] py-[12px] text-caption text-bone shadow-inset-ring'

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
    special: false,
  },
  {
    title: 'Clareamento',
    description: 'Clareamento dental profissional com resultados visíveis e seguros.',
    special: false,
  },
  {
    title: 'Restaurações',
    description: 'Restaurações estéticas e funcionais com materiais de alta qualidade.',
    special: false,
  },
  {
    title: 'Harmonização',
    description: 'Harmonização orofacial para equilíbrio, simetria e naturalidade.',
    special: false,
  },
  {
    title: 'Invisalign TOP DOCTOR',
    description: 'Alinhadores invisíveis para corrigir o sorriso sem aparelho fixo.',
    special: true,
  },
  {
    title: 'Limpeza',
    description: 'Profilaxia e limpeza profunda para manter a saúde bucal em dia.',
    special: false,
  },
  {
    title: 'Laserterapia',
    description: 'Tratamentos a laser de alta precisão, com mínima invasão e desconforto.',
    special: false,
  },
  {
    title: 'Tratamento Ronco/Apneia',
    description: 'Aparelhos intraorais para tratar ronco e apneia obstrutiva do sono.',
    special: false,
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-obsidian">
        {/* HERO */}
        <section id="home" className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src="/images/dra-rafaella-hero.jpg"
            alt="Dra. Rafaella Gomes segurando um alinhador Invisalign, com o consultório ao fundo"
            className="block h-screen w-screen rounded-none object-cover object-center"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="absolute bottom-20 left-8 z-20"
          >
            <motion.h1
              variants={fadeSlideUp}
              className="text-heading font-medium tracking-[3px] text-bone"
            >
              Dra. Rafaella Gomes
            </motion.h1>
            <motion.p
              variants={fadeSlideUp}
              className="mt-3 text-[17px] font-medium tracking-[0.75px] text-iris"
            >
              Invisalign TOP DOCTOR
            </motion.p>
            <motion.p variants={fadeSlideUp} className="mt-3 text-body-lg text-bone">
              Invisalign especialista
            </motion.p>
            <motion.div variants={fadeSlideUp} className="mt-3 h-px w-[80px] bg-bone" />
            <motion.a
              variants={fadeSlideUp}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pillClass} mt-8`}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        </section>

        {/* INVISALIGN 3D */}
        <section id="invisalign-3d" className="bg-obsidian px-6 py-40 sm:px-20">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <InvisalignViewer />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h2
                variants={fadeSlideUp}
                className="text-heading font-medium tracking-[0.05em] text-bone"
              >
                Invisalign 3D
              </motion.h2>
              <motion.p variants={fadeSlideUp} className="mt-8 text-body-lg text-bone">
                Veja o alinhador em ação — tecnologia de vidro cristal, direto no seu navegador.
              </motion.p>
              <motion.a
                variants={fadeSlideUp}
                href={INVISALIGN_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillClass} mt-8`}
              >
                Solicitar Visualização 3D
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-obsidian px-6 py-40 sm:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-medium tracking-[0.05em] text-bone"
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
                <motion.div key={step.number} variants={fadeSlideUp} className="border-t border-fog/30 pt-6">
                  <span className="text-[17px] font-medium tracking-[0.05em] text-iris">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-[17px] font-medium tracking-[0.05em] text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] tracking-[0.05em] text-fog">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TRATAMENTOS */}
        <section id="tratamentos" className="bg-obsidian px-6 py-40 sm:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-medium tracking-[0.05em] text-bone"
            >
              Tratamentos
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              {TREATMENTS.map((treatment) => (
                <motion.div
                  key={treatment.title}
                  variants={fadeSlideUp}
                  whileHover={{ backgroundColor: '#ffffff' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`group rounded-card p-8 ${treatment.special ? 'bg-iris' : 'bg-graphite'}`}
                >
                  <h3 className="text-[17px] font-medium tracking-[0.05em] text-bone transition-colors duration-300 group-hover:text-black">
                    {treatment.title}
                  </h3>
                  <p
                    className={`mt-3 text-[14px] tracking-[0.05em] transition-colors duration-300 group-hover:text-black ${
                      treatment.special ? 'text-bone' : 'text-fog'
                    }`}
                  >
                    {treatment.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-obsidian px-6 py-40 sm:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-heading font-medium tracking-[0.05em] text-bone"
            >
              Fale Conosco
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-3"
            >
              <motion.div variants={fadeSlideUp} className="rounded-card bg-graphite p-8">
                <p className="text-caption uppercase text-fog">Telefone</p>
                <a
                  href="tel:+5521990472849"
                  className="mt-3 inline-block text-[17px] tracking-[0.05em] text-bone underline decoration-fog underline-offset-4 transition-colors hover:text-fog"
                >
                  +55 (21) 99047-2849
                </a>
              </motion.div>

              <motion.div variants={fadeSlideUp} className="rounded-card bg-graphite p-8">
                <p className="text-caption uppercase text-fog">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pillClass} mt-3`}
                >
                  WhatsApp
                </a>
              </motion.div>

              <motion.div variants={fadeSlideUp} className="rounded-card bg-graphite p-8">
                <p className="text-caption uppercase text-fog">Endereço</p>
                <p className="mt-3 text-[17px] tracking-[0.05em] text-bone">
                  Av. Embaixador Abelardo Bueno, 3500, Barra da Tijuca
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-fog/40 bg-graphite px-6 py-10 sm:px-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-caption text-bone">
              © {new Date().getFullYear()} Clínica Dra. Rafaella Gomes — CRO-RJ 22601
            </p>
            <div className="flex items-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-bone transition-colors hover:text-fog"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/dentistatop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-bone transition-colors hover:text-fog"
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
