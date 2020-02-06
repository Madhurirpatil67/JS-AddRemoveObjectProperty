let user={
    fName:"Madhuri",
    lName:"Patil",
    communication:{
        contact:"9966532441",
        emailId:"madhupatil123@gmail.com"
    },
    display:function()
    {
      console.log(`FullName:${this.fName} ${this.lName}`);
      console.log(`Mobile:${this.communication.contact} Email: ${this.communication.emailId}`);
    }
}

user.display();

//Remove property from object
delete user.communication.contact;
user.display();

//Add Property
user.age=27;

//add method
user.displayAge=function(){
    console.log("Age:",user.age);
}
user.displayAge();

//we can not delete method 

