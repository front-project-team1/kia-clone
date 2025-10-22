import Image from "next/image";
import Link from "next/link";
import kia360 from '@/app/kia360/page';

export default function Header() {
  const navLinks = [
    { href: "#", text: "차량" },
    { href: "#", text: "구매" },
    { href: "/kia360", text: "체험" },
    { href: "#", text: "이벤트" },
    { href: "/service/customer-center", text: "고객지원" },
    { href: "#", text: "Discover Kia" },
  ];

  const rightMenuLinks = [
    { href: "#", text: "PBV" },
    { href: "#", text: "KR" },
    { href: "#", text: "통합검색" },
    { href: "#", text: "로그인" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1920px] mx-auto">
        {/* Left Navigation */}
        <nav className="flex-1">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0 mx-8">
          <Link href="/">
            <Image
              src="/images/kia-logo.svg"
              width={102}
              height={56}
              alt="KIA logo"
              className="brightness-0 invert"
            />
          </Link>
        </div>

        {/* Right Menu */}
        <div className="flex-1 flex justify-end">
          <ul className="flex gap-6 items-center">
            {rightMenuLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
