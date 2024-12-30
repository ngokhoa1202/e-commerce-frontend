import { BE_URL } from '@/constants';
import { CreateOrderDto, OrderDto } from '@/dto/order';
// const BE_URL = 'https://tienclay.me/ecommerce'

// const sampleCourse = {
//   id: '1',
//   name: 'Introduction to Web Development',
//   description: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
//   subject: '',
//   duration: '4 weeks',
//   fees: [{
//     id: '1', courseId: '1', feeType: 'One-time', feeAmount: 20,
//   }],
// };

export default class OrderApi {
  static async create(token: string, input: CreateOrderDto): Promise<OrderDto> {
    if (typeof input.totalAmount === 'string') input.totalAmount = parseInt(input.totalAmount, 10);
    const response = await fetch(`${BE_URL}/orders/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(input),
    });
    const { data } = await response.json();
    return data;
  }

  static async remove(token: string, orderId: string): Promise<void> {
    const response = await fetch(`${BE_URL}/orders/${orderId}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    });
    // console.log(await response.json());
  }

  static async getByUser(token: string): Promise<OrderDto[]> {
    const response = await fetch(`${BE_URL}/users/1/orders-access-token`, {
      method: 'GET',
      headers: { Authorization: token },
    });
    const { data } = await response.json();
    return data;
  }
}
