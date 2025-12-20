import Script from 'next/script'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Script
        src="https://www.sitebrain.app/static/widget.js"
        data-sitebrain-id="pbm9tfez1ik36wc5"
        data-api-base="https://www.sitebrain.app"
        strategy="afterInteractive"
      />

      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage
