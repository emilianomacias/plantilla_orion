//if (Meteor.isServer) {
UsuarioStandard = new Roles.Role('usuarioStandard');
UsuarioCaptura = new Roles.Role('usuarioCaptura');

/**
 * Allow the actions of the collection
 */
// UnderpaidWorker.allow('collections.posts.index', true); // Allows the role to see the link in the sidebar
// UnderpaidWorker.allow('collections.posts.insert', false); // Allows the role to insert documents
// UnderpaidWorker.allow('collections.posts.update', true); // Allows the role to update documents
// UnderpaidWorker.allow('collections.posts.remove', true); // Allows the role to remove documents
// UnderpaidWorker.allow('collections.posts.showCreate', false); // Makes the "create" button visible
// UnderpaidWorker.allow('collections.posts.showUpdate', true); // Allows the user to go to the update view
// UnderpaidWorker.allow('collections.posts.showRemove', true); // Shows the delete button on the update view

/**
 * Set the index filter.
 * This part is very important and sometimes is forgotten.
 * Here you must specify which documents the role will be able to see in the index route
 */
// UnderpaidWorker.helper('collections.posts.indexFilter', {}); // Allows the role to see all documents
//Usuario standar solo podra ver la tabla
UsuarioStandard.helper('collections.registros.indexFilter', {});
UsuarioStandard.allow('collections.registros.index', true); // Allows the role to see the link in the sidebar
UsuarioStandard.allow('collections.registros.insert', false); // Allows the role to insert documents
UsuarioStandard.allow('collections.registros.update', false); // Allows the role to update documents
UsuarioStandard.allow('collections.registros.remove', false); // Allows the role to remove documents
UsuarioStandard.allow('collections.registros.showCreate', false); // Makes the "create" button visible
UsuarioStandard.allow('collections.registros.showUpdate', false); // Allows the user to go to the update view
UsuarioStandard.allow('collections.registros.showRemove', false); // Shows the delete button on the update view
console.log("Se creo rol usuarioStandard");
//Usuario captura podra ver agregar y modificar la tabla
//Pero no podra eliminar
/**
 * Set the index filter.
 * This part is very important and sometimes is forgotten.
 * Here you must specify which documents the role will be able to see in the index route
 */
UsuarioCaptura.helper('collections.registros.indexFilter', {});// Allows the role to see all documents
/**
 * Allow the actions of the collection
 */
UsuarioCaptura.allow('collections.registros.index', true); // Allows the role to see the link in the sidebar
UsuarioCaptura.allow('collections.registros.insert', true); // Allows the role to insert documents
UsuarioCaptura.allow('collections.registros.update', true); // Allows the role to update documents
UsuarioCaptura.allow('collections.registros.remove', false); // Allows the role to remove documents
UsuarioCaptura.allow('collections.registros.showCreate', true); // Makes the "create" button visible
UsuarioCaptura.allow('collections.registros.showUpdate', true); // Allows the user to go to the update view
UsuarioCaptura.allow('collections.registros.showRemove', false); // Shows the delete button on the update view
 //}
 console.log('Se creo rol usuarioCaptura');

