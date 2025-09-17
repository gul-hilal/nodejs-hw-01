import { faker } from '@faker-js/faker';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i++) {
    const newContact = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      job: faker.person.jobTitle(),
    };
    contacts.push(newContact);
  }
  await writeContacts(contacts);
};

generateContacts(5).then(() => {
  console.log('5 yeni kişi eklendi!');
});
