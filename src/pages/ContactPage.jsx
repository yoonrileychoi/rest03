import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/ContactPage.css'

export default function ContactPage() {
  return (
    <div className="all-wrap">
      <Header />
      <main className="contact-main">
        <div className="container contact-inner">
          <div className="contact-text">
            <span className="section-label">Contact Us</span>
            <h1>문의하기</h1>
            <p>영어 통번역, 리에종, 영문 웹사이트 제작에 대해 궁금한 점을 남겨주세요.<br />빠른 시간 내에 답변 드리겠습니다.</p>
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon"><i className="fa-regular fa-envelope" /></span>
                <div><strong>이메일</strong><span>yoonjoungchoi@transpro.kr</span></div>
              </div>
              <div className="info-item">
                <span className="info-icon"><i className="fa-solid fa-phone" /></span>
                <div><strong>전화</strong><span>010-0000-0000</span></div>
              </div>
              <div className="info-item">
                <span className="info-icon"><i className="fa-regular fa-clock" /></span>
                <div><strong>운영시간</strong><span>평일 09:00 - 18:00</span></div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>이름</label>
                <input type="text" placeholder="홍길동" />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input type="email" placeholder="email@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label>서비스 종류</label>
              <select>
                <option value="">선택해주세요</option>
                <option>영어 통역</option>
                <option>영어 번역</option>
                <option>리에종</option>
                <option>영어 웹페이지 제작</option>
                <option>기타</option>
              </select>
            </div>
            <div className="form-group">
              <label>문의 내용</label>
              <textarea rows="6" placeholder="문의하실 내용을 자세히 적어주세요..." />
            </div>
            <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center'}}>
              문의 보내기
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
