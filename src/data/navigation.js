export const navItems = [
  {
    label: '회사소개',
    href: '/about',
    children: [
      { label: 'CEO 인사말', href: '/about/greeting' },
      { label: '회사 비전', href: '/about/vision' },
      { label: '컬러 팔레트', href: '/about/palette' },
    ],
  },
  {
    label: '서비스',
    href: '/services',
    children: [
      { label: '영어 전문 통번역', href: '/services/translation' },
      { label: 'AI 활용 번역', href: '/services/ai-translation' },
      { label: '영어 웹페이지 제작', href: '/services/web' },
    ],
  },
  {
    label: '동영상',
    href: '/videos',
    children: [
      { label: '영어 통번역', href: '/videos/translation' },
      { label: '회의 통역', href: '/videos/conference' },
      { label: 'MICE 영어 통역', href: '/videos/mice' },
      { label: '영어 웹사이트 개발', href: '/videos/web' },
    ],
  },
  {
    label: '문의하기',
    href: '/contact',
    children: [],
  },
]
