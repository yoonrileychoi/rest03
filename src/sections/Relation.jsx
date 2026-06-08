import { Link } from 'react-router-dom'
import '../styles/Relation.css'

export default function Relation() {
  return (
    <div className="relation">
      <div className="relation-wrap">
        <p className="sectit">Investor Relation</p>
        <div className="seccnt">
          <p className="tit">투자정보</p>
          <p className="dec">
            투명한 경영과 지속적인 혁신을 기반으로 기업의 <br />
            경쟁력을 강화하고, 안정적인 성장 구조를 구축합니다.
          </p>
          <Link to="/ir/governance/directors" className="arrow-btn">전체보기</Link>
        </div>
      </div>
    </div>
  )
}
