import { LightningElement, api } from 'lwc';

export default class MyChildComponent extends LightningElement {
    @api chkVal;
    display(){
        console.log(this.chkVal);
    }
    /*handleClick(){
        console.debug('inside handleclick');
        const evt = new CustomEvent('handleClick',{
            chkVal = this.tempVal
        });
        this.dispatchEvent(evt);
            }*/
}