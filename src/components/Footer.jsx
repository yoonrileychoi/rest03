import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">LINGUA PRO</div>
          <p className="footer-tagline">영어 전문 통번역 · 영어 웹페이지 제작</p>
          <p className="footer-copy">© 2026 LINGUA PRO. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>서비스</h4>
            <ul>
              <li><Link to="/services/translation">영어 전문 통번역</Link></li>
              <li><Link to="/services/ai-translation">AI 활용 번역</Link></li>
              <li><Link to="/services/web">영어 웹페이지 제작</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>동영상</h4>
            <ul>
              <li><Link to="/videos/ai-translation">AI 영어 통번역</Link></li>
              <li><Link to="/videos/ai-literacy">미국 AI 리터러시</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>회사</h4>
            <ul>
              <li><Link to="/about/greeting">CEO 인사말</Link></li>
              <li><Link to="/about/vision">회사 비전</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
