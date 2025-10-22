import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/kia-bg.avif"
            alt="2026 Kia Ray"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end px-8 pb-24 max-w-[1920px] mx-auto">
          <div className="space-y-6">
            {/* Subtitle */}
            <p className="text-white text-md font-medium tracking-wide">
              다채로운 라이프를 선사하는 모빌리티
            </p>

            {/* Title */}
            <h1 className="text-white text-6xl md:text-7xl font-bold">
              The 2026 Ray
            </h1>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <button className="bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">
                자세히 보기
              </button>
              <button className="bg-[#05141F] text-white px-8 py-3 text-sm font-semibold hover:bg-[#0a1f2d] transition-colors border border-white/20">
                견적 내기
              </button>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(9)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === 2 ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* AI Button */}
        <button className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
          <span className="text-sm font-bold text-black">AI</span>
        </button>
      </section>

      {/* Best Kia Section */}
      <section className="py-20 px-8 max-w-[1920px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Best Kia
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-8 mb-16 border-b">
          <button className="px-6 py-4 text-base font-semibold border-b-2 border-black -mb-[1px]">
            최근 출시
          </button>
          <button className="px-6 py-4 text-base font-medium text-gray-500 hover:text-black transition-colors">
            편의 효율
          </button>
          <button className="px-6 py-4 text-base font-medium text-gray-500 hover:text-black transition-colors">
            적재공간
          </button>
          <button className="px-6 py-4 text-base font-medium text-gray-500 hover:text-black transition-colors">
            안전성
          </button>
        </div>

        {/* Car Cards Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {/* Card 1 - Carnival Hi-Limousine */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    The 2026 Carnival Hi-Limousine
                  </h3>
                  <p className="text-sm text-gray-600">
                    3.5 가솔린 | 7인승 시그니처 A/T
                  </p>
                </div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
                  TOP 1
                </span>
              </div>

              {/* Car Image Placeholder */}
              <div className="aspect-[16/9] rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/car1.avif"
                  alt="Car Image"
                  className="object-contain p-4"
                  fill
                />
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">출시일</span>
                  <span className="font-medium">2025-09-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배기량</span>
                  <span className="font-medium">3,470 cc</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">최고 출력</span>
                  <span className="font-medium">294 ps / 6,400 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">외장 컬러</span>
                  <span className="font-medium">스노우 화이트 펄</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">옵션 (2)</span>
                  <span className="font-medium text-right text-xs">
                    프리미엄 팩<br />
                    스마트커넥트&HUD+빌트인캠2&BOS...
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold mb-6 text-center py-4 border-t">
                76,430,000 <span className="text-base font-normal">원</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  자세히 보기
                </button>
                <button className="flex-1 py-3 px-4 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                  견적 내기
                </button>
              </div>
            </div>

            {/* Card 2 - Kia EV5 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Kia EV5</h3>
                  <p className="text-sm text-gray-600">
                    EV장거리 | 어스 롱레인지 2WD A/T
                  </p>
                </div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
                  TOP 2
                </span>
              </div>

              {/* Car Image Placeholder */}
              <div className="aspect-[16/9] rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/car2.avif"
                  alt="Car Image"
                  className="object-contain p-4"
                  fill
                />
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">출시일</span>
                  <span className="font-medium">2025-09-04</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배터리 용량</span>
                  <span className="font-medium">81.4 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">최고 출력</span>
                  <span className="font-medium">160 kW / 217 ps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">외장 컬러</span>
                  <span className="font-medium">어머보리 실버</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">옵션 (2)</span>
                  <span className="font-medium text-right text-xs">
                    드라이빙 와이즈
                    <br />
                    파노라마 선루프
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold mb-6 text-center py-4 border-t">
                57,520,000 <span className="text-base font-normal">원</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  자세히 보기
                </button>
                <button className="flex-1 py-3 px-4 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                  견적 내기
                </button>
              </div>
            </div>

            {/* Card 3 - Ray */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">The 2026 Ray</h3>
                  <p className="text-sm text-gray-600">1.0 가솔린 | X-Line</p>
                </div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
                  TOP 3
                </span>
              </div>

              {/* Car Image Placeholder */}
              <div className="aspect-[16/9] rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/car3.avif"
                  alt="Car Image"
                  className="object-contain p-4"
                  fill
                />
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">출시일</span>
                  <span className="font-medium">2025-09-03</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배기량</span>
                  <span className="font-medium">998 cc</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">최고 출력</span>
                  <span className="font-medium">76 ps / 6,200 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">외장 컬러</span>
                  <span className="font-medium">클리어 화이트</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">옵션</span>
                  <span className="font-medium">-</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold mb-6 text-center py-4 border-t">
                20,030,000 <span className="text-base font-normal">원</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  자세히 보기
                </button>
                <button className="flex-1 py-3 px-4 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                  견적 내기
                </button>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-500 mt-8">
          ※ 차량의 출시일 기준으로 차량을 서열 구성은 되지 만에 기호입니다.
        </p>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            className="w-2 h-2 rounded-full bg-black"
            aria-label="Slide 1"
          ></button>
          <button
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
            aria-label="Slide 2"
          ></button>
        </div>
      </section>

      {/* Quick Access Cards Section */}
      <section className="py-20 px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {/* Card 1 - 견적 내기 */}
          <div className="group relative bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[280px] cursor-pointer transition-all duration-300 hover:bg-[#05141F]">
            {/* Icon */}
            <div className="mb-6">
              <svg
                className="w-12 h-12 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
              견적 내기
            </h3>

            {/* Arrow */}
            <div className="absolute bottom-8 right-8">
              <svg
                className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Card 2 - 시승 신청 */}
          <div className="group relative bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[280px] cursor-pointer transition-all duration-300 hover:bg-[#05141F]">
            {/* Icon */}
            <div className="mb-6">
              <svg
                className="w-12 h-12 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
              시승 신청
            </h3>

            {/* Arrow */}
            <div className="absolute bottom-8 right-8">
              <svg
                className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Card 3 - 판매 네트워크 */}
          <div className="group relative bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[280px] cursor-pointer transition-all duration-300 hover:bg-[#05141F]">
            {/* Icon */}
            <div className="mb-6">
              <svg
                className="w-12 h-12 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
              판매 네트워크
            </h3>

            {/* Arrow */}
            <div className="absolute bottom-8 right-8">
              <svg
                className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Card 4 - 이 달의 구매 혜택 */}
          <div className="group relative bg-gray-50 rounded-lg p-8 flex flex-col justify-between min-h-[280px] cursor-pointer transition-all duration-300 hover:bg-[#05141F]">
            {/* Icon */}
            <div className="mb-6">
              <svg
                className="w-12 h-12 stroke-black group-hover:stroke-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
              이 달의 구매 혜택
            </h3>

            {/* Button */}
            <div className="mt-4">
              <span className="text-sm font-semibold text-black group-hover:text-white transition-colors duration-300">
                자세히 보기 →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-8 max-w-[1920px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          News
        </h2>

        <div className="max-w-[1400px] mx-auto">
          {/* Featured News Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 overflow-hidden rounded-lg">
            {/* Left Side - Content */}
            <div className="bg-[#5a6169] text-white p-12 lg:p-16 flex flex-col justify-between">
              {/* Category */}
              <div>
                <span className="text-sm font-medium mb-6 block">
                  기아 소식
                </span>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  기아, '서울 ADEX 2025' 방산전시회 참가
                </h3>

                {/* Description */}
                <p className="text-base mb-8 leading-relaxed opacity-90">
                  기아가 국내 최대 규모의 방위산업 전시회인 '서울 ADEX 2025'
                  비즈니스 데이에서 다양한 군용 차량을 공개한다.
                </p>
              </div>

              {/* Button */}
              <div>
                <button className="bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <Image
                  src="/images/news-image.avif"
                  alt="News Image"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <div className="group cursor-pointer">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">뉴스</span>
              </div>
              <h4 className="text-lg font-bold group-hover:underline transition-all">
                기아, 카자흐스탄 CKD 공장 준공식 개최
              </h4>
            </div>

            {/* News Card 2 */}
            <div className="group cursor-pointer">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">뉴스</span>
              </div>
              <h4 className="text-lg font-bold group-hover:underline transition-all">
                기아, '서울 ADEX 2025' 방산전시회 참가
              </h4>
            </div>

            {/* News Card 3 */}
            <div className="group cursor-pointer">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">공지</span>
              </div>
              <h4 className="text-lg font-bold group-hover:underline transition-all">
                기아 DMmate 운영 대행사 모집 공고
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
