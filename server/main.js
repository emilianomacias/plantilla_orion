


if (Meteor.users.find().count() == 0) {
	try{
 Accounts.createUser({
    profile: {
      name: 'Administrador'
    },
    username: "admin",
    email: "admin@mail.com",
    password: "admin",
  });


}
catch(e){
	console.log(e);
}finally{
 var adminId  = Meteor.users.findOne({profile:{name: 'Administrador'}})._id;
Roles.setUserRoles( adminId ,  ["admin"] );
console.log("Se creo el usuario " + adminId);
console.log('Mail: admin@mail.com');
console.log("User: admin");
console.log('Password: admin');
}




}




