import { BE_URL } from '@/constants';
// const BE_URL = 'https://tienclay.me/ecommerce'
export default class UserApi {
  static async getProfileId(userId: string, token: string) {
    const response = await fetch(`${BE_URL}/user/${userId}/profileId`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }

  static async getCoursesOfUser(userId: string, token: string) {
    const response = await fetch(`${BE_URL}/user/${userId}/courses`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }
}
