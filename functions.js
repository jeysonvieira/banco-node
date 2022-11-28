//Imports Externos
import inquirer from 'inquirer'

//Imports Internos

import fs from 'fs'
import { operation } from './index.js'



//CRIAÇÃO DA CONTA DE UM USUÁRIO.


function CreateAccount(){
    console.log('Seja bem vindo(a) ao nosso banco!')

    BildAccount()


}


function BildAccount(){

    inquirer.prompt([{
        type: 'input',
        name : 'name',
        message : 'Digite seu nome'
    }]).then((answer) => {

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`./accounts/${answer["name"]}.json`)){
            console.log("Essa conta já existe")
            BildAccount()
        } else{
            fs.writeFileSync(`./accounts/${answer["name"]}.json`, '{"saldo" : 0}')
            console.log("conta criada!")
            operation()
        }





    }).catch((err) => {
        console.log(err)
    })


}





export {nome, BildAccount, CreateAccount}