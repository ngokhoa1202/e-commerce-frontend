const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

export default class AuthApi {
  static async login(input: { email: string, password: string }): Promise<{ accessToken: string, refreshToken: string }> {
    const response = await fetch(`${BE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    const { data } = await response.json();
    return data;
  }

  static async register(input: { username: string, email: string, password: string }): Promise<void> {
    const response = await fetch(`${BE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    const { data } = await response.json();
    return data;
  }

  static async refreshTokens(refreshToken: string): Promise<{ accessToken: string, refreshToken: string }> {
    const response = await fetch(`${BE_URL}/auth/generate-token`, {
      method: 'POST',
      headers: { 'x-refresh-token': refreshToken },
    });
    const { data } = await response.json();
    return data;
  }
}
