import { LightningElement, api } from 'lwc';

export default class MyChildComponent extends LightningElement {
    @api contacts = [];

    get contactList() {
        if (Array.isArray(this.contacts)) {
            return this.contacts;
        }
        if (this.contacts && Array.isArray(this.contacts.records)) {
            return this.contacts.records;
        }
        return [];
    }

    get hasContacts() {
        return this.contactList.length > 0;
    }
} 