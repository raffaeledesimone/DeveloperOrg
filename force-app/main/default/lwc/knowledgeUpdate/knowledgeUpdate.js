import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import TITLE_FIELD from '@salesforce/schema/Knowledge__kav.Title';
import PUBB_STATUS_FIELD from '@salesforce/schema/Knowledge__kav.PublishStatus';

export default class KnowledgeUpdate extends LightningElement {
	@api recordId;
	@api objectApiName;

	fields = [
		TITLE_FIELD,
		PUBB_STATUS_FIELD
	];

	// @wire(getRecord, {recordId: '$recordId', fields: fields})
	// wiredRecord({data, error}) {
	// 	if (data) {
	// 		console.log('Status: '+getFieldValue(data, PUBB_STATUS_FIELD));
	// 	} else if (error) {
	// 		console.error(error);
	// 	}
	// }
}