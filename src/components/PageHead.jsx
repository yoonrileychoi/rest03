import { Link } from 'react-router-dom'
import '../styles/PageHead.css'

export default function PageHead({ title, navItems, currentPath }) {
  return (
    <div className="page-head">
      <div className="page-head-wrap">
        <div className="page-title-wrap">
          <p className="page-title">{title}</p>
          <p className="location">
            <Link to="/">홈</Link>
            <span>{title}</span>
          </p>
        </div>
        <ul className="sub-page-list">
          {navItems.map((item, i) => (
            <li key={i} className={currentPath === item.href ? 'current' : ''}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
