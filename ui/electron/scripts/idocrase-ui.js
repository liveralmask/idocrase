//alert( "idocrase-ui" );

var AppLog = function(){};
AppLog.prototype.write = function( type, msg ){
  alert( msg );
};
opjs.log.set( new AppLog() );

opjs.document.set( document );

var g_element = opjs.document.element;
var g_event = opjs.document.event;

g_event.add( opjs.document.get(), "DOMContentLoaded", function(){
try{
  var editor = g_element.get( "editor" );
  
  var viewer = g_element.get( "viewer" );
  
}catch( err ){
  var error = g_element.get( "error" );
  var div = g_element.create( "div" );
  g_element.add( div, g_element.create( "textarea", {
    style: "width: 100%; height: 100%; color: red; border: 0; resize: none;",
    readonly: true
  }, { text: err.stack } ) );
  g_element.html( error, div.innerHTML );
}
});
