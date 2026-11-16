'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const aboutFadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const inlineLinkClass =
  'font-semibold text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-ink'

export default function ClinicaPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-canvas">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#fafafa] to-white px-4 pb-16 pt-[160px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-[720px]"
          >
            <motion.h1
              variants={aboutFadeSlideUp}
              className="font-serif text-[48px] font-normal leading-[1.05] tracking-[-0.025em] text-ink sm:text-[80px]"
            >
              Bem-vindo à Dra. Rafaella Gomes
            </motion.h1>
            <motion.p
              variants={aboutFadeSlideUp}
              className="mt-6 text-[20px] font-medium leading-[1.5] text-faint"
            >
              Onde a tecnologia encontra o cuidado humano que você merece.
            </motion.p>
          </motion.div>
        </section>

        {/* TEXTO */}
        <section className="bg-white px-4 py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mx-auto max-w-[720px] space-y-6 text-[16px] font-normal leading-[1.8] text-pencil sm:text-[18px]"
          >
            <motion.p variants={aboutFadeSlideUp}>
              Ir ao dentista não precisa ser um momento de ansiedade. Na Dra. Rafaella Gomes,
              conhecida como Dentista Top, transformamos a odontologia em uma experiência única de
              acolhimento, conforto e precisão.
            </motion.p>
            <motion.p variants={aboutFadeSlideUp}>
              Liderada pela Dra. Rafaella Gomes, profissional com vasta experiência e referência na
              área, nossa clínica foi planejada em cada detalhe para que você se sinta em casa do
              primeiro ao último minuto.
            </motion.p>
            <motion.p variants={aboutFadeSlideUp}>
              Aqui, você não é apenas mais um prontuário, entendemos seus desejos e tiramos todas as
              suas dúvidas com calma. Antes de cuidar do seu sorriso, cuidamos de você. E desfrute
              de um cafézinho especial ou um cappuccino, e, se quiser, uma massagem relaxante.
            </motion.p>
            <motion.p variants={aboutFadeSlideUp}>
              Investimos no que há de mais moderno na odontologia para entregar tratamentos mais
              rápidos, precisos e totalmente indolores, como o{' '}
              <Link href="/itero" className={inlineLinkClass}>
                Itero
              </Link>
              , que realiza o escaneamento digital para adeus às moldagens desconfortáveis com
              massinhas e visualizar seu sorriso em tempo real. Contamos também com o aparelho de
              laser, para que sua recuperação de procedimentos como cirurgias e extrações seja mais
              rápida. E com um sistema moderno para otimizar seu tempo, agendamentos práticos e
              prontuário 100% integrado.
            </motion.p>
            <motion.p variants={aboutFadeSlideUp}>
              Com uma trajetória consolidada e anos de prática dedicados à saúde e estética, a Dra.
              Rafaella Gomes combina domínio técnico atualizado com um olhar apurado e
              individualizado para cada paciente.
            </motion.p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
