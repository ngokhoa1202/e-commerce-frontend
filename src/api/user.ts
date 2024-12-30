import { BE_URL } from '@/constants';
import { UserPlainDto } from '@/dto/user';


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
