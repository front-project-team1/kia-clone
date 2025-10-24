import Image from "next/image";

export default function HeroSection() {
  return (
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
    </section>
  );
}
