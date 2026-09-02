'use client'

import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '5521990472849'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de agendar uma consulta na Clínica Dra. Rafaella.'
)}`
const treatmentWhatsappUrl = (treatment: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o tratamento de ${treatment}.`
  )}`

const whatsappBtnClass =
  'inline-block rounded-btn border border-graphite bg-graphite px-[22px] py-[12px] text-body-sm font-semibold text-canvas shadow-btn-inset transition-colors hover:bg-white hover:text-graphite'

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const FOOTER_COLUMNS = [
  {
    title: 'Serviços',
    links: [
      { label: 'Invisalign', href: treatmentWhatsappUrl('Invisalign') },
      { label: 'Clareamento Dental', href: treatmentWhatsappUrl('Clareamento Dental') },
      { label: 'Harmonização Orofacial', href: treatmentWhatsappUrl('Harmonização Orofacial') },
      { label: 'Restaurações/Obturações', href: treatmentWhatsappUrl('Restaurações/Obturações') },
      { label: 'Limpeza Profissional', href: treatmentWhatsappUrl('Limpeza Profissional') },
    ],
  },
  {
    title: 'Sobre',
    links: [
      { label: 'Sobre a Dra.', href: '#sobre' },
      { label: 'Nossa Clínica', href: '#sobre' },
      { label: 'Diferenciais', href: '#como-funciona' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'Telefone', href: 'tel:+5521990472849' },
      { label: 'WhatsApp', href: WHATSAPP_URL },
      { label: 'Endereço', href: '#contato' },
    ],
  },
  {
    title: 'Redes Sociais',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/dentistatop/' },
      { label: 'WhatsApp', href: WHATSAPP_URL },
      {
        label: 'Google',
        href: 'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Dra.+Rafaella+Gomes+Av.+Embaixador+Abelardo+Bueno+3500+Barra+da+Tijuca',
      },
    ],
  },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="bg-[#1c1d20] px-10 py-20">
        <div className="mx-auto max-w-[1200px]">
          <a href="#" className="mb-6 inline-block transition-opacity hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-dra-rafaella-gomes.png"
              alt="Dra. Rafaella Gomes"
              className="h-12 w-auto sm:h-[60px]"
            />
          </a>

          <motion.div
            id="contato"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            <motion.div
              variants={fadeSlideUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="rounded-card border border-hairline bg-card p-6"
            >
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-faint">
                Telefone
              </p>
              <a
                href="tel:+5521990472849"
                className="text-[18px] font-bold text-ink transition-colors hover:text-pencil"
              >
                +55 (21) 99047-2849
              </a>
            </motion.div>

            <motion.div
              variants={fadeSlideUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="rounded-card border border-hairline bg-card p-6"
            >
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-faint">
                WhatsApp
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={whatsappBtnClass}>
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              variants={fadeSlideUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="rounded-card border border-hairline bg-card p-6"
            >
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-faint">
                Endereço
              </p>
              <p className="text-[16px] font-medium text-ink">
                Av. Embaixador Abelardo Bueno, 3500, Barra da Tijuca
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[18px] font-bold text-white">{column.title}</h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[14px] font-medium text-faint transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-hairline bg-ink p-5">
        <p className="text-center text-[12px] text-faint">
          © {new Date().getFullYear()} Clínica Dra. Rafaella Gomes. Todos os direitos reservados.
          {' '}CRO-RJ 22601
        </p>
      </div>
    </motion.footer>
  )
}
