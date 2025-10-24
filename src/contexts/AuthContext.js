"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/api/auth";

/**
 * React: 단방향 데이터 흐름(one-way data flow) 구조를 가지고 있음
 * 즉, 데이터는 위(부모)에서 아래(자식)으로만 전달딥니다.
 * 자식 -> 부모 방향으로는 직접 전달이 불가능.
 * React에서는 전역적으로 공유할 데이터 공간(컨텍스트) 생성하여 해결.
 * Redux, zustand, recoil 등 전역 상태관리 라이브러리들도 내부적으로는 Context API를 사용.
 *
 * Context = 전역 데이터 창고, Provider = 창고 문, useContext = 열쇠
 */
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로그인 함수
  const login = async (email, password) => {
    const result = await auth.login(email, password);

    // 성공 시 사용자 정보를 상태와 localStorage에 저장
    if (result.success) {
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
    }

    // 성공, 실패, 에러와 관계없이 API 결과를 반환
    return result;
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
