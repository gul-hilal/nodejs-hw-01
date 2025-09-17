
import { faker } from '@faker-js/faker';

export default function createFakeContact() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };
};

