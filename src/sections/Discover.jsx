import { Link } from 'react-router-dom'
import '../styles/Discover.css'

const newsItems = [
  { title: '진흥기업 2026 신입사원 공개채용 실시', date: '2026.02.27', isNew: true, href: '#' },
  { title: '진흥기업 2026 신입사원 공개채용 실시', date: '2026.02.27', href: '#' },
  { title: '진흥기업 2026 신입사원 공개채용 실시', date: '2026.02.27', href: '#' },
  { title: '진흥기업 2026 신입사원 공개채용 실시', date: '2026.02.27', href: '#' },
  { title: '진흥기업 2026 신입사원 공개채용 실시', date: '2026.02.27', href: '#' },
]

export default function Discover() {
  return (
    <div className="discover">
      <div className="discover-wrap">
        <div className="discover-head">
          <p>More to Discover</p>
          <Link to="/support/notice" className="arrow-btn">전체보기</Link>
        </div>
        <ul className="discover-cnt">
          {newsItems.map((item, i) => (
            <li key={i} className={item.isNew ? 'new' : ''}>
              <Link to={item.href} className="cnt-box">
                <p className="tit">{item.title}</p>
                <p className="date">{item.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
