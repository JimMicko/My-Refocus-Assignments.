const bankAccount={
    "bankAccountID":[
        {
            "accountNumber":"0123456789",
            "balance":200000,
            "createdAt":"November 21, 2022",
        }
    ],    
            
    "credentials":[
        {
            "username":"juandelacruz",
            "password":"11223344",
            "pin":"1234"
        }
    ],
    "debitCard":"1111-2222-3333-4444",
    "firstName":"Juan",
    "lastName":"Dela Cruz",
    "birthDate":"March 31, 2022",
    "validID":[
        {
            "typeOfID ID":"Driver's License",
            "IDnumber":"369258147",
        }
    ],
    "addres":"Camarin, Caloocan City",

    "getBankAccountDetails":function(){
        for(item of this.bankAccountID){
            console.log("Account Number: "+item.accountNumber);
            console.log("Balance: ₱"+item.balance);
            console.log("Created at:"+item.createdAt)
        }
        for(item of this.credentials){
            console.log("Account Number: "+item.accountNumber);
            console.log("Password: "+item.password);
            console.log("Pin: "+item.pin);
        }
    },
    "withdrawMoney": function(username,password,amount){
        for(item of this.credentials){
            if((username===item.username)&&(password===item.password)){
                console.log("You have Withdraw ₱"+amount)
                for(item of this.bankAccountID){
                    item.balance-=amount
                    console.log("Your Balance is now ₱"+item.balance+". Account Number Used is: "+item.accountNumber)
                }
            }else{
                console.log("Your Username and Password does not match")
            }
            
        }
    },
    "depositMoney":function(accountNumber,depositAmount){
        for(item of this.bankAccountID){
            if(accountNumber===item.accountNumber){ 
                console.log("You have send ₱"+depositAmount+" worth of money to "+item.accountNumber)
        }else{
            console.log("This Account Number does not Exist")
        }
    }
}
}
bankAccount.getBankAccountDetails()
//bankAccount.withdrawMoney("awdwad","wadw",100000) wrong sample
bankAccount.withdrawMoney("juandelacruz","11223344",50000)
bankAccount.depositMoney("0123456789",70000)
//bankAccount.depositMoney("1122334455",70000) wrong sample