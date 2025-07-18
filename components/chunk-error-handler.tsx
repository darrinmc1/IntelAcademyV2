"use client"

import { useEffect } from 'react'

export function ChunkErrorHandler() {
  useEffect(() => {
    // Add event listener for chunk load errors
    window.addEventListener('error', (event) => {
      // Check if the error is related to chunk loading
      if (
        event.message &&
        (event.message.includes('ChunkLoadError') || 
         event.message.includes('Loading chunk') || 
         event.message.includes('failed'))
      ) {
        console.error('Chunk load error detected:', event.message)
        
        // Attempt to reload the page after a short delay
        setTimeout(() => {
          console.log('Reloading page due to chunk load error...')
          window.location.reload()
        }, 2000)
      }
    })
    
    // Increase timeout for loading chunks
    if (window.__NEXT_DATA__ && window.__NEXT_DATA__.props) {
      window.__NEXT_DATA__.props.pageProps = window.__NEXT_DATA__.props.pageProps || {}
      window.__NEXT_DATA__.props.pageProps.chunkLoadTimeout = 60000 // 60 seconds
    }
  }, [])

  return null
}