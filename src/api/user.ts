import { BE_URL } from '@/constants';
import { UserPlainDto } from '@/dto/user';


export default class UserApi {
  static async getUserId(token: string) {
    const response = await fetch(`${BE_URL}/auth/me`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }

  static async getProfileId(userId: string, token: string) {
    const response = await fetch(`${BE_URL}/users/${userId}/profileId`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }

  static async getCoursesOfUser(userId: string, token: string) {
    const response = await fetch(`${BE_URL}/users/courses`, {
        method: 'GET',
        headers: { Authorization: token },
    })

    const { data } = await response.json();
    return data;
  }

  static async getCurrentUserByAccessToken(accessToken: string): Promise<UserPlainDto> {
    const response = await fetch(`${BE_URL}/auth/me`, {
      method: 'GET',
      headers: { Authorization: accessToken },
    });

    const { data } = await response.json();
    return data;
  }
}
