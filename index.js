const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      const filtredContact = await getContactById(id);
      console.table(filtredContact);
      break;

    case 'add':
      await addContact(name, email, phone);
      const updatedContacts = await listContacts();
      console.table(updatedContacts);
      break;

    case 'remove':
      await removeContact(id);
      const clearedContacts = await listContacts();
      console.table(clearedContacts);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
