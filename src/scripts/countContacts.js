import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    const contacts = await readContacts();
    return contacts.length;

};

console.log('Toplam kişi sayisi:', await countContacts());