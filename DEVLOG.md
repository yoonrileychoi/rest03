# 개발일지 — 진흥기업 회사 사이트 React 템플릿

> 리포지토리: https://github.com/yoonrileychoi/rest03  
> 배포 URL: https://yoonrileychoi.github.io/rest03/  
> 개발 기간: 2026-06-08  

---

## 1. 프로젝트 개요

진흥기업(CHINHUNG INTERNATIONAL INC.) 공식 홈페이지의 HTML/CSS/JS 소스를 참고하여 **React + Vite** 기반 회사 사이트 템플릿으로 재구현한 프로젝트입니다.  
이미지 파일은 `public/images/` 폴더에 별도 추가하면 즉시 적용되도록 설계하였습니다.

---

## 2. 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 프레임워크 | React 18 |
| 번들러 | Vite 5 |
| 라우팅 | React Router DOM v6 |
| 슬라이더 | Swiper 11 |
| 애니메이션 | GSAP 3 (IntersectionObserver 병행) |
| 스타일 | Vanilla CSS (CSS 변수 기반 디자인 시스템) |
| 폰트 | Pretendard, Outfit (Google Fonts) |
| 배포 | GitHub Pages + GitHub Actions |

---

## 3. 프로젝트 구조

```
rest03/
├── public/
│   └── images/
│       ├── common/        # 로고, 파비콘
│       ├── main/          # KV 슬라이더, 사이드 카드, 사업소개 이미지
│       ├── pagehead/      # 서브페이지 헤더 이미지
│       ├── business/      # 사업소개 프로젝트 썸네일
│       └── popup/         # 메인 팝업 이미지 (추가 시 자동 활성화)
├── src/
│   ├── components/        # 공통 컴포넌트
│   │   ├── Header.jsx     # PC 메가메뉴 + 모바일 햄버거 메뉴
│   │   ├── Footer.jsx     # 하단 정보, 패밀리사이트 셀렉트
│   │   ├── PageHead.jsx   # 서브페이지 상단 (브레드크럼 + 탭 네비)
│   │   └── MainPopup.jsx  # 메인 팝업 (오늘하루 그만보기)
│   ├── sections/          # 메인 페이지 섹션
│   │   ├── MainIntro.jsx  # KV 슬라이더 + 사이드 카드 4분할
│   │   ├── Founding.jsx   # 창립 소개 (스크롤 페이드인)
│   │   ├── BusinessSection.jsx  # 사업소개 슬라이더
│   │   ├── Sustainable.jsx      # 지속가능경영
│   │   ├── Discover.jsx         # 뉴스/공지사항
│   │   └── Relation.jsx         # 투자정보
│   ├── pages/
│   │   ├── HomePage.jsx          # 메인 페이지 (전 섹션 조합)
│   │   └── business/
│   │       └── HousingPage.jsx   # 사업소개 서브페이지 (탭 + 팝업)
│   ├── data/
│   │   └── navigation.js         # 네비게이션 메뉴 데이터, 패밀리사이트
│   ├── styles/                   # 컴포넌트별 CSS 파일
│   └── App.jsx                   # React Router 라우팅 설정
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 자동 배포 워크플로
├── index.html
├── vite.config.js
└── package.json
```

---

## 4. 구현 내역

### 4-1. 공통 컴포넌트

#### Header
- **PC**: 호버 시 드롭다운 메가메뉴 (6개 대메뉴, 최대 5개 서브메뉴)
- **모바일**: 햄버거 버튼 → 전체화면 슬라이드 메뉴, 아코디언 서브메뉴
- 메인 페이지에서 `isDark={true}` prop으로 투명 + 흰색 텍스트 전환
- 외부 링크(`outlink`) 자동 새 탭 처리

#### Footer
- 회사 소개 문구, 주소(서울지사/본사), 패밀리사이트 셀렉트박스
- 맨위로 가기 버튼 (smooth scroll)
- 패밀리사이트 선택 시 새 탭으로 이동 후 셀렉트 초기화

#### PageHead
- 페이지 제목, 브레드크럼(홈 > 대메뉴)
- 서브 탭 네비게이션, `useLocation`으로 현재 경로 자동 활성화

#### MainPopup
- localStorage 기반 **오늘하루 그만보기** 기능
- Swiper로 복수 슬라이드 지원 (Autoplay + Pagination)
- `public/images/popup/popup01.jpg` 추가 시 자동 활성화 (빈 배열이면 팝업 미출력)
- 팝업 외부 클릭 시 닫힘

---

### 4-2. 메인 페이지 섹션

