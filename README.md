# Kia.com 홈페이지 클론 코딩

Next.js 학습을 위한 Kia 공식 홈페이지 클론 프로젝트입니다.

## 📝 프로젝트 소개

Kia 자동차의 공식 웹사이트를 클론 코딩하여 Next.js의 주요 기능들을 학습하고 실습하는 프로젝트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15
- **Language**: JavaScript
- **Styling**: Tailwind CSS, module CSS
- **Image Optimization**: Next.js Image Component

## ✨ 구현된 기능

### 메인 페이지

- **Hero Section**: 풀스크린 히어로 섹션 (슬라이더 도트, AI 버튼)
- **Best Kia Section**: 인기 차량 카드 3개 (상세 스펙, 가격, CTA 버튼)
- **Quick Access Cards**: 4개의 호버 인터랙션 카드 (견적 내기, 시승 신청, 판매 네트워크, 이 달의 구매 혜택)
- **News Section**: 피처드 뉴스 카드 및 뉴스 리스트

### 공통 컴포넌트

- **Header**: 네비게이션 메뉴, 검색, 언어 선택
- **Footer**: 다단 푸터 레이아웃

## 🛠️ 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
kia-clone/
├── src/
│   ├── app/
│   │   ├── layout.js          # 루트 레이아웃
│   │   ├── page.js            # 메인 페이지
│   │   └── globals.css        # 글로벌 스타일
│   └── components/
│       ├── common/            # 공통 컴포넌트
│       │   ├── Header.js
│       │   └── Footer.js
│       └── main/              # 메인 페이지 컴포넌트
│           ├── HeroSection.js
│           ├── BestKiaSection.js
│           ├── QuickAccessCardsSection.js
│           └── NewsSection.js
└── public/
    └── images/                # 이미지 파일
```

## 🎨 주요 기능 상세

### Responsive Design

- 모바일, 태블릿, 데스크탑 반응형 레이아웃
- Tailwind CSS의 유틸리티 클래스 활용

### Image Optimization

- Next.js Image 컴포넌트를 사용한 이미지 최적화
- AVIF 포맷 지원

### Interactive UI

- Hover 효과가 있는 인터랙티브 카드
- 부드러운 트랜지션 애니메이션

## 📚 학습 내용

- Next.js App Router
- 컴포넌트 기반 아키텍처
- Tailwind CSS를 활용한 스타일링
- 반응형 웹 디자인
- Next.js Image 최적화

## 🔗 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Kia Official Website](https://www.kia.com)

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.
