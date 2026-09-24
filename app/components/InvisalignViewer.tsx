'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const INVISALIGN_VIEWER_URL = 'https://starter-kit.invisalign.hamburg/sv/1756903'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function InvisalignViewer() {
  // Drives the handoff from the one-time entrance animation to the
  // continuous infinite spin — both animate rotateY, so they can't be
  // expressed as separate whileInView/animate props without fighting.
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <section id="invisalign-3d" className="bg-canvas px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="flex justify-center" style={{ perspective: 1200 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            onViewportEnter={() => setHasEntered(true)}
            animate={{ rotateY: hasEntered ? 360 : 0 }}
            transition={
              hasEntered
                ? { rotateY: { duration: 12, repeat: Infinity, ease: 'linear' } }
                : { duration: 0.8 }
            }
            whileHover={
              hasEntered
                ? { rotateY: 720, transition: { duration: 3, repeat: Infinity, ease: 'linear' } }
                : undefined
            }
            src="/images/invisalign-device.png"
            alt="Invisalign"
            className="h-auto w-full max-w-[300px] object-contain sm:max-w-[500px]"
            style={{ transformOrigin: 'center center' }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-left"
        >
          <motion.h2 variants={fadeSlideUp} className="text-heading font-bold text-ink">
            Simulação do seu novo sorriso
          </motion.h2>
          <motion.p
            variants={fadeSlideUp}
            className="mt-4 text-[18px] font-medium leading-[1.66] text-pencil"
          >
            Que tal conhecer seu novo sorriso antes mesmo de iniciar seu tratamento? Aqui no
            Consultório Rafaella Gomes você consegue visualizar como seu sorriso ficará após
            tratamento ortodôntico Invisalign.
          </motion.p>
          <motion.a
            variants={fadeSlideUp}
            href={INVISALIGN_VIEWER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-btn border border-graphite bg-graphite px-[22px] py-[14px] text-body-sm font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite"
          >
            Faça sua simulação
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
