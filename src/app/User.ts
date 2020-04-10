import { Contact } from './Contact';

export class User{
    constructor(public userId:number,
        public name:string,
        public password:string,
        public dateOfBirth:Date,
        public phoneNumber:number,
        public listOfContact:Array<Contact>){}
}