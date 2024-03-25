// veri turunu öğrenmek -- typeof -- :

let price = 111
let strinPrice = "111"
let hasPassword = true 

console.log(

    "price:",               // typeof ( gelen bilgiye bakabiliriz) turunu yazdirir
    typeof(price)
)

console.log(
    "price:",
    typeof(stringPrice)
)

console.log(
    "hasPassword:",
    typeof(hasPassword)
)


/* typeof ("11") === "string"  ---> true 
typeof a gelen bilgiye bu olup olmadığını kontrol ediyor (=== kullanarak) doğru mu yanliş mi ? diye*/
,


// string (metinsel) bilgileri int ve floata dönüştürmek:

let number1 = "11"
number1 =  parseInt(number1) 
console.log("number1:", number1 , typeof(number1) )   //rengi değişik geldi rwakamsal bir ifade gösterir


let number2 = "11px" 
number2 =  parseInt(number2) 
console.log("number2:", number2 , typeof(number2) ) 


let number3 = "1.23"            //"11px" şekilinde yazdiğimizda yabliş verecek (number --> sadece rakam aliyor)
number3 =  Number(number3)      // içerisinde sadece sayo varsa ve başka bir karakter yoksa ancak çevirebiliyor.
console.log("number3:" ,number3 , typeof(number3) ) // number ile dönüştürmek için vigüllü sayı da olabilir 


let number4 = "11.5px" 
number4 =  parseFloat(number4) 
console.log("number4:", number4 , typeof(number4) ) 

let number5 = "11.5px"                          // number karakter almaz sadece rakam alır ---> NaN
number5 =  Number(number5) 
console.log("number5:", number5 , typeof(number5) ) 


let number6 = "11.6px"      // NaN hata verecek çünkü number sadece rakamları alıyor karakter olmadan
number6 =  Number(number6) 
console.log("number6:", number6 , typeof(number6) ) 


// number veri tipinin string e dönüştürmek

let number7 = 55                // veri (bilgi)
number7.toString()
console.log(number7, typeof(number7)) // burada typeof(number 7) içindeki bilginin turunu belirtir--> 55 verinin turu nedir ? number diye yazdirir

