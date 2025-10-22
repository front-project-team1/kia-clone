"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

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
  ];

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 ">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1920px] mx-auto">
        {/* Left Navigation */}
        <nav className="flex-1">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {link.text}
                </Link>
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
                <Link
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {link.text}
                </Link>
              </li>
            ))}

            {/* Login/User Menu */}
            {isAuthenticated ? (
              <li className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-white text-lg font-semibold hover:text-gray-300 transition-colors whitespace-nowrap"
                >
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {user?.name}
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-semibold text-gray-800">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      마이페이지
                    </button>
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      내 차량
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors border-t"
                    >
                      로그아웃
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
