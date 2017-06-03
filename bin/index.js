#!/usr/bin/env node

var cmd = require('node-cmd');
var comand = process.argv.slice(2);
var folder = process.argv.slice(3);

switch (comand.slice()[0]) {
  case "install":
        create();
    break;  
  default:
    console.log("Comando invalido" + comand.slice()[0] + "hee");
}


// Funciones

function create(){
    return cmd.get(
        `
            wget https://download.sublimetext.com/sublime_text_3_build_3126_x64.tar.bz2
        `,
        function(data, err, stderr){
            if (!err) {console.log(`\n\nproyecto creado con exito! \n\nComandos para iniar el proyecto: \n\n cd ${folder} \n npm start \n`)} else {console.log('error', err)}
        }
    );
};

/*

git clone https://github.com/luisvilches/fastify.js.git ${folder}
            wget https://download.sublimetext.com/sublime_text_3_build_3126_x64.tar.bz2
            cd ${folder}
            rm -r .git
            rm README.md
            npm install express cors jwt-simple method-override moment mongoose body-parser --save


*/