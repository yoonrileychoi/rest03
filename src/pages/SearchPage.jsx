import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/SearchPage.css'

const searchData = [
  { title: '회사 소개', desc: 'Trans Pro 소개, 연혁, 핵심 가치 — 2016년 설립 이후 11년째 영어 전문 서비스', href: '/about', category: '회사 소개' },
  { title: '영어 통역', desc: '법률, 의료, 비즈니스, 학술 등 다양한 분야의 전문 영어 통역 서비스', href: '/videos/interpretation', category: '서비스 소개' },
  { title: '영어 번역', desc: '정확하고 자연스러운 전문 영어 번역 서비스, AI와 전문가의 감각을 결합', href: '/videos/translation', category: '서비스 소개' },
  { title: '리에종', desc: '비즈니스 미팅, 협상, 현장 통역 등 MICE 행사 밀착형 리에종 통역 서비스', href: '/videos/liaison', category: '서비스 소개' },
  { title: '영어 웹페이지 제작', desc: '글로벌 감각의 영어 웹사이트를 기획부터 제작까지 원스톱 제공', href: '/videos/web', category: '서비스 소개' },
  { title: '문의하기', desc: '영어 통번역, 리에종, 영문 웹사이트 제작 문의 및 무료 상담 신청', href: '/contact', category: '문의' },
  { title: '통역사 영어 공부법', desc: '통번역대학원 졸업 통역사의 영어 공부법 — 자료 및 교재 추천', href: '/videos/interpretation', category: '서비스 소개' },
  { title: 'MICE 행사 리에종', desc: '국제 컨퍼런스, 비즈니스 행사 현장 리에종 통역 서비스', href: '/videos/liaison', category: '서비스 소개' },
  { title: 'AI 번역 서비스', desc: 'DeepL, ChatGPT, OpenAI Whisper 기반 AI 번역 품질 향상 시스템', href: '/videos/translation', category: '서비스 소개' },
  { title: '영문 홈페이지', desc: '글로벌 기업을 위한 영문 홈페이지 기획 및 제작 서비스', href: '/videos/web', category: '서비스 소개' },
]

export default function SearchPage() {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q') || ''

  const results = query.trim()
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div className="all-wrap">
      <Header />
      <main className="search-main">
        <div className="search-hero">
          <div className="container">
            <span className="section-label">Search</span>
            <h1>검색 결과</h1>
            {query && <p>"{query}" 검색 결과 {results.length}건</p>}
          </div>
        </div>
        <div className="container search-content">
          {!query.trim() && (
            <p className="search-empty">검색어를 입력해 주세요.</p>
          )}
          {query.trim() && results.length === 0 && (
            <div className="search-empty">
              <p>"{query}"에 대한 검색 결과가 없습니다.</p>
              <p className="search-empty-sub">다른 검색어로 다시 시도해 보세요.</p>
            </div>
          )}
          {results.length > 0 && (
            <ul className="search-results">
              {results.map((item, i) => (
                <li key={i} className="search-result-item">
                  <Link to={item.href}>
                    <span className="result-category">{item.category}</span>
                    <h3 className="result-title">{item.title}</h3>
                    <p className="result-desc">{item.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
