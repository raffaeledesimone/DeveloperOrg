public with sharing class ContactController {
    @AuraEnabled
    public static Contact current(String contactId, List<String> fields){
        return Database.query(
            'SELECT '+String.join(fields, ',')+'\n'+
            'FROM Contact\n'+
            'WHERE Id = :contactId'
        );
    }
}