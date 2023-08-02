const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			showModal: false,
			contactToBeDeleted: null,
			contacts: [
				{
					id: 1,
					name: "Leonardo da Vinci",
					homeAddress: "Florence, Italy",
					phone: "(555) 123-4567",
					email: "leonardo@exampleemail.com",
					avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0f8fff5-7695-4b8c-929f-0dc34c90e866/dehsjc6-3cbfbcf1-ee36-4bc8-aebb-99f80fc963d1.jpg/v1/fill/w_900,h_888,q_70,strp/leonardo_da_vinci_vector_art_by__vectordidak_by_noviarifin_dehsjc6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwZjhmZmY1LTc2OTUtNGI4Yy05MjlmLTBkYzM0YzkwZTg2NlwvZGVoc2pjNi0zY2JmYmNmMS1lZTM2LTRiYzgtYWViYi05OWY4MGZjOTYzZDEuanBnIiwiaGVpZ2h0IjoiPD0xMDEwIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZjBmOGZmZjUtNzY5NS00YjhjLTkyOWYtMGRjMzRjOTBlODY2XC9ub3ZpYXJpZmluLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.rqZjp_sWuPBDqiSnvKfHAA18c4FNQzj0kgR7rBze26U"
				},
				{
					id: 2,
					name: "Vincent van Gogh",
					homeAddress: "Amsterdam, Netherlands",
					phone: "(555) 987-6543",
					email: "vincent@exampleemail.com",
					avatar: "https://heraldodemexico.com.mx/u/fotografias/m/2020/2/25/f638x638-190440_248607_5050.jpg"
				},
				{
					id: 3,
					name: "Pablo Picasso",
					homeAddress: "Malaga, Spain",
					phone: "(555) 555-5555",
					email: "pablo@exampleemail.com",
					avatar: "https://raw.githubusercontent.com/4GeeksAcademy/contact-list-Ligia88/master/src/img/picasso.JPG"

				},
				{
					id: 4,
					name: "Frida Kahlo",
					homeAddress: "Mexico City, Mexico",
					phone: "(555) 111-2222",
					email: "frida@exampleemail.com",
					avatar: "https://pymstatic.com/8944/conversions/frida-kahlo-wide_webp.webp"

				},
			]
		},

		actions: {

			//add contact to the list
			addContact: (contact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// creates an id for the new contact and add rest of its info
				const newContact = {
					id: listOfContacts.length + 1,
					...contact
				};
				// adds new contact to the list
				setStore({ contacts: [...listOfContacts, newContact] });
			},

			//edit contact from the list
			editContact: (id, updatedContact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// if contact with id exists then update it
				const contactIndex = listOfContacts.findIndex(contact => contact.id === id);
				if (contactIndex !== -1) {
					const updatedContacts = [...listOfContacts];
					updatedContacts[contactIndex] = { id, ...updatedContact };
					// updates the contacts' info in the store
					setStore({ contacts: updatedContacts });
				}
			},

			// toggle the modal on
			toggleModal: (show) => {
				setStore({ showModal: show })
			},

			// checks if all fields are filled else shows modals
			checkEmptyFields: (newContact) => {
				const { name, homeAddress, phone, email } = newContact;
				if (name && homeAddress && phone && email) {
					// if all fields are filled, saves contact
					getActions().addContact(newContact);
				} else {
					// if any field is empty, shows modal
					getActions().toggleModal(true);
				}
			},

			//close modal button
			closeModal: () => {
				setStore({ showModal: false });
			},

			// set contact to be deleted
			setContactToBeDeleted: (contact) => {
				setStore({ contactToBeDeleted: contact });
			},

			// close the confirm delete modal without deleting a record
			closeDeleteModal: () => {
				setStore({ showModal: false, contactToBeDeleted: null });
			},

			//delete contact from the list
			deleteContact: (contact) => {
				//pulls the contacts in the store
				let listOfContacts = getStore().contacts;
				//filters the contact and generates new array
				setStore({ contacts: listOfContacts.filter((item) => item !== contact) });
				// close the confirm delete modal after deleting a record
				getActions().closeDeleteModal();
			},
		}
	};
};

export default getState;