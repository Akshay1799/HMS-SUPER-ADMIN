import { MOCK_USER } from "../mocks/auth.mock";
import { User, AuthSession } from "../types/auth.types";
import { LoginSchemaType, ResetPasswordSchemaType, MfaSchemaType } from "../schemas/auth.schema";

export const authService = {
  async login(data: LoginSchemaType): Promise<AuthSession> {
    // Rate limiting simulation (mock)
    if (data.email === "ratelimit@medichain.com") {
      throw new Error("Too many attempts. Try again later.");
    }
    // Network failure simulation (mock)
    if (data.email === "network@medichain.com") {
      throw new Error("Unable to connect.");
    }

    if (data.email !== MOCK_USER.email) {
      throw new Error("Invalid email or password");
    }

    return {
      accessToken: "mock-access-token-jwt",
      refreshToken: "mock-refresh-token-jwt",
      user: MOCK_USER,
    };
  },

  async logout(): Promise<void> {
  },

  async forgotPassword(email: string): Promise<void> {
    if (email === "network@medichain.com") {
      throw new Error("Unable to connect.");
    }
  },

  async resetPassword(data: ResetPasswordSchemaType): Promise<void> {
  },

  async verifyOtp(data: MfaSchemaType): Promise<void> {
    if (data.otp !== "123456") {
      throw new Error("Invalid or expired OTP code.");
    }
  },
};
