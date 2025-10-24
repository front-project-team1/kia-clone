# KIA AICC 챗봇 서비스

Next.js 학습을 위한 Kia 공식 홈페이지 클론 프로젝트입니다.

## 🌐 배포

**Live Demo**: [https://kia-clone-mf6b.vercel.app/](https://kia-clone-mf6b.vercel.app/)

## 📝 프로젝트 소개

KIA AICC 챗봇 서비스를 구현한 Next.js 프로젝트입니다. Kia 자동차의 공식 웹사이트를 클론 코딩하여 Next.js의 주요 기능들을 학습하고 실습하는 프로젝트입니다.

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

- **Header**:
  - 반응형 네비게이션 (데스크탑/모바일)
  - 모바일: 햄버거 메뉴 + 사이드바
  - 데스크탑: 풀 네비게이션 바
  - 로그인/사용자 정보 표시
- **Footer**: 다단 푸터 레이아웃
- **AI Assistant**:
  - 실시간 채팅 인터페이스
  - 키워드 기반 자동 응답 시스템
  - 차량 추천 및 가격 정보 제공
  - 타이핑 애니메이션 및 실시간 시간 표시
  - Enter 키 메시지 전송 지원

### 인증 기능

- **로그인 페이지**: 더미 데이터 기반 로그인 시스템
- **사용자 상태 관리**: Context API를 사용한 전역 상태 관리
- **로그인 후 헤더**: 사용자 이름 표시 및 드롭다운 메뉴 (마이페이지, 내 차량, 로그아웃)
- **LocalStorage**: 로그인 상태 유지

#### 테스트 계정

```
이메일: test@kia.com
비밀번호: 1234

이메일: user@kia.com
비밀번호: password
```

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
│   │   ├── layout.js          # 루트 레이아웃 (공통)
│   │   ├── globals.css        # 글로벌 스타일
│   │   ├── (main)/            # Route Group: Header/Footer 있는 페이지
│   │   │   ├── layout.js      # Header + Footer 레이아웃
│   │   │   ├── page.js        # 메인 페이지 (/)
│   │   │   ├── kia360/
│   │   │   │   └── page.js
│   │   │   └── service/
│   │   │       └── customer-center/
│   │   │           └── page.js
│   │   └── (auth)/            # Route Group: 인증 페이지
│   │       ├── layout.js      # 레이아웃 없음
│   │       └── login/
│   │           └── page.js    # 로그인 페이지 (/login)
│   ├── components/
│   │   ├── common/            # 공통 컴포넌트
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── AIAssistant.js
│   │   ├── main/              # 메인 페이지 컴포넌트
│   │   │   ├── HeroSection.js
│   │   │   ├── BestKiaSection.js
│   │   │   ├── QuickAccessCardsSection.js
│   │   │   └── NewsSection.js
│   │   └── providers/         # Context Providers
│   │       └── AuthProviderWrapper.js
│   └── contexts/
│       └── AuthContext.js     # 인증 Context
└── public/
    └── images/                # 이미지 파일
```

## 🎨 주요 기능 상세

### Route Groups Layout

- Next.js Route Groups를 사용한 레이아웃 분리
- `(main)` 그룹: Header/Footer가 있는 일반 페이지
- `(auth)` 그룹: Header/Footer가 없는 인증 페이지
- URL 경로에는 영향을 주지 않고 레이아웃만 다르게 적용

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
- **Route Groups**: 레이아웃 분리를 위한 폴더 구조 (`(main)`, `(auth)`)
- 컴포넌트 기반 아키텍처
- Tailwind CSS를 활용한 스타일링
- 반응형 웹 디자인
- Next.js Image 최적화
- Context API를 사용한 전역 상태 관리
- Client/Server Component 구분
- LocalStorage를 활용한 데이터 영속성
- 실시간 채팅 UI 구현
- 키워드 기반 자동 응답 시스템
- 타이핑 애니메이션 및 상태 관리

## 🚀 배포 (Deployment)

이 프로젝트는 Vercel에 배포되어 있습니다.

- **배포 플랫폼**: Vercel
- **자동 배포**: GitHub의 main 브랜치에 push 시 자동 배포
- **프리뷰 배포**: Pull Request 생성 시 자동으로 프리뷰 URL 생성

### 직접 배포하기

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/kia-clone)

## 🔗 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Kia Official Website](https://www.kia.com)

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.
