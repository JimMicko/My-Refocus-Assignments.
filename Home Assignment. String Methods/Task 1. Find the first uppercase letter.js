const str="there is a storm coming to the East of the Philippines";
const upperStr=str.replace(/[^A-Z]/g,'');
const firstUppercase=upperStr.charAt(0)
console.log(firstUppercase);