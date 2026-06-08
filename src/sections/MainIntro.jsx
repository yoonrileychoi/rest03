import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/MainIntro.css'

const kvSlides = [
  {
    img: '/images/main/mainkv01.jpg',
    text: 'Always by your side',
  },
  {
    img: '/images/main/mainkv02.jpg',
    text: 'Enable Today,\nEmpower Tomorrow',
  },
]

const cardImages = [
  '/images/main/maincard01.jpg',
  '/images/main/maincard02.jpg',
  '/images/main/maincard03.jpg',
  '/images/main/maincard04.jpg',
]

export default function MainIntro() {
  const timerBarRef = useRef(null)
  const [swiperInstance, setSwiperInstance] = useState(null)

  const resetTimer = () => {
    if (!timerBarRef.current) return
    timerBarRef.current.style.animation = 'none'
    timerBarRef.current.offsetHeight // reflow
    timerBarRef.current.style.animation = ''
  }

  return (
    <div className="main-intro">
      <div className="card-frame">
        <div className="kv-wrap">
          <div className="kv-inner">
            <Swiper
              className="kv-swiper"
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.kv-swiper .swiper-button-prev',
                nextEl: '.kv-swiper .swiper-button-next',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              onSwiper={setSwiperInstance}
              onSlideChange={resetTimer}
            >
              {kvSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img src={slide.img} alt="" />
                  <div className="text-mask">
                    <p className="dec">
                      {slide.text.split('\n').map((line, li) => (
                        <span key={li}>{line}{li < slide.text.split('\n').length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <button type="button" className="swiper-button-prev" aria-label="이전 슬라이드" />
              <button type="button" className="swiper-button-next" aria-label="다음 슬라이드" />
              <div className="swiper-timer">
                <span className="swiper-timer-bar" ref={timerBarRef} />
              </div>
              <a
                href="https://b2b.chinhung.co.kr/"
                className="fixed-banner"
                target="_blank"
                rel="noopener noreferrer"
              >
                진흥기업 전자조달 시스템
              </a>
              <a
                href="https://harrington.chinhung.co.kr/"
                className="fixed-banner2"
                target="_blank"
                rel="noopener noreferrer"
              >
                해링턴 플레이스 홈페이지
              </a>
            </Swiper>

            <div className="card-wrap">
              <div className="left-card">
                <div className="cardsec01">
                  <img src={cardImages[0]} alt="" />
                </div>
                <div className="cardsec02">
                  <img src={cardImages[1]} alt="" />
                </div>
              </div>
              <div className="right-card">
                <div className="cardsec03">
                  <img src={cardImages[2]} alt="" />
                </div>
                <div className="cardsec04">
                  <img src={cardImages[3]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
