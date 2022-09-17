// const {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } = require("./contacts");

const contacts = require("./contacts");

const argv = require("yargs").argv;
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const AllContacts = await contacts.listContacts();
      console.log(AllContacts);
      break;

    case "get":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const addContact = await contacts.addContact({ name, email, phone });
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contacts.addContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// console.log(argv);
invokeAction(argv);
//
//
// const indexOf = process.argv.indexOf("--action");
// if (indexOf !== -1) {
//   const action = process.argv[indexOf + 1];
//   invokeAction({ action });
// }

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "5" });
// invokeAction({
//   action: "add",
//   name: "mango man",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(992) 914-3792",
// });
//
// listContacts();
// getContactById(2);
// removeContact(2);
// addContact("mango man", "nulla.ante@vestibul.co.uk", "(992) 914-3792");
// listContacts();
