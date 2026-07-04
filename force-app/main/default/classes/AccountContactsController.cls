public with sharing class AccountContactsController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsWithContacts() {
        return [
            SELECT Id, Name, Phone, Type, Website,
                (SELECT Id, Name, Email, Phone FROM Contacts ORDER BY Name)
            FROM Account
            ORDER BY Name
            LIMIT 50
        ];
    }
}
