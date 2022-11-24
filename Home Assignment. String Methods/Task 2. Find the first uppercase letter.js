const str="no more rainy days here, sun is about to show up";
const upperStr=str.replace(/[^A-Z]/g,'');
    if (upperStr==""){
        console.log("There are no Upper-case letters")
    }
const firstUppercase=upperStr.charAt(0)

console.log(firstUppercase);