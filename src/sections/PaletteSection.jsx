import '../styles/PaletteSection.css'

const palette = [
  { name: 'Baby Blue', nameKr: '베이비 블루', hex: '#89C4E1', role: 'Primary Accent' },
  { name: 'Baby Pink', nameKr: '베이비 핑크', hex: '#F4A7B9', role: 'Secondary Accent' },
  { name: 'Deep Navy', nameKr: '딥 네이비', hex: '#1D3557', role: 'Point Color' },
  { name: 'Soft Mint', nameKr: '소프트 민트', hex: '#A8D8C8', role: 'Auxiliary' },
  { name: 'Warm Ivory', nameKr: '웜 아이보리', hex: '#FDF6F0', role: 'Background' },
]

export default function PaletteSection() {
  return (
    <section className="palette-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Brand Colors</span>
          <h2 className="section-title">컬러 팔레트</h2>
          <p className="section-desc">브랜드 아이덴티티를 담은 5가지 시그니처 컬러</p>
        </div>
        <div className="palette-grid">
          {palette.map((color, i) => (
            <div key={i} className="palette-chip">
              <div className="chip-swatch" style={{ background: color.hex }} />
              <div className="chip-info">
                <span className="chip-role">{color.role}</span>
                <strong className="chip-name">{color.nameKr}</strong>
                <span className="chip-name-en">{color.name}</span>
                <code className="chip-hex">{color.hex}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
