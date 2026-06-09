import { useState, useCallback } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navItems } from '../data/navigation'
import { useTheme } from '../context/ThemeContext'
import '../styles/Header.css'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openMobileIndex, setOpenMobileIndex] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavHover = useCallback((index) => setActiveMenu(index), [])
  const handleNavLeave = useCallback(() => setActiveMenu(null), [])

  const toggleMobileItem = (index) => {
    setOpenMobileIndex(prev => prev === index ? null : index)
  }

  const handleLink = (href, outlink) => {
    if (outlink) window.open(href, '_blank', 'noopener,noreferrer')
    else navigate(href)
    setIsMobileOpen(false)
    setOpenMobileIndex(null)
  }

  return (
    <header>
      {/* PC */}
      <nav className="pc" onMouseLeave={handleNavLeave}>
        <div className="nav-bar container">
          <Link to="/" className="logo">
            <span className="logo-main">LINGUA PRO</span>
            <span className="logo-sub">English · Translation · Web</span>
          </Link>
          <ul className="nav-list">
            {navItems.map((item, i) => (
              <li key={i} className={activeMenu === i ? 'active' : ''} onMouseEnter={() => handleNavHover(i)}>
                <Link to={item.href || '#'}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="header-actions">
            <button className="theme-btn" onClick={toggleTheme} aria-label="테마 전환">
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>
            <Link to="/contact" className="header-cta">문의하기</Link>
          </div>
        </div>
        {/* Dropdown */}
        <div className={`nav-dropdown${activeMenu !== null && navItems[activeMenu]?.children?.length > 0 ? ' open' : ''}`}>
          <div className="container">
            {navItems.map((item, i) => (
              <ul key={i} className={`dropdown-col${activeMenu === i ? ' active' : ''}`}>
                {item.children.map((child, j) => (
                  <li key={j}>
                    <Link to={child.href} onClick={handleNavLeave}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="mo">
        <div className="nav-bar container">
          <Link to="/" className="logo">
            <span className="logo-main">LINGUA PRO</span>
          </Link>
          <div className="mo-actions">
            <button className="theme-btn" onClick={toggleTheme} aria-label="테마 전환">
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>
            <button
              className={`menu-btn${isMobileOpen ? ' open' : ''}`}
              onClick={() => setIsMobileOpen(v => !v)}
              aria-label="메뉴"
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
        <div className={`mo-nav-cnt${isMobileOpen ? ' open' : ''}`}>
          {navItems.map((item, i) => (
            <dl key={i}>
              <dt>
                <button
                  className={openMobileIndex === i ? 'open' : ''}
                  onClick={() => item.children.length ? toggleMobileItem(i) : handleLink(item.href)}
                >
                  <span>{item.label}</span>
                  {item.children.length > 0 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>}
                </button>
              </dt>
              {item.children.length > 0 && (
                <dd className={openMobileIndex === i ? 'open' : ''}>
                  <ul>
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <button onClick={() => handleLink(child.href, child.outlink)}>
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </dd>
              )}
            </dl>
          ))}
          <div className="mo-footer">
            <p>© 2026 LINGUA PRO. All rights reserved.</p>
          </div>
        </div>
      </nav>
    </header>
  )
}
