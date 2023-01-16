const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve(__dirname, './db/contacts.json');

async function listContacts() {
  const dbRaw = await fs.readFile(contactsPath, 'utf8');
  const db = JSON.parse(dbRaw);
  return db;
}

async function writeDb(db) {
  await fs.writeFile(contactsPath, JSON.stringify(db));
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const filtredContact = contacts.filter(contacts => contacts.id === contactId);
  return filtredContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const updatedContacts = contacts.filter(
    contacts => contacts.id !== contactId
  );
  await writeDb(updatedContacts);
}

async function addContact(name, email, phone) {
  const newContact = { name, email, phone };
  const db = await listContacts();
  db.push(newContact);
  await writeDb(db);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
