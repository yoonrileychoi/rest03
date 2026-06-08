import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/BusinessSection.css'

const businessSlides = [
  {
    img: '/images/main/business-view02.jpg',
    href: '/business/housing',
    title: '주택 사업',
    desc: '고객의 라이프스타일을 반영한 프리미엄 주거\n공간으로 주거 문화를 선도합니다.',
  },
  {
    img: '/images/main/business-view03.jpg',
    href: '/business/building',
    title: '건축사업',
    desc: '첨단 기술과 예술적 감각이 조화된 건축물로\n도시의 스카이라인을 바꿉니다.',
  },
  {
    img: '/images/main/business-view04.jpg',
    href: '/business/civil',
    title: '토목사업',
    desc: '국가 인프라 구축의 핵심 역할을 수행하며 안전하고\n편리한 생활 기반을 조성합니다.',
  },
  {
    img: '/images/main/business-view05.jpg',
    href: '/business/plant',
    title: '플랜트사업',
    desc: '고도의 기술력이 요구되는 산업 기반 시설을\n성공적으로 수행합니다.',
  },
  {
    img: '/images/main/business-view06.jpg',
    href: '/business/global',
    title: '해외사업',
    desc: '축적된 기술력과 노하우를 바탕으로 글로벌 시장에\n진출하여 역량을 입증합니다.',
  },
]

export default function BusinessSection() {
  return (
    <div className="business">
      <div className="business-wrap">
        <div className="business-head">
          <p className="title">
            Our Business<br />Shaping the Future
          </p>
        </div>
        <div className="business-list">
          <Swiper
            className="business-swiper"
            modules={[Navigation]}
            navigation={{
              prevEl: '.business-swiper .swiper-button-prev',
              nextEl: '.business-swiper .swiper-button-next',
            }}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2.5, spaceBetween: 24 },
              1200: { slidesPerView: 3.5, spaceBetween: 32 },
            }}
          >
            {businessSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <img src={slide.img} alt="" />
                <div className="dec-wrap">
                  <Link to={slide.href}>
                    <p className="tit">{slide.title}</p>
                    <p className="dec">
                      {slide.desc.split('\n').map((line, li) => (
                        <span key={li}>{line}{li < slide.desc.split('\n').length - 1 && <br />}</span>
                      ))}
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <button type="button" className="swiper-button-prev" aria-label="이전 슬라이드" />
            <button type="button" className="swiper-button-next" aria-label="다음 슬라이드" />
          </Swiper>
        </div>
      </div>
    </div>
  )
}
