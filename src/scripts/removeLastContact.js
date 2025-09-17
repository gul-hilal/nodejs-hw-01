import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    const contacts = await readContacts();

    if (contacts.length === 0) {
        console.log('Silinecek kisi yok!');
        return;
    }

    const removed = contacts.pop();
    await writeContacts(contacts);

    console.log('Son kisi silindi:', removed);

};

removeLastContact();