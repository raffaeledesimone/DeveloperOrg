public with sharing class RecordTypesController {
    @AuraEnabled
	public static List<Map<String, String>> getRecordTypes(String recordId, String sObjectName){
		if (String.isBlank(recordId) || String.isBlank(sObjectName)) throw new AuraHandledException('Needs a record ID or SObject Name');

		System.debug('sObject: '+sObjectName + '; '+'recordId: '+recordId);

		try {
			List<Map<String, String>> result = new List<Map<String, String>>();
			for (List<RecordType> rTypes : [SELECT Name FROM RecordType WHERE SobjectType =: sObjectName AND isActive=true]) {
				for (RecordType rt:rTypes) {
					result.add(new Map<String, String>{'label'=>rt.Name, 'value'=>rt.Id});
				}
			}
			if (result.isEmpty())
				result = new List<Map<String, String>>{new Map<String, String> {'label'=>'Master', 'value'=>''}};
			return result;
		} catch (Exception e) {
			throw new AuraHandledException(e.getMessage());
		}
	}
}