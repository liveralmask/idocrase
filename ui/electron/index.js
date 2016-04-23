var electron = require( "electron" );
var opjs = require( "./scripts/opjs.js" );

var AppLog = function(){};
AppLog.prototype.write = function( type, msg ){
  style = "";
  switch ( type ){
  case "dbg": style = "\u001b[36m"; break;
//  case "inf": style = ""; break;
  case "wrn": style = "\u001b[33m"; break;
  case "err": style = "\u001b[31m"; break;
  }
  console.log( opjs.string.format( "{0}{1}\u001b[0m", style, msg ) );
};
opjs.log.set( new AppLog() );

electron.app.on( "window-all-closed", function(){
//  opjs.log.dbg( "window-all-closed" );
  electron.app.quit();
});

electron.app.on( "ready", function(){
  var main_window = new electron.BrowserWindow({
    width:  800,
    height: 600,
    title: "idocrase-ui"
  });
  main_window.loadURL( opjs.string.format( "file://{0}/index.html", __dirname ) );
  
  main_window.on( "closed", function(){
//    opjs.log.dbg( "closed" );
    main_window = null;
  });
});
