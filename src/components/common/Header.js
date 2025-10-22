"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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

  // 모바일 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

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
    setShowMobileMenu(false);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-[1920px] mx-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showMobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Left Navigation */}
          <nav className="hidden lg:flex flex-1">
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
          <div className="flex-shrink-0 mx-4 lg:mx-8">
            <Link href="/">
              <Image
                src="/images/kia-logo.svg"
                width={80}
                height={44}
                alt="KIA logo"
                className="brightness-0 invert lg:w-[102px] lg:h-[56px]"
              />
            </Link>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden lg:flex flex-1 justify-end">
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

          {/* Mobile User Icon */}
          <div className="lg:hidden">
            {isAuthenticated ? (
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            ) : (
              <Link
                href="/login"
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors block"
              >
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
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop (black) */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#05141F] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/images/kia-logo.svg"
                width={80}
                height={44}
                alt="KIA logo"
                className="brightness-0 invert"
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* User Info (Mobile) */}
          {isAuthenticated && (
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <p className="text-white font-semibold">{user?.name}</p>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-3 bg-white/10 text-white text-sm rounded hover:bg-white/20 transition-colors">
                  마이페이지
                </button>
                <button className="flex-1 py-2 px-3 bg-white/10 text-white text-sm rounded hover:bg-white/20 transition-colors">
                  내 차량
                </button>
              </div>
            </div>
          )}

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-3 text-white text-lg hover:bg-white/10 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <div className="border-t border-white/10 my-2"></div>
              {rightMenuLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-3 text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-white/10">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full py-3 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
              >
                로그아웃
              </button>
            ) : (
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="block w-full py-3 px-4 bg-white text-black font-semibold rounded text-center hover:bg-gray-100 transition-colors"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
