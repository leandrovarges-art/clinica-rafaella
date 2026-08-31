'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const WHATSAPP_NUMBER = '5521990472849'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de agendar uma consulta na Clínica Dra. Rafaella.'
)}`

const fadeSlideUp = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const whatsappBtnClass =
  'rounded-btn border border-graphite bg-graphite px-[22px] py-[12px] text-body-sm font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="absolute left-0 right-0 top-0 z-50 bg-transparent"
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 sm:px-10">
        <motion.a href="#home" variants={fadeSlideUp} className="text-body-sm text-white">
          © Clínica Dra. Rafaella
        </motion.a>

        {/* Desktop */}
        <motion.div variants={staggerContainer} className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={fadeSlideUp}
              className="text-body-sm text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            variants={fadeSlideUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={whatsappBtnClass}
          >
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-white"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col overflow-hidden bg-canvas md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-hairline px-6 py-4 text-body-sm text-ink transition-colors hover:text-pencil"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${whatsappBtnClass} m-6 text-center`}
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
