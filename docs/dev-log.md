# Trans Pro 개발일지

---

## 2026-06-09 — 대규모 UI 리디자인 및 기능 추가

### 개요
롯데케미칼 웹사이트를 레퍼런스로 한 깔끔한 기업형 디자인으로 전면 개편. 파스텔/핑크 톤 제거, 뉴트럴 그레이 기반 색상 시스템 적용, 네비게이션 구조 개선, 검색 기능 신규 추가.

---

### 변경 내역

#### 1. 색상 시스템 전면 개편 (`src/styles/index.css`, `src/context/ThemeContext.jsx`)
- 라이트 모드 CSS 변수에서 핑크/퍼플 틴트 완전 제거
- 뉴트럴 그레이 배경 계열로 통일: `--bg: #FFFFFF`, `--bg-soft: #F5F6F7`, `--bg-card: #F0F2F5`
- 텍스트 컬러 정비: `--text: #1A1A2E`, `--text-sub: #4A5568`, `--text-muted: #8896A5`
- 컬러 팔레트 업데이트: Warm Ivory 제거 → Corporate Red(`#E60012`), Dark Slate(`#1C1C2E`) 추가
  ```
  Baby Blue    #89C4E1
  Baby Pink    #F4A7B9
  Deep Navy    #1D3557
  Soft Mint    #A8D8C8
  Corporate Red #E60012
  Dark Slate   #1C1C2E
  ```

#### 2. 히어로 섹션 정리 (`src/sections/HeroSection.jsx`, `src/styles/HeroSection.css`)
- 사다리꼴 반분할 배경 패널 제거
- Blob 애니메이션 제거
- "Scroll" 힌트 텍스트 제거
- 단일 배경색(`var(--bg-soft)`)으로 통일, 깔끔한 기업형 레이아웃 적용

#### 3. 헤더 네비게이션 개편 (`src/components/Header.jsx`, `src/styles/Header.css`)
- 네비 호버 스타일: 풀 배경 하이라이트 → 하단 언더라인 방식으로 변경
- 드롭다운 메뉴: 전체 너비 바 → 해당 버튼 아래 중앙 정렬 팝업으로 변경
- "문의하기" 버튼 제거 → 검색 돋보기 아이콘으로 교체
- `src/data/navigation.js`에서 문의하기 nav 항목 제거

#### 4. CTA 섹션 (`src/styles/CTASection.css`)
- 기존 라이트 그레이 배경 → 다크(`#1A1A2E`) 배경으로 변경
- 텍스트 흰색/반투명 흰색 적용, 버튼 스타일 다크 테마에 맞게 조정

#### 5. 서비스 카드 상단 경계선 (`src/styles/ServicesSection.css`)
- `::before` 수도 요소 방식 → `border-top` 직접 지정 방식으로 변경
- 파스텔 컬러 → 원색 계열로 교체:
  - blue: `#1A6FA4`
  - pink(red): `#C0392B`
  - mint: `#1A8A6E`

#### 6. 회사 소개 페이지 (`src/styles/AboutPage.css`)
- 히어로 배경을 서비스 소개 페이지와 동일한 뉴트럴 그라데이션으로 통일
- 컨텐츠 영역 좌우 패딩 수정 (`padding: 80px 40px`)

#### 7. 검색 기능 신규 추가
- 헤더 돋보기 버튼 클릭 시 슬라이드 검색창 표시 (Esc로 닫기)
- `src/pages/SearchPage.jsx` 신규 생성 — 키워드 부분 일치 검색
- `src/styles/SearchPage.css` 신규 생성
- `src/App.jsx`에 `/search` 라우트 추가
- 검색 데이터: 회사 소개, 서비스 4종, 문의하기, 통역/번역/MICE/AI 관련 항목 총 10건

---

### 배포 정보
- **플랫폼**: GitHub Pages
- **라우터**: HashRouter (GitHub Pages SPA 호환)
- **빌드 도구**: Vite 5
- **배포 명령**: `npx gh-pages -d dist -f`
- **브랜치**: `claude/pensive-pascal-qetjw4`

---
