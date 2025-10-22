import Image from "next/image";

export default function NewsSection() {
  return (
    <section className="py-20 px-8 max-w-[1920px] mx-auto">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">News</h2>

      <div className="max-w-[1400px] mx-auto">
        {/* Featured News Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 overflow-hidden rounded-lg">
          {/* Left Side - Content */}
          <div className="bg-[#5a6169] text-white p-12 lg:p-16 flex flex-col justify-between">
            {/* Category */}
            <div>
              <span className="text-sm font-medium mb-6 block">기아 소식</span>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                기아, &apos;서울 ADEX 2025&apos; 방산전시회 참가
              </h3>

              {/* Description */}
              <p className="text-base mb-8 leading-relaxed opacity-90">
                기아가 국내 최대 규모의 방위산업 전시회인 &apos;서울 ADEX
                2025&apos; 비즈니스 데이에서 다양한 군용 차량을 공개한다.
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
              기아, &apos;서울 ADEX 2025&apos; 방산전시회 참가
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
  );
}
