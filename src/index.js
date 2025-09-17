import { generateContacts } from './scripts/generateContacts.js';
import { getAllContacts } from './scripts/getAllContacts.js';

await generateContacts(5);

const contacts = await getAllContacts();
console.log(contacts);
