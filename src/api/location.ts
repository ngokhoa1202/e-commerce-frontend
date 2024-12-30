
import { BE_URL } from '@/constants';
import { LocationPlainDto } from '@/dto/location';

export default class LocationApi {

  static async get(accessToken: string): Promise<LocationPlainDto[]> {
    const response = await fetch(`${BE_URL}/locations`, {
      method: 'GET',
      headers: {
        Authorization: `${accessToken}`
      }
    });
    const { data } = await response.json();
    return data;
  }
}
