//import {BilldAccount, CreateAccount} from './functions.js';

import {CreateAccount, BildAccount, CheckAccount, Consult, Deposit, Withdraw} from './functions.js'

//Imports Externos
import inquirer from 'inquirer';

//Imports Internos
import fs from 'fs'


//Imports Functions.js

function operation(){
    inquirer.prompt([{
        type : 'list',
        name: 'action',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depósitar Dinheiro',
            'Sacar Dinheiro',
            'Sair'
        ]
    }]).then((answer) => {
        
        var option = answer["action"]

        if(option === 'Criar Conta'){
            CreateAccount()
        }

        else if(option == 'Consultar Saldo'){

            inquirer.prompt([{
                type : "input",
                name : "nome",
                message : "Digite seu nome"
            }]).then((answer) => {
                var nome = answer["nome"]
                var check = CheckAccount(nome)

                if(check){

                    console.log(`R$ ${Consult(nome)}`)
                    
                } else{
                    console.log("Conta inválida, tente novamente")
                    operation()
                }
            })


        }

        else if(option == 'Depósitar Dinheiro'){
            inquirer.prompt([{
                type : "input",
                name : "nome",
                message : "Digite seu nome"
            }]).then((answer) => {
                var nome = answer["nome"]

                if(CheckAccount(nome)){

                    inquirer.prompt([{
                        type : "input",
                        name: "valor",
                        message : "Quanto você deseja depósitar? "
                    }]).then((answer) => {
                        var valor = answer["valor"]

                        Deposit(nome, valor)
                    })

                }
            }).catch((err) => {console.log(err)})
            
        }

        else if(option == 'Sacar Dinheiro'){

            inquirer.prompt([{
                type : "input",
                name : "nome",
                message : "Digite seu nome"
            }]).then((answer) => {
                var nome = answer["nome"]

                if(CheckAccount(nome)){

                    inquirer.prompt([{
                        type : "input",
                        name: "valor",
                        message : "Quanto você deseja sacar? "
                    }]).then((answer) => {
                        var valor = answer["valor"]

                        Withdraw(nome, valor)
                    })

                }
            }).catch((err) => {console.log(err)})


            
        }

        else if(option == 'Sair'){

            process.exit()
            
        }





    }).catch((err) => {console.log(err)})
}

operation()


export {operation}