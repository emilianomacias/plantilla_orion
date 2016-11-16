
//Se define la coleccion y los nombres a utilizar en caso de editar,ingresar o consultar los registros

Registros= new orion.collection('registros', {
  singularName: 'registro', // The name of one of these items
  pluralName: 'registros', // The name of more than one of these items
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Registros' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    // here we set which data columns we want to appear on the data table
    // in the CMS panel
    columns: [
     { data: "nombre", title: "Nombre" },
     { data: "apellido", title: "Apellidos" },
     { data: "direccion", title: "Dirección" },
     { data: "edad", title: "Edad" },
     { data: "telefono", title: "Telefono" },
    ]
  }
});


//Se define los tipos de campos que seran utilizados para autoform
//
Registros.attachSchema(new SimpleSchema({
	nombre:{ type:String, label: "Nombre", optional: true},
	apellido:{ type:String, label: "Apellido", optional: true},
	direccion:{ type:String, label: "Dirección", optional: true},
	edad:{ type:Number, label: "Edad", optional: true},
	telefono:{ type:String, label: "Telefono", optional: true}
}));

if (Meteor.isServer) {
	Meteor.publish('getRegistros',function(){
		return Registros.find();
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('getRegistros');
}