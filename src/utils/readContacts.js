import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const text = await fs.readFile(PATH_DB, 'utf-8');
        if (!text.trim()) return [];
        const data = JSON.parse(text);
        return data;
    } catch (err) {
        if (err.code === 'ENOENT') return [];
        throw err;
    }
};
