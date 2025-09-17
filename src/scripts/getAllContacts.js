import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  return await readContacts();
};

getAllContacts().then((contacts) => console.log(contacts));


