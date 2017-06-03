#!/usr/bin/env node

var cmd = require('node-cmd');
const R = require('request');
var comand = process.argv.slice(2);
var folder = process.argv.slice(3);
var fs=require('fs');

switch (comand.slice()[0]) {
    case "install":
            install();
        break;
    case "remove":
            remove();
        break;
    default:
        console.log("Comando invalido");
}

function install(){
    R(`http://localhost:5000/pkg/${folder}`,function(error,response,body){
        if(error) {
            console.log(error)
        }else{
            var cuerpo = JSON.parse(body);
            return cmd.get(
                `cd /opt/${folder}`,function(data, err, stderr){
                    if (err) {
                        cmd.get(
                            `   git clone ${cuerpo.response.wget} /opt/${folder}
                                cd /opt/${folder}
                                mv ${folder}.desktop /usr/share/applications/${folder}.desktop
                            `,function(data, err, stderr){
                                if (!err) {
                                    console.log(`${folder} instalado correctamente`)
                                }else{
                                    console.log(`Error al instalar ${folder}`)
                                }
                            }
                        );
                    }else{
                        console.log(`${folder} ya se encuentra instalado.`)
                    }
                }
            );
        }
    })
};

function remove(){
    R(`http://localhost:5000/pkg/${folder}`,function(error,response,body){
        if(error) {
            console.log(error)
        }else{
            var cuerpo = JSON.parse(body);
            return cmd.get(
                `cd /opt/${folder}`,function(data, err, stderr){
                    if (!err) {
                        cmd.get(
                            `   rm /usr/share/applications/${folder}.desktop
                                rm -rf /opt/${folder}
                            `,function(data, err, stderr){
                                if (!err) {
                                    console.log(`${folder} desintalado correctamente`)
                                }else{
                                    console.log(`Error al desinstalar ${folder}`)
                                }
                            }
                        );
                    }else{
                        console.log(`${folder} no se encuentra instalado.`)
                    }
                }
            );
        }
    })
};