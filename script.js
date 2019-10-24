// function Contact(name, email, relation, number) {
//     this.name = name;
//     this.email = email;
//     this.relation = relation;
//     this.number = number;
// }


// function AddressBook() {

//     this.contacts = [];

//     this.add = function () {
//         // this.contacts.push(new Contact("rew", "email@gmail.com", "bro", "31313113"));
//         // this.contacts.push(new Contact("taz", "email@gmail.com", "bro", "31313113"));
//         // this.contacts.push(new Contact("dale", "email@gmail.com", "bro", "31313113"));
//         // this.contacts.push(new Contact("yahra", "email@gmail.com", "bro", "31313113"));
//         let name = prompt("name?");
//         let email = prompt("email?");
//         let relation = prompt("relation?");
//         let phone = prompt("phone number?");
//         this.contacts.push(new Contact(name, email, relation, phone));
//         console.log(this.contacts);
//         //
//     };

//     // print
//     this.print = function () {
//         console.log(this.contacts)
//     }

//     // delete
//     this.delete = function () {
//         addressBook.print();
//         var deleted = prompt("Which Contact Do you Wish to Delete? (index number)");
//         if (deleted == null) {
//             alert("delete cancelled")
//         } else {

//             addressBook.contacts.splice(deleted, 1);
//         }
//     };
// }


// let addressBook = new AddressBook();





function Contact(name, email, relation, number) {
    this.name = name;
    this.email = email;
    this.relation = relation;
    this.number = number;
}


function Addressbook() {
    this.contacts = [];
    this.add = function () {
        this.contacts.push(new Contact("john", "reuelbeats@gmail.com", "brother", "7373737"));
        let bradley = new Contact("john", "reuelbeats@gmail.com", "brother", "7373737");
        let rew = new Contact("reuel", "reuelbeats@gmail.com", "brother", "7373737");
        this.contacts.push(john, bradley, rew);

    };
    this.delete = function () {
        this.contacts.splice(1, 1)
    };
    this.print = function () {
        console.log(this.contacts);
    };
}
let addressBook = new Addressbook();