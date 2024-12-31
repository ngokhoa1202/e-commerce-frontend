import { UUID } from 'crypto';

export default interface LocationCreationDto {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface LocationPlainDto extends LocationCreationDto {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
}

