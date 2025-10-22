"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 더미 사용자 데이터
const DUMMY_USERS = [
  {
    email: "test@kia.com",
    password: "1234",
    name: "김기아",
    phone: "010-1234-5678",
  },
];

const AuthContext = createContext(); // 전역적으로 공유할 데이터 공간(컨테이너) 생성

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로그인 함수
  const login = (email, password) => {
    const foundUser = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser; // 비밀번호 제외한 사용자 정보
      setUser(userWithoutPassword); // 사용자 정보 저장
      localStorage.setItem("user", JSON.stringify(userWithoutPassword)); // 사용자 정보를 localStorage에 저장
      return { success: true }; // 로그인 성공 반환
    }

    // 유저를 찾지 못할 경우 로그인 실패 반환
    return {
      success: false,
      message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    };
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // localStorage에서 사용자 정보 제거
  };

  // 컴포넌트 마운트 시 localStorage에서 사용자 정보 불러오기
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const value = {
    // value에 사용자 정보, 로그인 함수, 로그아웃 함수, 로딩 상태, 인증 상태를 저장
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  /**
    <AuthContext.Provider value={value}>
      - createContext()로 만든 AuthContext 안에는 Provider라는 컴포넌트가 자동으로 생깁니다.
      - 이 Provider는 **“Context에 데이터를 담아서 하위 컴포넌트에 전달”**하는 역할을 합니다.
      - 즉, “내 안의 모든 컴포넌트들이 이 데이터를 사용할 수 있다”고 알려주는 역할이에요.

      value={value}
      - 이게 실제로 전역으로 공유할 데이터입니다.
      - 예를 들어 value에 로그인 정보, 로그인 함수, 로그아웃 함수 등이 들어갑니다.
   */
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
    const { user, login, logout } = useContext(AuthContext);
      - 이런식으로 사용해야 하지만, 개발자 편의를 위해 useAuth를 추가로 정의합니다.
      - useAuth를 추가로 정의하여 사용자 정보, 로그인 함수, 로그아웃 함수를 편리하게 사용할 수 있도록 합니다.
      - 사용하는 쪽에서 AuthContext를 편하게 명확하고, 재사용 가능하도록 훅으로 만들어서 제공합니다.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider"); // useAuth가 AuthProvider 내에서 사용되지 않을 경우 에러 발생
  }
  return context;
};
