import { BE_URL } from '@/constants';
import { CreateOrderDto, OrderDto } from '@/dto/order';

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
  static async create(input: CreateOrderDto): Promise<OrderDto> {
    const response = await fetch(`${BE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    const { data } = await response.json();
    console.log(response);
    return data;
  }

  static async getByUser(token: string): Promise<OrderDto[]> {
    const response = await fetch(`${BE_URL}/users/1/orders-access-token`, {
      method: 'GET',
      headers: { Authorization: token },
    });
    const { data } = await response.json();
    console.log(data);
    return data;
  }
}
