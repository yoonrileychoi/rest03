import { Link } from 'react-router-dom'
import '../styles/ServicesSection.css'

const services = [
  {
    icon: '🌐',
    title: '영어 전문 통번역',
    titleEn: 'Professional Translation',
    desc: '법률, 의료, 비즈니스, 학술 등 다양한 분야의 전문 영어 통번역 서비스를 제공합니다.',
    href: '/services/translation',
    color: 'blue',
  },
  {
    icon: '🤖',
    title: 'AI 활용 번역',
    titleEn: 'AI-Powered Translation',
    desc: 'ChatGPT, DeepL 등 최신 AI 기술을 활용하여 빠르고 정확한 번역을 제공합니다.',
    href: '/services/ai-translation',
    color: 'pink',
  },
  {
    icon: '💻',
    title: '영어 웹페이지 제작',
    titleEn: 'English Web Development',
    desc: '글로벌 감각의 영어 웹사이트를 기획부터 제작까지 원스톱으로 제공합니다.',
    href: '/services/web',
    color: 'mint',
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">전문 서비스</h2>
          <p className="section-desc">영어와 기술의 교차점에서 최고의 서비스를 제공합니다</p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <Link to={svc.href} key={i} className={`service-card color-${svc.color}`}>
              <div className="svc-icon">{svc.icon}</div>
              <span className="svc-en">{svc.titleEn}</span>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
