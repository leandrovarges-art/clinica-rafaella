'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Tratamentos', href: '#tratamentos' },
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="absolute left-0 right-0 top-0 z-50 border-b border-fog/40 bg-transparent"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <motion.a href="#home" variants={fadeSlideUp} className="text-caption text-bone">
          © Clínica Dra. Rafaella
        </motion.a>

        {/* Desktop */}
        <motion.div variants={staggerContainer} className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={fadeSlideUp}
              className="text-caption text-bone transition-colors hover:text-fog"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            variants={fadeSlideUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-pill bg-iris px-[22px] py-[12px] text-caption text-bone shadow-inset-ring"
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
            className="h-px w-6 bg-bone"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-bone"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-bone"
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
            className="flex flex-col overflow-hidden border-t border-fog/40 bg-obsidian md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-fog/20 px-6 py-4 text-caption text-bone transition-colors hover:text-fog"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="m-6 rounded-pill bg-iris px-[22px] py-[12px] text-center text-caption text-bone shadow-inset-ring"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
