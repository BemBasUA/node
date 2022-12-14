const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      break;

    case "getById":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "deleteContact":
      const deletedContact = await contacts.removeContact(id);
      console.log(deletedContact);
      break;
    default:
      console.log("Unknown action");
  }
};

invokeAction({ action: "deleteContact", id: "1" });
