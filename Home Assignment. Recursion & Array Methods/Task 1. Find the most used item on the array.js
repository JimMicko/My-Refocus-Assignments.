const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
   ]
   filterWebDeveloper=arr.filter(function(value){
    return value == "Web Developer";
   })
   filterRefocus=arr.filter(function(value){
    return value == "Refocus";
   })
   filterAwesome=arr.filter(function(value){
    return value == "Awesome";
   })
   countWebDeveloper=filterWebDeveloper.length
   countRefocus=filterRefocus.length   
   countAwesome=filterAwesome.length

   objectCount={
    "Web Developer":countWebDeveloper,
    "Refocus":countRefocus,
    "Awesome":countAwesome
   }
   console.log(objectCount)