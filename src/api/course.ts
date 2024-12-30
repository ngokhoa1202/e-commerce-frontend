import { CourseFullDto } from '@/dto/course';
import { BE_URL } from '@/constants';

export default class CourseApi {

  static async get(): Promise<CourseFullDto[]> {
    const response = await fetch(`${BE_URL}/courses`, {
      method: 'GET',
    });
    const { data } = await response.json();
    return data;
  }

  static async getById(courseId: string): Promise<CourseFullDto> {
    const response = await fetch(`${BE_URL}/courses/${courseId}`, {
      method: 'GET',
    });
    const { data } = await response.json();
    return data;
  }

  static async getByAccessToken(accessToken: string): Promise<CourseFullDto[]> {
    const response = await fetch(`${BE_URL}/users/courses`, {
      method: 'GET',
      headers: {
        Authorization: `${accessToken}`
      }
    });
    const {data} = await response.json();
    return data;
  }
}
