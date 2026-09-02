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
          <div className="mb-6 flex h-[80px] items-center">
            <span className="font-serif text-[40px] leading-none text-white">
              Dra. Rafaella Gomes
            </span>
          </div>

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
