// number veri turu tanıtmak

let price = 100
let tax = 0.5
let priceTax = price * tax 
let total = price + tax
console.log(
    "fiyat:", price,
    "KDV oranı:", tax, 
    "KDV Tutarı:", priceTax,
    "fiyat:", total
    )



// string tanımlama kullanımı :

let stringNumber = "11"
console.log(stringNumber)       // metinsel bir şekilde gösterir--rengi değişti


let newNumber = Number(stringNumber)        // constact içerisine istediğimiz bilgiyi gönderebilirz
console.log(newNumber)                      // bu şekilde rakamsal olarak tutulabiliyor 



console.log("Number constractor içerisine bir bilgi gönderildi:",Number("111"))


// arttırma ve azaltma islemleri

let counter = 156
counter = counter + 1   // uzun yöntemi 
counter += 1;
counter ++;              // kısa yolu // bir arttırma 
console.log(counter) 

counter --;
counter -= 1;
console.log(counter)        // bir azalt


counter *= 10;
console.log(counter)        // çarpma işlemi 


counter /= 2;               // bölme işlemi
console.log(counter) 

//işlem önceliği

console.log( 2 + 3 * 10 )   // çarpma sonra toplama 

console.log( ( 2 + 3 ) * 10 )  


// mod (kalan) alma %:
// sayi tek mi çift mi ???

console.log( 3 % 2 ) // 2 ye bölüp kalan 1 olacak ve sonuc = 1 olacak 
console.log( 15 % 2 )  // kalan = 1 sayi TEK demektir 
console.log( 14 % 2 )  // kalan = 0 kalan yoktur ve sayi ÇİFT demektir 
console.log( 17 % 2 )  // kalan = 1 sayi tek anlamına gelir.


// 8 ürün alan koliye tum ürünler siğiyor mu ?

console.log( 8 % 8 )  // 0
console.log( "koli ornegi",  18 % 2 ) 
console.log( "koli kalan ornegi",  18 % 8 ) // 18 tane urun varsa ve bunları 8 şekilde siğidiracak şekikde --> elimde urun kalacak mı // 2 tane urun elimde kaldı

// us alma ** :

console.log( 2 * 2 * 2 * 2 )
console.log( 2 ** 4 )
console.log( 5 ** 3 ) 

// asaği yuvarlama işlemi ---> MATH - FLOOR :  ---> kütüphaneleri kullanılır 

console.log( "asagi yuvarlama:", Math.floor(1.7) )          // aşağı yuvarlama yapar = 1 
console.log( Math.floor(1.9) )          // 1

// yukari yuvarlama işlemi ---> MATH - CEİL :

console.log( "yukari yuvarlama:", Math.ceil(1.9) )            //  == 2 yukari yuvarlamak için kullanılır
console.log( Math.ceil(1.3) ) 

// yakina yuvarlama işlemi ---> MATH - ROUND : --< 1.4 (aşağı yuvarlar)  ----> 1.5 (yukariya yuvarlar)
console.log( "yakina yuvarlama:" , Math.round(1.2) )        // 1.2 ---> 1
console.log( "yakina yuvarlama 2 :" , Math.round(1.4) )        // 1
console.log( "yakina yuvarlama 3:" , Math.round(1.5) )      // 2

