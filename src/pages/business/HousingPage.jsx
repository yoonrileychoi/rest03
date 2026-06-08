import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageHead from '../../components/PageHead'
import '../../styles/HousingPage.css'

const businessNav = [
  { label: '주택사업', href: '/business/housing' },
  { label: '건축사업', href: '/business/building' },
  { label: '토목사업', href: '/business/civil' },
  { label: '플랜트사업', href: '/business/plant' },
  { label: '해외사업', href: '/business/global' },
]

const tabCategories = [
  { id: 'all', label: '전체' },
  { id: 'capital', label: '수도권' },
  { id: 'local', label: '지방' },
]

const mockProjects = [
  {
    id: 1,
    title: '해링턴플레이스 서울',
    location: '서울특별시 용산구',
    client: '진흥기업',
    amount: '100,000,000,000원',
    period: '2023.01.01 ~ 2025.12.31',
    region: 'capital',
    images: ['/images/business/housing01.jpg'],
  },
  {
    id: 2,
    title: '해링턴플레이스 인천',
    location: '인천광역시 연수구',
    client: '진흥기업',
    amount: '80,000,000,000원',
    period: '2022.06.01 ~ 2024.12.31',
    region: 'capital',
    images: ['/images/business/housing02.jpg'],
  },
  {
    id: 3,
    title: '해링턴플레이스 부산',
    location: '부산광역시 해운대구',
    client: '진흥기업',
    amount: '90,000,000,000원',
    period: '2023.03.01 ~ 2025.06.30',
    region: 'local',
    images: ['/images/business/housing03.jpg'],
  },
]

export default function HousingPage() {
  const { pathname } = useLocation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = activeTab === 'all'
    ? mockProjects
    : mockProjects.filter((p) => p.region === activeTab)

  const openPopup = (project) => setSelectedProject(project)
  const closePopup = () => setSelectedProject(null)

  const popupIdx = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1

  return (
    <div className="all-wrap">
      <Header isDark={false} />
      <main>
        <PageHead
          title="사업소개"
          navItems={businessNav}
          currentPath={pathname}
        />

        <div className="page-cont">
          <div className="page-cont-wrap">
            <div className="page-cont-view">
              <img src="/images/pagehead/housing-head.jpg" alt="" />
              <div className="page-head-title-wrap">
                <div className="left">
                  <p className="tit">Our Business</p>
                  <p>
                    다양한 건설 경험을 통해 삶의 공간에 새로운 가치를 더하며<br />
                    더 나은 내일을 실현합니다
                  </p>
                </div>
                <div className="right">
                  <p className="tit">주택사업</p>
                  <p>
                    진흥기업의 주택사업은 차별화된 설계와 품질 중심의 시공을 바탕으로 <br />
                    쾌적한 주거 환경을 제공합니다.
                  </p>
                  <p>
                    고객의 라이프스타일을 반영한 공간 구성과 안정적인 사업 수행을 <br />
                    통해 주거 가치를 높이고 있으며 지속 가능한 주거 문화와 프리미엄 <br />
                    브랜드 가치를 실현해 나가고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pagecnt">
            <div className="section-wrap">
              <p className="business-title">주택사업</p>
            </div>
            <div className="tab-box">
              <div className="tab-boxhead">
                <div className="tab-boxhead-inner">
                  <ul>
                    {tabCategories.map((tab) => (
                      <li key={tab.id} className={activeTab === tab.id ? 'current' : ''}>
                        <button type="button" onClick={() => setActiveTab(tab.id)}>
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="tab-box-cont">
                <div className="section-wrap">
                  <ul className="sumnail-board">
                    {filteredProjects.map((project) => (
                      <li key={project.id} onClick={() => openPopup(project)}>
                        <div className="thumb">
                          <img src={project.images[0]} alt={project.title} />
                        </div>
                        <div className="info">
                          <p className="tit">{project.title}</p>
                          <p className="location">{project.location}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 팝업 뷰 */}
        {selectedProject && (
          <div className="popup-view-wrap">
            <div className="popup-view">
              <button type="button" className="btn-close" onClick={closePopup}>닫기</button>
              <div className="popup-view-inner">
                <div className="cont-wrap">
                  <div className="cont">
                    <p className="title">{selectedProject.title}</p>
                    <ul className="cont-list">
                      <li><span>발주처</span><span>{selectedProject.client}</span></li>
                      <li><span>공사금액</span><span>{selectedProject.amount}</span></li>
                      <li><span>공사기간</span><span>{selectedProject.period}</span></li>
                      <li><span>공사위치</span><span>{selectedProject.location}</span></li>
                    </ul>
                  </div>
                  <div className="boardpagenation">
                    <div className="prev-btns">
                      <button
                        type="button"
                        className="prev"
                        disabled={popupIdx <= 0}
                        onClick={() => {
                          if (popupIdx > 0) setSelectedProject(filteredProjects[popupIdx - 1])
                        }}
                      >
                        이전보기
                      </button>
                    </div>
                    <div className="page">
                      <span>{popupIdx + 1}</span>
                      <em>/</em>
                      <span>{filteredProjects.length}</span>
                    </div>
                    <div className="next-btns">
                      <button
                        type="button"
                        className="next"
                        disabled={popupIdx >= filteredProjects.length - 1}
                        onClick={() => {
                          if (popupIdx < filteredProjects.length - 1)
                            setSelectedProject(filteredProjects[popupIdx + 1])
                        }}
                      >
                        다음보기
                      </button>
                    </div>
                  </div>
                </div>
                <div className="view">
                  <Swiper
                    key={selectedProject.id}
                    className="popup-swiper"
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={selectedProject.images.length > 1}
                  >
                    {selectedProject.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt={selectedProject.title} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
