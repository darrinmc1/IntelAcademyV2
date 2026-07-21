import { ImageResponse } from 'next/og'
 
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#020617', // slate-950
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3b82f6', // blue-500
          borderRadius: '4px',
          fontWeight: 800,
          border: '2px solid #1e293b' // slate-800
        }}
      >
        IA
      </div>
    ),
    { ...size }
  )
}
