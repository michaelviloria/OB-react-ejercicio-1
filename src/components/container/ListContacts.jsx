import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";

export default function ListContacts() {
	const defaultContact = new Contact(
		"Michael",
		"Viloria",
		"michaelviloria.g@gmail.com",
		false
	);

	return (
		<div>
			<h1>Tus contactos</h1>
			<ContactComponent contact={defaultContact} />
		</div>
	);
}
