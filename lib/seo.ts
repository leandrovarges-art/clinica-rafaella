export const SITE_URL = 'https://www.clinicarafaellagomes.com.br'
export const SITE_NAME = 'Clínica Dra. Rafaella Gomes'
export const SITE_TITLE = 'Invisalign Premium em Barra da Tijuca'
export const SITE_DESCRIPTION =
  'Clínica odontológica da Dra. Rafaella Gomes (CRO-RJ 22601) na Barra da Tijuca, RJ. Invisalign, clareamento, harmonização e mais. Agende sua consulta pelo WhatsApp.'

const TREATMENT_NAMES = [
  'Lentes de Contato',
  'Clareamento Dental',
  'Restaurações',
  'Harmonização Orofacial',
  'Invisalign',
  'Limpeza Dental',
  'Laserterapia',
  'Tratamento de Ronco e Apneia',
]

export const dentistJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: SITE_NAME,
  alternateName: 'Clínica Dra. Rafaella',
  url: SITE_URL,
  telephone: '+5521990472849',
  email: 'rafaella.odontologia@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Embaixador Abelardo Bueno, 3500, Sala 919 (Vision Offices)',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  areaServed: 'Barra da Tijuca, Rio de Janeiro',
  medicalSpecialty: 'Dentistry',
  sameAs: ['https://www.instagram.com/dentistatop/'],
  employee: {
    '@type': 'Dentist',
    name: 'Dra. Rafaella Gomes',
    honorificPrefix: 'Dra.',
    description: 'Cirurgiã-dentista com mestrado e especializações em odontologia. CRO-RJ 22601.',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tratamentos',
    itemListElement: TREATMENT_NAMES.map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'MedicalProcedure',
        name,
      },
    })),
  },
}
