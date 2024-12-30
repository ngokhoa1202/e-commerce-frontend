// import { BE_URL } from '@/constants';
import { ProfileDto } from '@/dto/profile';
import { BE_URL } from '@/constants';
// const BE_URL = 'https://tienclay.me/ecommerce'
export default class ProfileApi {
  static async getById(profileId: string, token: string): Promise<ProfileDto> {
    const response = await fetch(`${BE_URL}/ecommerce/profile/${profileId}`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }
}
