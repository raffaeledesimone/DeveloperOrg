({
    onInit : function(component) {
		var id = component.get("v.recordId");
		var name = component.get("v.sObjectName");
		var action = component.get("c.getRecordTypes");
		action.setParams({
			recordId : id,
			sObjectName : name
		});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
				let options = [];
				let result = response.getReturnValue();
				if (result && $A.util.isArray(result)) {
					result.forEach(function(item) {
						options.push(item);
					});
					console.log('new options:', options);
					component.set("v.options", options);

					if (options.length) {
						component.set("v.value", options[0]['value']);
					}
				}
            } else if (state === "INCOMPLETE") {
				console.log('Network error');
			} else if (state === "ERROR") {
				let Errors = response.getError();
				if (Errors && Errors[0]) {
					console.log('ERRORE:', Errors[0].message);
				}
			} else {
				console.log('Errore sconosciuto');
			}
        });
		$A.enqueueAction(action);
    },
})