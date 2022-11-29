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





function CheckAccount(name){

    if(fs.existsSync(`accounts/${name}.json`)){
        return true
    } else{
        return false
    }

    
}


function GetAccount(AccountName){
    const AccountJson = fs.readFileSync(`accounts/${AccountName}.json`, {
        encoding: 'utf8',
        flag : 'r'
    })

    return JSON.parse(AccountJson)

}




function Consult(nome){

    var json = JSON.parse(fs.readFileSync(`accounts/${nome}.json`))

    return json.saldo

}



function Deposit(nameUser, value){

    if(!value){
        console.log("ERRO NO DEPÓSTIO, TENTE NOVAMENTE MAIS TARDE!")
        Deposit()
    }

    var FileJson = GetAccount(nameUser)

    FileJson.saldo = parseFloat(value) + parseFloat(FileJson.saldo)

    console.log(`Seu saldo atual agora é de ${FileJson.saldo}`)

    var JsonString = JSON.stringify(FileJson)

    fs.writeFileSync(`accounts/${nameUser}.json`, JsonString, function(err){
        console.log(err)
    })

    console.log(JsonString)



}


function Withdraw(nameUser, value){

    if(!value){
        console.log("ERRO NO SAQUE, TENTE NOVAMENTE MAIS TARDE!")
        operation()
    }

    var FileJson = GetAccount(nameUser)

    if(parseFloat(value) > parseFloat(FileJson.saldo)){
        console.log(`VOCÊ NÃO POSSUI ESSE SALDO NA CONTA, SEU SALDO ATUAL É DE ${parseFloat(FileJson.saldo)}`)
        operation()
    } else{
        FileJson.saldo = parseFloat(FileJson.saldo) - parseFloat(value)

        console.log(`Seu saldo agora é de ${FileJson.saldo}`)

    var JsonString = JSON.stringify(FileJson)

    fs.writeFileSync(`accounts/${nameUser}.json`, JsonString, function(err){
        console.log(err)
    })
    }

    



}








export {BildAccount, CreateAccount, CheckAccount, Consult, Deposit, Withdraw}