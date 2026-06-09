import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { mkdirSync } from 'fs'

mkdirSync('public/images', { recursive: true })

// OG image: 1200x630, baby blue background, dark text
const width = 1200
const height = 630

// Baby blue: #89C4E1, dark navy text: #1D3557
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#89C4E1;stop-opacity:1" />
      <stop offset="60%" style="stop-color:#A8D8C8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F4A7B9;stop-opacity:0.6" />
    </linearGradient>
    <!-- decorative circles -->
  </defs>

  <!-- background -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />

  <!-- decorative blobs -->
  <circle cx="1050" cy="100" r="180" fill="#FDF6F0" opacity="0.25" />
  <circle cx="150" cy="530" r="140" fill="#1D3557" opacity="0.08" />
  <circle cx="980" cy="560" r="100" fill="#F4A7B9" opacity="0.3" />

  <!-- left accent bar -->
  <rect x="80" y="180" width="6" height="160" rx="3" fill="#1D3557" opacity="0.5" />

  <!-- brand name -->
  <text x="110" y="255" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#1D3557" opacity="0.9">Trans Pro</text>

  <!-- tagline -->
  <text x="110" y="320" font-family="Arial, sans-serif" font-size="28" font-weight="400" fill="#1D3557" opacity="0.75">영어 통번역 &amp; AI 번역 솔루션 &amp; 영어 웹페이지 제작</text>

  <!-- sub text -->
  <text x="110" y="375" font-family="Arial, sans-serif" font-size="22" fill="#1D3557" opacity="0.55">Professional English Translation · AI Solutions · Web Development</text>

  <!-- bottom domain -->
  <text x="110" y="560" font-family="Arial, sans-serif" font-size="20" fill="#1D3557" opacity="0.45">yoonrileychoi.github.io/rest03</text>

  <!-- decorative dots -->
  <circle cx="900" cy="290" r="8" fill="#1D3557" opacity="0.15" />
  <circle cx="930" cy="310" r="5" fill="#1D3557" opacity="0.1" />
  <circle cx="870" cy="320" r="12" fill="#1D3557" opacity="0.1" />
</svg>
`

await sharp(Buffer.from(svg))
  .png()
  .toFile('public/images/og-image.png')

console.log('OG image generated: public/images/og-image.png')
