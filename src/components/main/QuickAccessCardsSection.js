export default function QuickAccessCardsSection() {
  return (
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
  );
}
