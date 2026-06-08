import { useState } from 'react'
import { Link } from 'react-router-dom'
import { familySites } from '../data/navigation'
import '../styles/Footer.css'

export default function Footer() {
  const [selectedSite, setSelectedSite] = useState('')

  const handleFamilySite = (e) => {
    const val = e.target.value
    if (val) {
      window.open(val, '_blank', 'noopener,noreferrer')
      setSelectedSite('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="chinhung">
        <div className="chinhung-wrap">
          <p className="sectit">
            <img src="/images/common/chinhung-logo.png" alt="chinhung" />
          </p>
          <div className="seccnt">
            <p className="dec">
              진흥기업은 단순한 건설을 넘어 사람이 머무는 공간과 <br />
              그 공간을 둘러싼 환경까지 함께 설계합니다.
            </p>
            <p className="dec">
              우리는 삶의 질을 높이는 구조를 고민하며 도시와 자연이 균형을 이루는 <br />
              지속 가능한 기반을 만들어갑니다. 기술과 책임, 그리고 배려를 <br />
              더해 조화로운 미래를 완성합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-stiky">
        <button type="button" className="gototop" onClick={scrollToTop}>
          맨위로가기
        </button>
      </div>

      <div className="footer-wrap">
        <div className="footer-top">
          <div className="left-side">
            <dl>
              <dt>서울지사</dt>
              <dd>
                <ul>
                  <li>서울특별시 용산구 후암로 27 (후암동)</li>
                  <li>Tel : 02-772-1200</li>
                  <li>Fax : 02-754-2972</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>본사</dt>
              <dd>
                <ul>
                  <li>인천광역시 연수구 컨벤시아대로 69 807호</li>
                  <li>Tel : 032-432-0658</li>
                  <li>Fax : 032-432-0659</li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className="right-side">
            <select
              name="family"
              id="family-site"
              value={selectedSite}
              onChange={handleFamilySite}
            >
              <option value="">패밀리사이트</option>
              {familySites.map((site, i) => (
                <option key={i} value={site.href}>{site.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><Link to="/report/information">제보센터</Link></li>
            <li><Link to="/support/legal-notice">법적고지</Link></li>
            <li><Link to="/privacy/info-graphic" className="imp">개인정보처리방침</Link></li>
          </ul>
          <p className="copyright">&copy; 2026 CHINHUNG INTERNATIONAL INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
