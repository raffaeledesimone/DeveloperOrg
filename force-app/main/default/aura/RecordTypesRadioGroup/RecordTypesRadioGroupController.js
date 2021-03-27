({
	doInit : function(cmp, evt, helper) {
		console.log('value:', cmp.get("v.value"));
		helper.onInit(cmp);
	},

	handleRefresh: function(cmp) {
		cmp.superRerender();
	},

	recordUpdated : function(cmp, event, helper) {
		console.log("*recordUpdated*", event.getParam('changeType'));
		var record = cmp.get("v.record");
		var eventParams = event.getParams();
		if (eventParams.changeType === 'LOADED') {
			console.log(record.RecordTypeId);
			if (record.RecordTypeId) {
				cmp.set("v.value", record.RecordTypeId);
			}
		} else if(eventParams.changeType === "CHANGED") {
			// get the fields that changed for this record
			var changedFields = eventParams.changedFields;
			console.log('Fields that are changed: ' + JSON.stringify(changedFields));
			// record is changed, so refresh the component (or other component logic)
			
		}
		console.log('record:', JSON.stringify(record));
	},

	itemsChange: function(cmp, evt) {
		var options = cmp.get("v.options");
		console.log('options', options);
	},

	updateRecordType : function(cmp, event, helper) {
		var record = cmp.get("v.record");
		console.log(JSON.stringify(record));
		record.Id = cmp.get("v.recordId");
		record.RecordTypeId = cmp.get("v.value");
		console.log(JSON.stringify(record));
		cmp.set("v.record", record);
		cmp.find("recordLoader")
			.saveRecord($A.getCallback(function(saveResult) {
				console.log('saveResult', saveResult);
			}));
	},
})