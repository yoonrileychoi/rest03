import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Founding.css'

export default function Founding() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrapRef.current?.classList.add('visible')
        }
      },
      { threshold: 0.3 }
    )
    if (wrapRef.current) observer.observe(wrapRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="founding">
      <div className="fadein-wrap" ref={wrapRef}>
        <p className="fade">
          <span className="fade01">진흥기업은 1959년 창립 이래</span>
          <br />
          <span className="fade02">
            대한민국 건설 산업의 역사와 함께해 왔습니다.<br />
            반세기 건설역사의
          </span>
          <span className="fade03">
            {' '}축적된 기술력으로<br />더 나은 미래를 만듭니다.
          </span>
        </p>
        <ul className="founding-link">
          <li><Link to="/about/greetings" className="arrow-btn">CEO 인사말</Link></li>
          <li><Link to="/about/vision" className="arrow-btn">비전/가치</Link></li>
          <li><Link to="/about/history" className="arrow-btn">연혁</Link></li>
          <li><Link to="/about/brand" className="arrow-btn">브랜드소개</Link></li>
        </ul>
      </div>
    </div>
  )
}
