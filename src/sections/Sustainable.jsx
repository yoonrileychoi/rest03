import { Link } from 'react-router-dom'
import '../styles/Sustainable.css'

export default function Sustainable() {
  return (
    <div className="sustainable">
      <div className="sustainable-wrap">
        <p className="sectit">
          Sustainable<br />Foundations.
        </p>
        <div className="seccnt">
          <p className="tit">지속가능경영</p>
          <p className="dec">
            우리는 환경과 사회를 고려한 책임 있는 건설을 실천합니다.<br />
            또한 진흥기업은 장기적 관점의 친환경 기술과 효율적 자원 관리로 미래 세대가 살아갈 기반을 만듭니다.
          </p>
          <Link to="/sustainability/ethical" className="arrow-btn">전체보기</Link>
        </div>
      </div>
    </div>
  )
}
