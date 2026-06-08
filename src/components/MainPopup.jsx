import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/MainPopup.css'

const STORAGE_KEY = 'popup-no-show'

// 팝업 이미지를 /images/popup/ 폴더에 추가하면 자동으로 활성화됩니다.
const popupSlides = [
  // { img: '/images/popup/popup01.jpg', href: '#' },
]

export default function MainPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (popupSlides.length === 0) return
    const today = new Date().toDateString()
    if (localStorage.getItem(STORAGE_KEY) !== today) setVisible(true)
  }, [])

  if (!visible) return null

  const close = () => setVisible(false)

  const noMoreToday = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toDateString())
    setVisible(false)
  }

  return (
    <div className="popup-wrap" onClick={close}>
      <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="pop-close" onClick={close}>닫기</button>
        <Swiper
          className="pop-swiper"
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={popupSlides.length > 1}
        >
          {popupSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <a href={slide.href}>
                <img src={slide.img} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" className="nomoretoday" onClick={noMoreToday}>
          오늘하루 그만보기
        </button>
      </div>
    </div>
  )
}
