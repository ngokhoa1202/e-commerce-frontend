/* eslint-disable import/prefer-default-export */
export const ROLES: Array<string> = ['TUTOR', 'STUDENT'];
export const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

export enum UserRole {
  Tutor = 'TUTOR',
  Student = 'STUDENT'
}
