export const navItems = [
  {
    label: '회사 소개',
    href: '/about',
    children: [],
  },
  {
    label: '서비스 소개',
    href: '/videos/interpretation',
    children: [
      { label: '영어 통역', href: '/videos/interpretation' },
      { label: '영어 번역', href: '/videos/translation' },
      { label: '리에종', href: '/videos/liaison' },
      { label: '영어 웹페이지 제작', href: '/videos/web' },
    ],
  },
  {
    label: '문의하기',
    href: '/contact',
    children: [],
  },
]
