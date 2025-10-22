import Image from "next/image";

export default function BestKiaSection() {
  return (
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
  );
}
