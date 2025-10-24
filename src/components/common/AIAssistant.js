"use client";

import { useState, useEffect, useRef } from "react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false); // 어시스턴트 OPEN, CLOSE
  const [currentTime, setCurrentTime] = useState(new Date()); // 챗봇 시간

  const [isTyping, setIsTyping] = useState(false); // 챗봇 응답 중인가?
  const [inputMessage, setInputMessage] = useState(""); // 검색 value
  const [messages, setMessages] = useState([
    // AI 어시스턴트 응답 메세지 배열
    {
      id: 1,
      type: "ai",
      content: "안녕하세요, 무엇을 도와드릴까요?",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // 메시지 전송 함수
  const sendMessage = async () => {
    if (!inputMessage.trim()) return; // 작성된게 없을 경우 return.

    const userMessage = {
      // 메세지 객체 포매팅
      id: Date.now(),
      type: "user",
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]); // 나의 메세지 상태 업데이트
    setInputMessage(""); // 입력 input 초기화
    setIsTyping(true); // AI가 응답중입니다.

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage.trim()); // 응답 호출
      const aiMessage = {
        // ai 메세지 포매팅
        id: Date.now() + 1,
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
      };

      // AI 메세지 상태 업데이트
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false); // ai 응답이 끝났습니다.
    }, 1500); // 1.5초 딜레이 (네트워크 지연을 보여주기 위함)
  };

  // AI 응답 생성 함수
  const generateAIResponse = (userInput) => {
    const responses = {
      // 응답 예시 프롬프트
      안녕: "안녕하세요! 기아 AI 어시스턴트입니다. 무엇을 도와드릴까요?",
      차량: "차량에 대해 궁금한 것이 있으시군요! 구체적으로 어떤 부분이 궁금하신가요?",
      구매: "차량 구매에 대해 도움을 드리겠습니다. 예산이나 선호하는 모델이 있으신가요?",
      가격: "차량 가격 정보를 제공해드릴 수 있습니다. 관심 있는 모델을 알려주세요.",
      세금: "자동차 세금에 대해 문의하시는군요. 구체적인 세금 종류를 알려주시면 더 정확한 정보를 제공해드릴 수 있습니다.",
      추천: "차량 추천을 도와드리겠습니다! 예산과 용도를 알려주시면 적합한 모델을 추천해드릴게요.",
      혜택: "구매 혜택에 대해 문의하시는군요! 현재 진행 중인 프로모션 정보를 확인해드릴 수 있습니다.",
    };

    // const [key, value] of responses 객체
    for (const [keyword, response] of Object.entries(responses)) {
      // 사용자 입력 값에 키워드가 포함되어 있다면,
      if (userInput.includes(keyword)) {
        // 응답 반환
        return response;
      }
    }

    // 키워드가 없다면 에러 답변을 반환
    return "죄송합니다. 더 구체적인 질문을 해주시면 정확한 답변을 드릴 수 있습니다. 차량 구매, 가격, 세금, 추천 등에 대해 문의해주세요.";
  };

  // 자동 스크롤 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 시간 포맷팅 함수
  const formatTime = (date) => {
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  // Enter 키로 메시지 전송
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // 실시간 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(timer);
  }, []);

  // 메시지가 추가될 때마다 스크롤을 맨 아래로
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 z-50 bg-white text-gray-500 w-14 h-14 rounded-full shadow-lg hover:text-black transition-colors flex items-center justify-center"
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
        <div className="fixed inset-0">
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

              {/* Feature Cards */}
              <div className="space-y-4 mb-6">
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

              {/* Messages */}
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === "ai" ? "bg-black" : "bg-gray-500"
                      }`}
                    >
                      {message.type === "ai" ? (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      )}
                    </div>

                    {/* Message Content */}
                    <div
                      className={`flex-1 ${
                        message.type === "user" ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-block max-w-xs px-4 py-2 rounded-lg ${
                          message.type === "ai"
                            ? "bg-gray-100 text-gray-900"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-3">
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
                      <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg inline-block">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* 스크롤 기준점 */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="메시지를 입력하세요..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                >
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
