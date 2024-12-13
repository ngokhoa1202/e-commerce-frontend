
import { BE_URL } from '@/constants';
import { WeeklyPlan } from '@/dto/weeklyPlan';

export default class CurriculumApi {

  static async getByCourseId(courseId: string): Promise<WeeklyPlan[]> {
    const response = await fetch(`${BE_URL}/courses/${courseId}/weekly-plans`, {
      method: 'GET',
    });
    const { data } = await response.json();
    return data;
  }
}
