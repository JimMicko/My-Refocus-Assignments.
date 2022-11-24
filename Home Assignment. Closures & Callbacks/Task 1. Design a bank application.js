function createBankAccount(name){
    let balance=0
    console.log('Hello '+name+','+B+'Welcome to Metro Bank'+B)
    
    function balanceInquiry(){
        balance
        console.log('You have ₱'+balance+' in your account.'+B)
    }
    function depositAmount(amount){
        balance=balance+amount;
        console.log('Transaction Completed.'+B+'You have Deposited ₱'+amount+', The remaining balance in your account is ₱'+balance+B)
    }
    function withdrawAmount(amount){
        if (amount>balance){
            console.log('Transaction Failed.'+B+'You have an Insuficient Balance in your account.'+B)
        }    
        else {
            balance=balance-amount;
            console.log('Transaction Completed.'+B+'You have Withdrawn ₱'+amount+', The remaining balance in your account is ₱'+balance+B)
        }
    }
    return {balanceInquiry, depositAmount, withdrawAmount}
}

let B="\r\n"
const account=createBankAccount('Jim');
account.depositAmount(2000);
account.withdrawAmount(1000)
account.balanceInquiry()
account.withdrawAmount(1500)