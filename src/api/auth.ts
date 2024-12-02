export default class AuthApi {
  static async login(input: { email: string, password: string }): Promise<{ accessToken: string, refreshToken: string }> {
    const response = await fetch("https://tienclay.me/ecommerce/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const { data } = await response.json();
    return data;
  }

  static async register(input: { username: string, email: string, password: string }): Promise<void> {
    const response = await fetch("https://tienclay.me/ecommerce/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const { data } = await response.json();
    console.log(data);
  }

  static async refreshTokens(refreshToken: string): Promise<{ accessToken: string, refreshToken: string }> {
    const response = await fetch("https://tienclay.me/ecommerce/auth/generate-token", {
      method: "POST",
      headers: { "x-refresh-token": refreshToken },
    });
    const { data } = await response.json();
    return data;
  }
}
