// api/auth.js

// dummy database
const DUMMY_USERS = [
  {
    email: "test@kia.com",
    password: "1234",
    name: "김기아",
    phone: "010-1234-5678",
  },
];

const login = async (email, password) => {
  try {
    // ================ SERVER CODE ==================
    // 실제 API 호출 시뮬레이션 (나중에 실제 fetch로 교체)
    await new Promise((resolve) => setTimeout(resolve, 500)); // 네트워크 지연 시뮬레이션

    // SERVER: DB에서 사용자 정보를 조회합니다.
    const foundUser = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );
    // ================ SERVER CODE ==================

    // 사용자 정보가 있을 경우, 사용자 정보를 반환
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      return { success: true, user: userWithoutPassword };
    }

    // 사용자 정보가 없을 경우, 실패, 메세지 반환
    return {
      success: false,
      message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    };

    // 네트워크 에러 케이스 처리
  } catch (error) {
    console.error("API 호출 중 오류:", error);
    return {
      success: false,
      message: "로그인 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
};

export const auth = {
  login,
};
