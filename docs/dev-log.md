# Trans Pro 개발일지

> 리포지토리: https://github.com/yoonrileychoi/rest03
> 배포 URL: https://yoonrileychoi.github.io/rest03/
> 개발 기간: 2026-06-08 ~

---

## 세션 1 — 2026-06-08: React 회사 사이트 초기 구축 (진흥기업 템플릿)

### 프로젝트 개요

진흥기업(CHINHUNG INTERNATIONAL INC.) 공식 홈페이지의 HTML/CSS/JS 소스를 참고하여 **React 18 + Vite 5** 기반 회사 사이트 템플릿으로 재구현.

### 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 프레임워크 | React 18 |
| 번들러 | Vite 5 |
| 라우팅 | React Router DOM v6 |
| 슬라이더 | Swiper 11 |
| 애니메이션 | GSAP 3 |
| 스타일 | Vanilla CSS (CSS 변수) |
| 폰트 | Pretendard, Outfit |
| 배포 | GitHub Actions |

### 구현 내역

- **Header**: PC 드롭다운 메가메뉴 + 모바일 햄버거 아코디언
- **Footer**: 회사 정보, 패밀리사이트 셀렉트박스
- **MainPopup**: localStorage 기반 "오늘하루 그만보기"
- **MainIntro**: 풀스크린 KV 슬라이더 + 사이드 카드 2×2
- **BusinessSection**: Swiper 사업소개 슬라이더 (5개 분야)
- **HousingPage**: 탭 필터 + 프로젝트 팝업 (Swiper 이미지 슬라이더)
- GitHub Actions 자동 배포 워크플로 (`deploy.yml`)
- `package.json`, `package-lock.json`, `index.html` 누락 파일 추가

---

## 세션 2 — 2026-06-09 (전반): LINGUA PRO → Trans Pro 전면 리빌드

### 배경 및 목표

진흥기업 건설사 템플릿을 **영어 전문 통번역 & 웹페이지 제작 서비스 회사** 사이트로 전면 재구축.

- 브랜드명: LINGUA PRO → **Trans Pro** (리브랜딩)
- 슬로건: 영어 전문 통번역 · 리에종 · 영문 웹페이지 제작
- 5색 브랜드 팔레트 + 다크모드/라이트모드 토글
- 유튜브 동영상 라이브러리 페이지
- 모바일 최적화

### 기술 스택 변경

| 구분 | 이전 (진흥기업) | 이후 (Trans Pro) |
|---|---|---|
| 슬라이더 | Swiper 11 | 제거 |
| 애니메이션 | GSAP 3 | CSS transition + requestAnimationFrame |
| 테마 | 단일 (라이트) | 다크/라이트 토글 (ThemeContext + CSS 변수) |
| 폰트 | Pretendard, Outfit | Pretendard (전체 통일) + Google Sans |
| 아이콘 | 없음 | Font Awesome 6 (CDN) |
| 라우터 | BrowserRouter | HashRouter (GitHub Pages SPA 호환) |
| 배포 | GitHub Actions 자동 | gh-pages 수동 (`npm run deploy`) |

### 삭제된 파일 (구 건설사 콘텐츠)

```
src/sections/MainIntro.jsx
src/sections/Founding.jsx
src/sections/BusinessSection.jsx
src/sections/Sustainable.jsx
src/sections/Discover.jsx
src/sections/Relation.jsx
src/pages/business/HousingPage.jsx
src/components/MainPopup.jsx
src/components/PageHead.jsx
src/sections/PaletteSection.jsx
src/styles/MainIntro.css ~ Relation.css 외 다수
.github/workflows/deploy.yml
```

### 새로 구현한 파일

#### 컨텍스트
- `src/context/ThemeContext.jsx` — 다크/라이트 모드 상태 관리, 6색 팔레트 accent 시스템, localStorage 유지

#### 데이터
- `src/data/navigation.js` — 네비게이션 항목 정의
- `src/data/videos.js` — 4개 카테고리, 실제 YouTube 영상 ID 수록

#### 컴포넌트
- `src/components/Header.jsx` — 팔레트 색상 선택, 다크모드 토글, 모바일 햄버거 메뉴
- `src/components/Footer.jsx` — 브랜드 정보, 저작권 표기

#### 페이지
- `src/pages/HomePage.jsx` — 섹션 조합 홈페이지
- `src/pages/VideosPage.jsx` — 카테고리 탭 + 2×3 그리드 + 페이지네이션
- `src/pages/ContactPage.jsx` — 2컬럼 레이아웃 문의 폼
- `src/pages/AboutPage.jsx` — 회사 소개, 핵심 가치, 연혁 타임라인

#### 섹션
- `src/sections/HeroSection.jsx` — fade-in 타이틀, 통계 수치 (500+/100+/98%)
- `src/sections/ServicesSection.jsx` — 3카드 서비스 그리드 (통역/번역/웹)
- `src/sections/CTASection.jsx` — CTA 밴드

