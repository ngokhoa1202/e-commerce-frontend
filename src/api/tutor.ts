// import { BE_URL } from '@/constants';
import { CreateOrderDto, OrderDto } from '@/dto/order';
const BE_URL = 'NEXT_PUBLIC_BE_URL=https://tienclay.me/ecommerce'

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
