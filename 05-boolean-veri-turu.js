// ******* boolean veri turu ile çalışma :


// 0 ve 1 kullanma : 

let isActive = false    //0
isActive = true         //1
console.log(isActive)





let userName;                               //tanımı yaptım 
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11")                   //true
Boolean("0")                    //true
Boolean("")                     // false içerisine boş bir veri olduğu için 





userName = "user"
console.log("user name var mı:", Boolean(userName)) // true geldi çünkü içerisine bir bilgi var 


// NOT : boolean içerisine veri varsa --->true .. yoksa --> false diye gösterir



// 0 , -0 , null , false , NaN , undefined , ("") ---> 

Boolean(0)
//false
Boolean(-0)             // sıfırın dişindaki her şeye true veriyor 
//false
Boolean(-0.1)
//true

Boolean( 0 == 0 )           
//true
Boolean( 1 == 0 )
//false

userName
'user'
if(userName, length > 0)
    
Boolean(userName, length > 0) 