### 라우팅 구조

```
/                     → 홈
/about                → 회사 소개
/videos               → /videos/interpretation 리다이렉트
/videos/:category     → 서비스 소개 (interpretation / translation / liaison / web)
/contact              → 문의하기
*                     → / 리다이렉트
```

### 동영상 페이지 — 수록 영상 (24개)

**영어 통역** (6개)
- 통번역대학원 졸업 통역사의 영어공부법
- 국제회의 통역사들이 알려주는 영어 공부 TIP
- 32년 경력 베테랑 통역사의 영어 비결
- 국내파인데 해외파보다 영어 잘하는 비결
- 이제 화상회의 통역이 필요없을 듯 합니다
- 국제회의 통역사가 알려주는 리얼 영어 ep.1

**영어 번역** (6개)
- 통번역사는 어떤 책으로 공부할까?
- AI가 실시간 강의 번역! (KBC뉴스)
- AI가 통화 중 실시간 통역 (뉴스A)
- 컨퍼런스 콜·화상회의 필수 영어 표현
- 이제 영어 못해도 AI가 번역해줍니다 — OpenAI Whisper
- 음성 번역은 물론 입모양까지 바꿔주는 HeyGen AI

**리에종** (4개)
- MICE, 관광산업 발전의 키워드
- 스마트폰으로 쉽게 외국어 통역하는 방법
- 오프라인 행사 동시통역 중계 샘플영상
- 실시간 통역·번역 소오름 돋는 구글 번역기

**영어 웹페이지 제작** (6개)
- 웹사이트 7분만에 개발하고 실전 배포하기
- HTML·CSS·JavaScript 웹 개발 핵심 7시간 완성
- 한 시간만에 홈페이지 개발하기 입문
- 코딩 몰라도 9분안에 웹사이트 3가지 만들기
- AI가 코딩·디자인 자동으로 합니다
- 워드프레스 웹사이트 만들기 2026

### 버그 수정

| 커밋 | 수정 내용 |
|---|---|
| `BrowserRouter basename` 추가 | `/rest03` 경로 이탈 방지 |
| `HashRouter`로 전환 | GitHub Pages 새로고침 404 문제 근본 해결 |
| favicon 인라인화 | 404 오류 제거, SPA 404.html 폴백 추가 |
| 컬러 팔레트 테두리 제거 | 호버/포커스 시 불필요한 outline 제거 |
| 모든 버튼/카드 링크 교체 | 실제 라우트로 연결 |

### OG 메타태그 / 아이콘 설정 (`index.html`)

- `og:title`, `og:description`, `og:image` 추가
- Font Awesome 6 CDN 연결
- Google Sans 폰트 연결

---

## 세션 3 — 2026-06-09 (후반): 기업형 UI 전면 리디자인

### 배경 및 목표

롯데케미칼 웹사이트를 레퍼런스로 파스텔 톤 제거, 뉴트럴 그레이 기반 기업형 디자인으로 전면 개편.

---

### 1. 색상 시스템 전면 개편

**파일**: `src/styles/index.css`, `src/context/ThemeContext.jsx`

라이트 모드 CSS 변수에서 핑크/퍼플 틴트 완전 제거, 뉴트럴 그레이로 통일.

```css
--bg: #FFFFFF
--bg-soft: #F5F6F7
--bg-card: #F0F2F5
--surface: #FFFFFF
--text: #1A1A2E
--text-sub: #4A5568
--text-muted: #8896A5
--border: #DDE1E7
--shadow: rgba(0, 0, 0, 0.08)
```

컬러 팔레트 업데이트 (Warm Ivory 제거 → Corporate Red, Dark Slate 추가):

| 이름 | 코드 |
|---|---|
| Baby Blue | `#89C4E1` |
| Baby Pink | `#F4A7B9` |
| Deep Navy | `#1D3557` |
| Soft Mint | `#A8D8C8` |
| Corporate Red | `#E60012` |
| Dark Slate | `#1C1C2E` |

---

### 2. 히어로 섹션 정리

**파일**: `src/sections/HeroSection.jsx`, `src/styles/HeroSection.css`

- 사다리꼴 반분할 배경 패널 제거
- Blob 애니메이션 요소 제거
- "Scroll" 힌트 텍스트 제거
- 단일 배경색 (`var(--bg-soft)`) + border-bottom으로 통일

---

### 3. 헤더 네비게이션 구조 개편

**파일**: `src/components/Header.jsx`, `src/styles/Header.css`, `src/data/navigation.js`

