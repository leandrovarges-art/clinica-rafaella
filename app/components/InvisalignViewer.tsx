'use client'

import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '5521990472849'
const INVISALIGN_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar uma visualização do Invisalign.'
)}`

const EASE = [0.4, 0, 0.2, 1] as const

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function InvisalignViewer() {
  return (
    <section id="invisalign-3d" className="bg-canvas px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ rotate: 1.5 }}
            transition={{ duration: 0.4, ease: EASE }}
            src="/images/invisalign-device.png"
            alt="Invisalign"
            className="h-auto w-full max-w-[300px] rounded-3xl object-contain shadow-sm sm:max-w-[500px]"
          />
        </motion.div>

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
          <motion.p variants={fadeSlideUp} className="mt-4 text-body text-pencil">
            Visualize seu tratamento
          </motion.p>
          <motion.p variants={fadeSlideUp} className="mt-4 text-body-sm text-faint">
            Veja o alinhador em detalhes e entenda como a tecnologia Invisalign vai transformar
            seu sorriso.
          </motion.p>
          <motion.a
            variants={fadeSlideUp}
            href={INVISALIGN_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-btn border border-graphite bg-graphite px-[22px] py-[14px] text-body-sm font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite"
          >
            Solicitar Visualização
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
