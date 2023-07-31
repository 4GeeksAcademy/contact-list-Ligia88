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
				//add contact to
			  }
			  
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
