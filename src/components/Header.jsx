import { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navItems } from '../data/navigation'
import '../styles/Header.css'

export default function Header({ isDark = false }) {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openMobileIndex, setOpenMobileIndex] = useState(null)
  const navigate = useNavigate()

  const handleNavHover = useCallback((index) => setActiveMenu(index), [])
  const handleNavLeave = useCallback(() => setActiveMenu(null), [])

  const toggleMobileItem = (index) => {
    setOpenMobileIndex((prev) => (prev === index ? null : index))
  }

  const handleLink = (href, outlink) => {
    if (outlink) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      navigate(href)
    }
    setIsMobileOpen(false)
    setOpenMobileIndex(null)
  }

  return (
    <header className={isDark ? 'dark' : ''}>
      {/* PC 네비게이션 */}
      <nav className="pc" onMouseLeave={handleNavLeave}>
        <div className="nav-bar">
          <h1><Link to="/">CHINHUNG</Link></h1>
          <ul>
            {navItems.map((item, i) => (
              <li
                key={i}
                className={activeMenu === i ? 'active' : ''}
                onMouseEnter={() => handleNavHover(i)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`dim-btn${activeMenu !== null ? ' active' : ''}`}
            onClick={handleNavLeave}
          />
        </div>
        <div className={`nav-cnt${activeMenu !== null ? ' open' : ''}`}>
          <ul>
            {navItems.map((item, i) => (
              <li key={i} className={activeMenu === i ? 'active' : ''}>
                <ul>
                  {item.children.map((child, j) => (
                    <li key={j}>
                      {child.outlink ? (
                        <a
                          href={child.href}
                          className="outlink"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link to={child.href}>{child.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 모바일 네비게이션 */}
      <nav className="mo">
        <div className="nav-bar">
          <h1><Link to="/">CHINHUNG</Link></h1>
          <button
            type="button"
            className={`menu-btn${isMobileOpen ? ' open' : ''}`}
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            메뉴열기
          </button>
        </div>
        <div className={`nav-cnt${isMobileOpen ? ' open' : ''}`}>
          <div className="menu-wrap">
            {navItems.map((item, i) => (
              <dl key={i}>
                <dt>
                  <button
                    type="button"
                    className={openMobileIndex === i ? 'open' : ''}
                    onClick={() => toggleMobileItem(i)}
                  >
                    <span>{item.label}</span>
                  </button>
                </dt>
                <dd className={openMobileIndex === i ? 'open' : ''}>
                  <ul>
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <button
                          type="button"
                          className={child.outlink ? 'outlink' : ''}
                          onClick={() => handleLink(child.href, child.outlink)}
                        >
                          <span>{child.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            ))}
          </div>
          <p className="copyright">&copy; 2026 CHINHUNG INTERNATIONAL INC. All rights reserved.</p>
        </div>
      </nav>
    </header>
  )
}
