import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

const fields = [
	NAME_FIELD
];

export default class ContactUpdate extends LightningElement {
	@api recordId;
	// @api objectApiName;

	@wire(getRecord, { recordId: '$recordId', fields: fields }) contact;

	get name() {
        return getFieldValue(this.contact.data, NAME_FIELD);
    }

	renderedCallback() {
		if (this.contact.data)
			console.log(this.contact);
	}
}