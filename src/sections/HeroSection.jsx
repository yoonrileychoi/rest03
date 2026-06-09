import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/HeroSection.css'

export default function HeroSection() {
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob1" />
        <div className="hero-blob blob2" />
        <div className="hero-blob blob3" />
      </div>
      <div className="container hero-inner" ref={textRef}>
        <h1 className="hero-title">
          <span className="title-line1">영어 전문</span>
          <span className="title-line2">통번역 & 웹 제작</span>
          <span className="title-line3">서비스</span>
        </h1>
        <p className="hero-desc">
          AI 기술과 전문가의 감각이 만나는 곳<br />
          정확하고 자연스러운 영어 통번역, 글로벌 감각의 웹사이트를 제공합니다.
        </p>
        <div className="hero-actions">
          <Link to="/videos/interpretation" className="btn-outline">서비스 소개</Link>
          <Link to="/contact" className="btn-primary">문의하기</Link>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>500+</strong><span>번역 프로젝트</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>100+</strong><span>웹 제작</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>98%</strong><span>고객 만족도</span></div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
