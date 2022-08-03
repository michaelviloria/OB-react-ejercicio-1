import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

export default function ContactComponent({ contact }) {
	return (
		<div>
			<h2>
				{contact.name} {contact.lastname}
			</h2>
			<h3>email: {contact.email}</h3>
			<h5>
				{contact.connected ? "Contacto en linea" : "Contacto no disponible"}
			</h5>
		</div>
	);
}

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact),
};
