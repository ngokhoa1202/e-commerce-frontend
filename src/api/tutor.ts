// import { BE_URL } from '@/constants';
import { ProfileDto } from '@/dto/profile';
import { BE_URL } from '@/constants';
export default class ProfileApi {
  static async getById(userId: string, token: string): Promise<ProfileDto> {
    const response = await fetch(`${BE_URL}/ecommerce/profile/${userId}`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }
}
