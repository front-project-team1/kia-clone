"use client";

import { useState, useEffect } from "react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // 실시간 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(timer);
  }, []);

  // 시간 포맷팅 함수
  const formatTime = (date) => {
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 z-50 bg-black text-white w-14 h-14 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        aria-label="AI 어시스턴트 열기"
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Modal Content - positioned above FAB */}
          <div className="absolute bottom-20 right-6 bg-white rounded-2xl w-[calc(100vw-3rem)] max-w-md h-[600px] flex flex-col shadow-2xl sm:bottom-24 sm:right-6 sm:max-w-sm sm:w-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                기아 AI 어시스턴트
              </h2>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-500 hover:text-gray-700">
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
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={toggleModal}
                  className="p-1 text-gray-500 hover:text-gray-700"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Timestamp */}
              <div className="flex justify-center mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                  {formatTime(currentTime)}
                </span>
              </div>

              {/* AI Avatar and Message */}
              <div className="flex items-start space-x-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 mb-2">
                    안녕하세요, 무엇을 도와드릴까요?
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>소중한 개인 정보는 입력하지 마세요.</p>
                    <p>챗봇 이용 시 데이터 요금이 발생할 수 있습니다.</p>
                  </div>
                </div>
              </div>

              {/* Chat Start Line */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-gray-500">
                    챗봇 상담을 시작합니다.
                  </span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4">
                {/* System Message Icon */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    {/* Feature Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        차량 구매/체험
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        인기모델 추천, 구매혜택, 자동차 세금 등
                      </p>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm hover:bg-gray-50 transition-colors">
                        자세히 보기
                      </button>
                    </div>
                  </div>
                </div>

                {/* Carousel Navigation */}
                <div className="flex justify-center items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <button className="ml-4 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gray-600"
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
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
