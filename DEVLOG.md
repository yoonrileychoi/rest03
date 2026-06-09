# 개발일지 — LINGUA PRO 회사 사이트

> 리포지토리: https://github.com/yoonrileychoi/rest03
> 배포 URL: https://yoonrileychoi.github.io/rest03/
> 개발 기간: 2026-06-08 ~

---

## 세션 2 — 2026-06-09: LINGUA PRO 전면 리빌드

### 배경 및 목표

기존 진흥기업 건설사 사이트 템플릿을 **영어 전문 통번역 & 영어 웹페이지 제작 서비스 회사** 사이트로 전면 재구축.

- 브랜드명: **LINGUA PRO**
- 슬로건: 영어 전문 통번역 · 영어 웹페이지 제작
- 5색 브랜드 팔레트 + 다크모드/라이트모드 토글
- 유튜브 동영상 라이브러리 페이지
- 모바일 최적화

---

### 기술 스택 변경

| 구분 | 이전 (진흥기업) | 이후 (LINGUA PRO) |
|---|---|---|
| 슬라이더 | Swiper 11 | 제거 |
| 애니메이션 | GSAP 3 | CSS transition + requestAnimationFrame |
| 테마 | 단일 (라이트) | 다크/라이트 토글 (ThemeContext + CSS 변수) |
| 폰트 | Pretendard, Outfit | Playfair Display, Noto Sans KR, Outfit |
| 배포 | GitHub Actions 자동 | gh-pages 수동 (`npm run deploy`) |

---

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
src/styles/MainIntro.css ~ Relation.css 외 다수
.github/workflows/deploy.yml
```

---

### 새로 구현한 파일

#### 컨텍스트
- `src/context/ThemeContext.jsx` — 다크/라이트 모드 상태 관리, localStorage 유지

#### 데이터
- `src/data/navigation.js` — 4개 메뉴 (회사소개/서비스/동영상/문의하기)
- `src/data/videos.js` — 4개 카테고리, 실제 YouTube 영상 ID 18개

#### 페이지
- `src/pages/HomePage.jsx` — 섹션 조합 페이지
- `src/pages/VideosPage.jsx` — 카테고리 탭 + 2×3 그리드 + 페이지네이션
- `src/pages/ContactPage.jsx` — 2컬럼 문의 폼

#### 섹션
- `src/sections/HeroSection.jsx` — 애니메이션 블롭 배경, fade-in 타이틀, 통계
- `src/sections/ServicesSection.jsx` — 3카드 서비스 그리드
- `src/sections/PaletteSection.jsx` — 5색 브랜드 팔레트 쇼케이스
- `src/sections/CTASection.jsx` — 네이비 CTA 밴드

---

### 브랜드 컬러 팔레트 (5색)

| 이름 | 코드 | 역할 |
|---|---|---|
| Baby Blue | `#89C4E1` | Primary Accent |
| Baby Pink | `#F4A7B9` | Secondary Accent |
| Deep Navy | `#1D3557` | Point Color |
| Soft Mint | `#A8D8C8` | Auxiliary |
| Warm Ivory | `#FDF6F0` | Background |

---

### 다크모드 구현

- `ThemeContext`에서 `useState` + `useEffect`로 `document.documentElement`에 `data-theme` 속성 부여
- CSS 변수를 `:root`(라이트)와 `[data-theme="dark"]`(다크) 두 블록으로 분리
- 헤더에 태양/달 SVG 토글 버튼
- 선택값 `localStorage`에 저장 → 새로고침 후에도 유지

---

### 동영상 페이지 구조

- 4개 카테고리 탭: 영어 통번역 / 회의 통역 / MICE 영어 통역 / 영어 웹사이트 개발
- 유튜브 검색 키워드로 실제 영상 ID 수집하여 `videos.js`에 하드코딩
- 2열 그리드, 페이지당 6개 (`VIDEOS_PER_PAGE = 6`)
- iframe 비율 고정: `padding-top: 56.25%` (16:9)
- 카테고리 변경 시 페이지 번호 초기화

#### 수록 영상 목록

**영어 통번역** (6개)
- 통번역대학원 졸업 통역사의 영어공부법
- 통번역사는 어떤 책으로 공부할까?
- 국제회의 통역사들이 알려주는 영어 공부 TIP
- 32년 경력 베테랑 통역사의 영어 비결
- 국내파인데 해외파보다 영어 잘하는 비결
- AI가 실시간 강의 번역! (KBC뉴스)

**회의 통역** (4개)
- 이제 화상회의 통역이 필요없을 듯 합니다
- 국제회의 통역사가 알려주는 리얼 영어 ep.1
- AI가 통화 중 실시간 통역 (뉴스A)
- 컨퍼런스 콜·화상회의 필수 영어 표현

**MICE 영어 통역** (2개)
- MICE, 관광산업 발전의 키워드
- 스마트폰으로 쉽게 외국어 통역하는 방법

**영어 웹사이트 개발** (6개)
- 웹사이트 7분만에 개발하고 실전 배포하기
- HTML·CSS·JavaScript 웹 개발 핵심 7시간 완성
- 한 시간만에 홈페이지 개발하기 입문
- 코딩 몰라도 9분안에 웹사이트 3가지 만들기
- AI가 코딩·디자인 자동으로 합니다
- 워드프레스 웹사이트 만들기 2026

---

### 라우팅 구조

```
/                        → 홈 (HeroSection + ServicesSection + PaletteSection + CTASection)
/videos                  → /videos/translation 으로 리다이렉트
/videos/:category        → 동영상 페이지 (translation / conference / mice / web)
/contact                 → 문의하기
*                        → / 로 리다이렉트
```

---

### 배포 방법

```bash
# 로컬 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# GitHub Pages 배포 (빌드 + 배포 한번에)
npm run deploy
```

`npm run deploy` = `predeploy(npm run build)` → `gh-pages -d dist`

배포 URL: https://yoonrileychoi.github.io/rest03/

---

## 세션 1 — 2026-06-08: 진흥기업 React 템플릿 초기 구축

### 프로젝트 개요

진흥기업(CHINHUNG INTERNATIONAL INC.) 공식 홈페이지의 HTML/CSS/JS 소스를 참고하여 **React + Vite** 기반 회사 사이트 템플릿으로 재구현.

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

### 구현 내역 요약

- **Header**: PC 드롭다운 메가메뉴 + 모바일 햄버거 아코디언
- **Footer**: 회사 정보, 패밀리사이트 셀렉트박스
- **MainPopup**: localStorage 기반 오늘하루 그만보기
- **MainIntro**: 풀스크린 KV 슬라이더 + 사이드 카드 2×2
- **BusinessSection**: Swiper 사업소개 슬라이더 (5개 분야)
- **HousingPage**: 탭 필터 + 프로젝트 팝업 (Swiper 이미지 슬라이더)
- GitHub Actions 자동 배포 워크플로
