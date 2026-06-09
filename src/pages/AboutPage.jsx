import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/AboutPage.css'

const history = [
  {
    year: '2016',
    items: [
      'Trans Pro 설립 — 영어 통번역 전문 에이전시로 출발',
      '기업 IR, 컨퍼런스 현장 통역 서비스 개시',
    ],
  },
  {
    year: '2017',
    items: [
      'MICE 행사 리에종 서비스 론칭',
      '국내 주요 국제 컨퍼런스 공식 파트너 선정',
    ],
  },
  {
    year: '2018',
    items: [
      '비즈니스 통번역 누적 500건 돌파',
      '법률·의료·기술 분야 전문 번역팀 구성',
    ],
  },
  {
    year: '2019',
    items: [
      '영어 웹페이지 제작 서비스 신규 론칭',
      '글로벌 기업 영문 홈페이지 제작 프로젝트 시작',
    ],
  },
  {
    year: '2020',
    items: [
      '비대면 화상 통역 서비스 도입',
      '온라인 MICE 행사 전면 지원 체계 구축',
    ],
  },
  {
    year: '2021',
    items: [
      'DeepL·ChatGPT 기반 AI 번역 품질 향상 시스템 구축',
      '번역 검수 2중 프로세스 도입으로 정확도 향상',
    ],
  },
  {
    year: '2022',
    items: [
      '정부 기관 및 공공기관 통번역 공식 파트너십 체결',
      '리에종 서비스 전담팀 확대 편성',
    ],
  },
  {
    year: '2023',
    items: [
      '누적 고객사 100곳 돌파',
      '영어 웹페이지 제작 프로젝트 누적 50건 완료',
    ],
  },
  {
    year: '2024',
    items: [
      'AI 리터러시 교육 및 번역 워크숍 프로그램 출시',
      '재계약률 95% 달성 — 고객 신뢰 지속 확인',
    ],
  },
  {
    year: '2025',
    items: [
      '창립 10주년 — 통번역·리에종·웹제작 3개 서비스 부문 확립',
      '누적 통번역 프로젝트 1,000건 돌파',
    ],
  },
  {
    year: '2026',
    items: [
      '11년째 영어 전문 서비스 제공 중',
      'Trans Pro와 함께 성장해온 고객사와 계속 동행',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="all-wrap">
      <Header />
      <main className="about-main">
        <div className="about-hero">
          <div className="container">
            <span className="section-label">About Us</span>
            <h1>회사 소개</h1>
            <p>진심과 전문성으로 고객과 함께해온 11년</p>
          </div>
        </div>

        <div className="container about-content">
          <section className="about-intro">
            <div className="about-intro-text">
              <h2>Trans Pro를 소개합니다</h2>
              <p>
                2016년 설립 이후, 11년째 영어통번역 및 MICE 업계에서 진심과 전문성으로
                고객과 함께해오고 있습니다. 단순한 언어 변환을 넘어, 비즈니스 현장에서
                실질적으로 통하는 영어 솔루션을 제공합니다.
              </p>
              <p>
                통번역대학원 출신 전문 통역사와 현장 경험 풍부한 리에종 전문가,
                글로벌 감각의 웹 개발팀이 함께 고객의 언어 장벽을 허물고 있습니다.
              </p>
              <p>
                국내외 기업 IR, 국제 컨퍼런스, 정부 기관 행사까지 — 현장에서 검증된
                전문성으로 고객의 비즈니스 성과를 함께 만들어갑니다.
              </p>
            </div>
            <div className="about-stats-grid">
              <div className="about-stat">
                <strong>2016</strong>
                <span>설립연도</span>
              </div>
              <div className="about-stat">
                <strong>1,000+</strong>
                <span>누적 프로젝트</span>
              </div>
              <div className="about-stat">
                <strong>100+</strong>
                <span>누적 고객사</span>
              </div>
              <div className="about-stat">
                <strong>95%</strong>
                <span>재계약률</span>
              </div>
            </div>
          </section>

          <section className="about-values">
            <h2>핵심 가치</h2>
            <div className="values-grid">
              <div className="value-card">
                <i className="fa-solid fa-bullseye" />
                <h3>전문성</h3>
                <p>통번역대학원 출신 전문 통역사와 MICE 현장 경험 10년 이상의 리에종 전문가가 직접 서비스합니다.</p>
              </div>
              <div className="value-card">
                <i className="fa-solid fa-handshake" />
                <h3>신뢰</h3>
                <p>고객의 비즈니스를 이해하고, 기밀 유지와 정확성을 최우선으로 하는 신뢰할 수 있는 파트너입니다.</p>
              </div>
              <div className="value-card">
                <i className="fa-solid fa-lightbulb" />
                <h3>혁신</h3>
                <p>AI 기술과 전문가의 감각을 결합하여 빠르고 정확한 서비스 품질을 지속적으로 혁신합니다.</p>
              </div>
            </div>
          </section>

          <section className="about-history">
            <h2>연혁</h2>
            <div className="history-list">
              {history.map((item, i) => (
                <div key={i} className="history-item">
                  <span className="history-year">{item.year}</span>
                  <ul className="history-desc-list">
                    {item.items.map((desc, j) => (
                      <li key={j} className="history-desc">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
