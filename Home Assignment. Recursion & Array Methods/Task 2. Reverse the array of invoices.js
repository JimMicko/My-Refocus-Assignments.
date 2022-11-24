let InvoiceList=[
    "Invoice 008",
    "Invoice 007",
    "Invoice 006",
    "Invoice 005",
];
function insertToBottom(){
    console.log(InvoiceList.join(" "));
    
}

function reverseList(){
    InvoiceList.reverse();
    console.log(InvoiceList.join(" "));
}

InvoiceList.push("Invoice 004",);
InvoiceList.push("Invoice 003",);
InvoiceList.push("Invoice 002",);
InvoiceList.push("Invoice 001",);

insertToBottom();
reverseList()