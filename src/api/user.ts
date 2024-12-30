import { BE_URL } from '@/constants';
import { UserPlainDto } from '@/dto/user';

export default class UserApi {
  static async getCurrentUserByAccessToken(accessToken: string): Promise<UserPlainDto> {
    const response = await fetch(`${BE_URL}/auth/me`, {
      method: 'GET',
      headers: { Authorization: accessToken },
    });
    const { data } = await response.json();
    return data;
  }
}
