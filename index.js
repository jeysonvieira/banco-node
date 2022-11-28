//import {BilldAccount, CreateAccount} from './functions.js';

import {nome, CreateAccount, BildAccount} from './functions.js'

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

        }

        else if(option == 'Deoósitar Dinheiro'){
            
        }

        else if(option == 'Sacar Dinheiro'){
            
        }

        else if(option == 'Sair'){
            
        }





    }).catch((err) => {console.log(err)})
}

operation()

export {operation}




