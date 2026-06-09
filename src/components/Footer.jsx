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
            <h4>동영상</h4>
            <ul>
              <li><Link to="/videos/translation">영어 통번역</Link></li>
              <li><Link to="/videos/conference">회의 통역</Link></li>
              <li><Link to="/videos/mice">MICE 영어 통역</Link></li>
              <li><Link to="/videos/web">영어 웹사이트 개발</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>바로가기</h4>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/videos/translation">동영상</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
