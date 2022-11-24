let balance=0
function createBankAccount(name){
    console.log('Hello '+name+','+B+'Welcome to Metro Bank'+B)
    return createBankAccount
}   
function balanceInquiry(){
    balance
    console.log('You have ₱'+balance+' in your account.'+B)
    return balanceInquiry
}
function depositAmount(amount){
    balance=balance+amount;
    console.log('Transaction Completed.'+B+'You have Deposited ₱'+amount+', The remaining balance in your account is ₱'+balance+B)
    return depositAmount
}
function withdrawAmount(amount){
    if (amount>balance){
        console.log('Transaction Failed.'+B+'You have an Insuficient Balance in your account.'+B)
    }    
    else {
        balance=balance-amount;
        console.log('Transaction Completed.'+B+'You have Withdrawn ₱'+amount+', The remaining balance in your account is ₱'+balance+B)
        return withdrawAmount
    }
}
let B="\r\n"
createBankAccount('Jim');
depositAmount(2000);
withdrawAmount(1000)
balanceInquiry()
withdrawAmount(1500)