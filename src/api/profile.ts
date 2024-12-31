// import { BE_URL } from '@/constants';
import { ProfileDto } from '@/dto/profile';
import { BE_URL } from '@/constants';

export default class ProfileApi {
  static async getByUserId(userId: string, token: string): Promise<ProfileDto> {
    const response = await fetch(`${BE_URL}/profiles/${userId}`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }

  static async getByProfileId(profileId: string, token: string): Promise<ProfileDto> {
    const response = await fetch(`${BE_URL}/profiles/${profileId}`, {
        method: 'GET',
        headers: { Authorization: token },
    })
    const { data } = await response.json();
    return data;
  }

  static async editByProfileId(profileId: string, editedProfile: object, token: string) {
    const response = await fetch(`${BE_URL}/profiles/${profileId}`, {
        method: 'PATCH',
        headers: { Authorization: token },
        body: JSON.stringify(editedProfile),
    })
    const { data } = await response.json();
    return data;
  }


}
