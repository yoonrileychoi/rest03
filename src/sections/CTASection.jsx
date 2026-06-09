import { Link } from 'react-router-dom'
import '../styles/CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div className="cta-text">
          <span className="section-label">Get Started</span>
          <h2>지금 바로 시작하세요</h2>
          <p>영어 번역, 통역, 웹사이트 제작 — 모든 영어 서비스를 한 곳에서</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn-primary">무료 상담 신청</Link>
        </div>
      </div>
    </section>
  )
}
