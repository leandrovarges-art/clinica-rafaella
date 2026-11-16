import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from '@/lib/seo'

const CLINICA_TITLE = 'Nossa Clínica | Dra. Rafaella Gomes'
const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, type: 'image/png' }

const CLINICA_DESCRIPTION =
  'Conheça a clínica da Dra. Rafaella Gomes na Barra da Tijuca: atendimento acolhedor e personalizado, tecnologia de ponta como o iTero e laser, e conforto do primeiro ao último minuto.'

export const metadata: Metadata = {
  title: { absolute: CLINICA_TITLE },
  description: CLINICA_DESCRIPTION,
  alternates: {
    canonical: '/clinica',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: `${SITE_URL}/clinica`,
    siteName: SITE_NAME,
    title: CLINICA_TITLE,
    description: CLINICA_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: CLINICA_TITLE,
    description: CLINICA_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export default function ClinicaLayout({ children }: { children: React.ReactNode }) {
  return children
}
