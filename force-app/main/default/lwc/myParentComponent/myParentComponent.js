import { LightningElement, api } from 'lwc';
import getAccountsWithContacts from '@salesforce/apex/AccountContactsController.getAccountsWithContacts';

export default class MyParentComponent extends LightningElement {
    accounts;
    error;

    @wire(getAccountsWithContacts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    get hasAccounts() {
        return Array.isArray(this.accounts) && this.accounts.length > 0;
    }
}
