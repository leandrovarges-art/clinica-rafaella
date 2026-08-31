import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_TITLE } from '@/lib/seo'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: '#242424',
            marginBottom: 28,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 400,
            color: '#171717',
            textAlign: 'center',
            lineHeight: 1.15,
          }}
        >
          {SITE_TITLE}
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#5c5c5c',
            marginTop: 32,
            textAlign: 'center',
          }}
        >
          Transforme seu sorriso com a melhor tecnologia
        </div>
      </div>
    ),
    { ...size }
  )
}