#### MainIntro (KV + 사이드 카드)
- 풀스크린 KV 슬라이더: Swiper Autoplay(5초) + 타이머 프로그레스 바
- 슬라이드 전환 시 텍스트 페이드인 애니메이션 (CSS transition)
- 우측 사이드 카드 2×2 배치 (hover 줌 효과)
- 고정 배너 2개 (전자조달 시스템 / 해링턴플레이스 링크)
- 반응형: 1024px 이하에서 사이드 카드 숨김, 모바일 높이 70vh

#### Founding (창립 소개)
- IntersectionObserver로 뷰포트 진입 시 순차 페이드인 (span 3단계)

#### BusinessSection (사업소개 슬라이더)
- Swiper Navigation, 반응형 slidesPerView (1.2 → 2.5 → 3.5)
- 5개 사업 분야: 주택/건축/토목/플랜트/해외사업
- 각 슬라이드 클릭 시 해당 서브페이지 이동

#### Sustainable / Relation
- 지속가능경영, 투자정보 섹션 (텍스트 + arrow-btn 링크)

#### Discover (뉴스)
- 공지사항 목록 5건, NEW 뱃지, 전체보기 링크

---

### 4-3. 사업소개 서브페이지 (HousingPage)

- **탭 필터**: 전체 / 수도권 / 지방 (region 기반 필터링)
- **썸네일 보드**: 3열 그리드, hover 시 이미지 줌 + 그림자
- **프로젝트 팝업**:
  - 좌측: 프로젝트 정보 (발주처/공사금액/공사기간/공사위치)
  - 우측: Swiper (복수 이미지 슬라이드, Pagination + Navigation)
  - 하단: 이전보기 / 현재(n/전체) / 다음보기 페이지네이션
- 모든 사업 라우트(`/business/*`)에서 공통 사용, `useLocation`으로 탭 자동 활성화

---

## 5. 라우팅 구조

```
/                       → 메인 페이지
/business/housing       → 사업소개 - 주택사업
/business/building      → 사업소개 - 건축사업
/business/civil         → 사업소개 - 토목사업
/business/plant         → 사업소개 - 플랜트사업
/business/global        → 사업소개 - 해외사업
*                       → 메인 페이지로 리다이렉트
```

---

## 6. 디자인 시스템 (CSS 변수)

```css
--color-black:      #111111
--color-dark:       #1a1a1a
--color-gray-deep:  #333333
--color-gray:       #666666
--color-gray-light: #999999
--color-border:     #dddddd
--color-bg:         #f5f5f5
--color-white:      #ffffff
--color-accent:     #c8a96e   /* 골드 포인트 컬러 */

--font-kr: Pretendard, Noto Sans KR
--font-en: Outfit, Helvetica Neue
--header-h: 80px
--transition: 0.3s ease
```

---

## 7. 이미지 파일 목록 (필요 파일)

| 경로 | 파일명 | 설명 |
|---|---|---|
| /images/main/ | mainkv01.jpg | KV 슬라이더 1번 (1920×1080 이상) |
| /images/main/ | mainkv02.jpg | KV 슬라이더 2번 |
| /images/main/ | maincard01~04.jpg | 사이드 카드 4장 (400×300 이상) |
| /images/main/ | business-view02~06.jpg | 사업소개 슬라이더 5장 (600×800) |
| /images/common/ | chinhung-logo.png | 푸터 로고 |
| /images/common/ | hyosung_favicon.svg | 파비콘 |
| /images/pagehead/ | housing-head.jpg | 사업소개 서브 헤더 (1920×600) |
| /images/business/ | housing01~03.jpg | 주택사업 프로젝트 썸네일 |
| /images/popup/ | popup01.jpg | 메인 팝업 (선택, 480×480) |

---

## 8. 로컬 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 9. 배포

GitHub Actions로 `main` 브랜치에 push 시 자동 빌드 & GitHub Pages 배포.

```
push to main
    ↓
.github/workflows/deploy.yml 실행
    ↓
npm ci → npm run build → dist/ 생성
    ↓
GitHub Pages 배포
    ↓
https://yoonrileychoi.github.io/rest03/
```

---

## 10. 향후 작업 예정

- [ ] 회사소개 페이지 (CEO 인사말, 비전/가치, 연혁, 브랜드 소개)
- [ ] 지속가능경영 페이지 (윤리/안전/품질경영, 사회공헌)
- [ ] 투자정보 페이지 (기업지배구조, 재무정보, 공시, 공고, IR 자료실)
- [ ] 고객센터 페이지 (공지사항 목록/상세)
- [ ] 실제 이미지 파일 적용
- [ ] API 연동 (공지사항, 프로젝트 목록 동적 로딩)
