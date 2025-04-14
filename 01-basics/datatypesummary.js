// primitive datatype:(call by value)

// 7 types: String,number,Bolean,undefined,null,BigInt,Symbol

let str="hello";
 let number=110;
 let number2=100.3

 let myvalue=true;
 let yourScore;
 let mynullvalue=null;
 let mybigint = 2511135225484556512358461359n;
  let id=Symbol("134");
  let id2=Symbol("134");
   console.log(id===id2);
   //symbol is a unique value
   // it is not equal to any other value 

/******************************************************************************************************************/

// Reference datatype: (call by reference)

// 3 ttpes: object, array, functoion

let myobject={
    name:"sanchit",
    id:"mymail.com",
    upiid:"25426@upi"

}

let myarray=["sanchit","mymail.com",25426];

const myfunction=function(){
    console.log("hello world");
    
}
   