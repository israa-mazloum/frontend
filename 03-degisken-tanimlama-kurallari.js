// js de isimlendirme NASİL YAPİLİR 


//camelCASE kullanımı :

let fullName = ""          //true
let kodluyoruzServer = "" // şeklinde yazılır 


let fullname =""               // false 
let kodluyoruzserverinfo =""   // false
let kodluyoruz_server_info ="" // false
let kkodluyoruzSERverinfo =""  // false


// let firstName = "hakan", lastName= "kaya"    // kullanmak yerine iki satır alt alta cod okunurluğu için daha iyi
let firstName = "hakan"
let lastName= "kaya"                            // cod okunurluğun önemi 
console.log(firstName, lastName)


//UPPER_CASE kullanımı
const password ="2516"              // false 
const PASSWORD ="49846"             //sabit bilgiler büyük harflerle tanımlanır
const SERVER_PASSWORD = "561640"    //TRUE 

// değişkenlerde turkce ve diğer dillerin kullanımı :
let türkçeBilgi ="deneme türkçe bilgisi yazdiriyor"         //false
console.log(türkçeBilgi)

let turkceBilgi ="bu şekilde yazılmaz değişken isimlerine turkçe karakteri verilmez "
console.log(turkceBilgi)


let info = "türkçe karakteri yazdiriyor"
console.log(info)

// anlamsız değişken adları kullanılmaz!
let x = 1;          // false 

// boolean tanımlanırken is/has kullanımı :
let isActive = true 
let hasPassword = false 


// line length < 80 
// yazılan bir satrın 80 karakterden fazla olmaması gerekiyor.