const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data() {
				return {
				  showModal: false,
				  contactToBeDeleted: null,
				  contacts: [
					{
					  id: 1,
					  name: "Vincent van Gogh",
					  homeAddress: "123 Main St.",
					  phone: "(555) 123-4567",
					  email: "vincent@example.com"
					},
					{
					  id: 2,
					  name: "Leonardo da Vinci",
					  homeAddress: "456 Oak Ave.",
					  phone: "(444) 987-6543",
					  email: "leonardo@example.com"
					},
					{
					  id: 3,
					  name: "Pablo Picasso",
					  homeAddress: "789 Maple Rd.",
					  phone: "(777) 321-5555",
					  email: "pablo@example.com"
					},
					{
					  id: 4,
					  name: "Frida Kahlo",
					  homeAddress: "567 Pine St.",
					  phone: "(222) 555-8888",
					  email: "frida@example.com"
					},
				  ]
				}
			  },
			  
			 
				  actions: {
					// Add contact to the list
					addContact: (contact) => {
					  let listOfContacts = getStore().contacts;
					  const newContact = {
						id: listOfContacts.length + 1,
						...contact
					  };
					  setStore({ contacts: [...listOfContacts, newContact] });
					},
			  
					// Edit contact from the list
					editContact: (id, updatedContact) => {
					  let listOfContacts = getStore().contacts;
					  const contactIndex = listOfContacts.findIndex(contact => contact.id === id);
					  if (contactIndex !== -1) {
						const updatedContacts = [...listOfContacts];
						updatedContacts[contactIndex] = { id, ...updatedContact };
						setStore({ contacts: updatedContacts });
					  }
					},
			  
					// Toggle the modal on
					toggleModal: (show) => {
					  setStore({ showModal: show })
					},
			  
					// Check if all fields are filled else show modal
					checkEmptyFields: (newContact) => {
					  const { name, homeAddress, phone, email } = newContact;
					  if (name && homeAddress && phone && email) {
						getActions().addContact(newContact);
					  } else {
						getActions().toggleModal(true);
					  }
					},
			  
					// Close modal button
					closeModal: () => {
					  setStore({ showModal: false });
					},
			  
					// Set contact to be deleted
					setContactToBeDeleted: (contact) => {
					  setStore({ contactToBeDeleted: contact });
					},
			  
					// Close the confirm delete modal without deleting a record
					closeDeleteModal: () => {
					  setStore({ showModal: false, contactToBeDeleted: null });
					},
			  
					// Delete contact from the list
					deleteContact: (contact) => {
					  let listOfContacts = getStore().contacts;
					  setStore({ contacts: listOfContacts.filter((item) => item !== contact) });
					  getActions().closeDeleteModal();
					},
				  }
				};
			  };
			  
			  export default getState;
			  