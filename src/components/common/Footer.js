import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F2A] text-white">
      <div className="max-w-[1920px] mx-auto px-8 py-12">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/">
              <Image
                src="/images/kia-logo.svg"
                width={90}
                height={32}
                alt="KIA logo"
                className="brightness-0 invert"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Image
                  src="/images/kia-logo.svg"
                  width={60}
                  height={20}
                  alt="KIA Members"
                  className="brightness-0 invert"
                />
                <span>Members</span>
              </span>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-4">
            <Link
              href="#"
              className="block text-base hover:text-gray-300 transition-colors font-medium"
            >
              판매 네트워크
            </Link>
            <Link
              href="#"
              className="block text-base hover:text-gray-300 transition-colors font-medium"
            >
              견적 내기
            </Link>
            <Link
              href="#"
              className="block text-base hover:text-gray-300 transition-colors font-medium"
            >
              구매 상담 신청
            </Link>
            <Link
              href="#"
              className="block text-base hover:text-gray-300 transition-colors font-medium"
            >
              시승 신청
            </Link>
            <Link
              href="#"
              className="block text-base hover:text-gray-300 transition-colors font-medium"
            >
              기아멤버십
            </Link>
          </div>

          {/* Right Column - New Kia */}
          <div>
            <h3 className="text-gray-400 text-sm mb-4">New Kia</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                공식사항
              </Link>
              <Link
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                뉴스
              </Link>
              <Link
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                IR
              </Link>
              <Link
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                채용
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>한국</span>
              </button>

              <div className="relative">
                <select className="bg-transparent border border-gray-600 rounded px-4 py-2 text-sm appearance-none pr-8 hover:border-gray-400 transition-colors cursor-pointer">
                  <option>Family Site</option>
                </select>
                <svg
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500 mb-6">
            © Kia Corp. All rights reserved
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-8">
            <Link href="#" className="hover:text-white transition-colors">
              개인정보 처리방침
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              프라이버시 센터
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              이용약관
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              윤리경영 사이버감사실
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              전자공고
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              사이트맵
            </Link>
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded">ISMS</span>
              <span>25년 국가정보보호(ISMS)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded">웹접근성</span>
              <span>25년 한국 산업 서비스 품질지수</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded">KS</span>
              <span>24년 한국산업의 서비스 품질지수</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded">대한민국</span>
              <span>25년 대한민국 국가브랜드 대상</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-700 rounded">KS-SQI</span>
              <span>24년 한국서비스품질지수(KS-SQI)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-700 rounded">친환경</span>
              <span>웹 접근성 품질인증</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
