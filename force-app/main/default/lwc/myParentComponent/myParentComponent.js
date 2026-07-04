/**
 * Parent component that loads Accounts (with Contacts) from Apex.
 * Uses a wired Apex method and exposes a simple getter for the template.
 */
import { LightningElement, wire } from 'lwc';
import getAccountsWithContacts from '@salesforce/apex/AccountContactsController.getAccountsWithContacts';

export default class MyParentComponent extends LightningElement {
    accounts = [];
    error = null;

    // Wire the Apex method (cacheable) and handle results in one place
    @wire(getAccountsWithContacts)
    wiredAccounts({ error, data }) {
        if (data) {
            // ensure we always store an array for template iteration
            this.accounts = Array.isArray(data) ? data : [];
            this.error = null;
        } else if (error) {
            this.error = error;
            this.accounts = [];
        }
    }

    get hasAccounts() {
        return Array.isArray(this.accounts) && this.accounts.length > 0;
    }
}