- 네비 호버 스타일: 풀 배경 하이라이트 → 하단 언더라인 방식
- 드롭다운 메뉴: 전체 너비 바 → 해당 버튼 아래 중앙 정렬 `position: absolute` 팝업
- "문의하기" 헤더 CTA 버튼 제거
- navigation.js에서 문의하기 nav 항목 제거
- 검색 돋보기 아이콘 추가 (클릭 시 슬라이드 검색창 표시, Esc로 닫기)

---

### 4. CTA 섹션 다크 테마 적용

**파일**: `src/styles/CTASection.css`

- 배경: 라이트 그레이 → `#1A1A2E` 다크
- 텍스트: 흰색 / 반투명 흰색 적용
- 버튼: Primary는 흰 배경에 다크 텍스트, Outline은 반투명 흰 테두리

---

### 5. 서비스 카드 상단 경계선 원색 교체

**파일**: `src/styles/ServicesSection.css`

`::before` 수도 요소 방식 → `border-top` 직접 지정 방식으로 변경 (overflow: hidden에 영향받지 않도록).

| 카드 | 기존 (파스텔) | 변경 후 (원색) |
|---|---|---|
| 영어 통역 (blue) | 파스텔 블루 | `#1A6FA4` |
| 리에종 (pink) | 파스텔 핑크 | `#C0392B` |
| 웹 제작 (mint) | 파스텔 민트 | `#1A8A6E` |

---

### 6. 회사 소개 페이지 수정

**파일**: `src/styles/AboutPage.css`

- 히어로 배경: 서비스 소개 페이지와 동일한 뉴트럴 그라데이션으로 통일
- 컨텐츠 영역 패딩 수정: `padding: 80px 0` → `padding: 80px 40px` (좌우 여백 확보)
- 연혁 항목 다중 bullet 지원 (`history-desc-list`)
- 통계 수치 업데이트: 설립연도 2016 / 누적 프로젝트 1,000+ / 고객사 100+ / 재계약률 95%

---

### 7. 검색 기능 신규 추가

**신규 파일**: `src/pages/SearchPage.jsx`, `src/styles/SearchPage.css`
**수정 파일**: `src/App.jsx` (`/search` 라우트 추가)

- 헤더 돋보기 버튼 → 슬라이드 애니메이션 검색창 (Esc 닫기)
- 키워드 부분 일치 검색 (title / desc / category 3개 필드)
- 검색 결과 없을 시 안내 메시지 표시
- 검색 데이터: 회사 소개, 서비스 4종, 문의, 통역/번역/MICE/AI 관련 총 10개 항목

---

---

## 세션 4 — 2026-06-09 (야간): 검색 기능 보완 및 네비게이션 오류 수정

### 1. 검색 결과 페이지 미작동 버그 수정

**원인**: `navigate('/search?q=...')` 호출은 했으나 `/search` 라우트가 존재하지 않았음.

**수정 내용**:
- `src/pages/SearchPage.jsx` 신규 생성
- `src/styles/SearchPage.css` 신규 생성
- `src/App.jsx`에 `<Route path="/search" element={<SearchPage />} />` 추가

**검색 동작 방식**:
- 헤더 돋보기 클릭 → 슬라이드 검색창 표시 (Esc로 닫기)
- 검색어 입력 후 Enter 또는 돋보기 버튼 → `#/search?q=검색어` 이동
- `useLocation()`으로 URL 쿼리 파라미터 읽어 `searchData` 배열에서 부분 일치 필터링
- title / desc / category 3개 필드 대상 검색 (대소문자 무시)
- 결과 없을 시 안내 메시지 표시

**검색 데이터 항목** (10개): 회사 소개, 영어 통역, 영어 번역, 리에종, 영어 웹페이지 제작, 문의하기, 통역사 영어 공부법, MICE 행사 리에종, AI 번역 서비스, 영문 홈페이지

---

### 2. 헤더 문의하기 버튼 처리 오류 수정

**요청**: 헤더 우측 라이트모드 버튼 옆의 "문의하기" CTA 버튼만 제거  
**실수**: 네비게이션 메뉴의 "문의하기" 항목까지 함께 삭제됨  
**수정**: `src/data/navigation.js`에 문의하기 nav 항목 복원

**현재 헤더 구성**:
- 좌측: 로고 (TRANS PRO)
- 중앙: 네비 메뉴 (회사 소개 / 서비스 소개 / 문의하기)
- 우측: 컬러 팔레트 · 다크모드 토글 · 검색 돋보기

---

## 배포 정보

- **플랫폼**: GitHub Pages
- **라우터**: HashRouter (SPA 새로고침 404 방지)
- **404 폴백**: `public/404.html` (HashRouter redirect)
- **빌드 도구**: Vite 5
- **배포 브랜치**: `gh-pages`
- **개발 브랜치**: `claude/pensive-pascal-qetjw4`

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
rm -rf node_modules/.cache/gh-pages
npx gh-pages -d dist -f
```
