// template literals kullanimi ***

let userName = "isra"
const DOMIAN = "kodluyoruz.org"

let email = userName + "@" + DOMIAN  
//console.log("Merhaba", userName, "hoşgeldiniz", "mail adresi :", email)     // ekrana yazdirmaya çalışıyoruz


// ${} bunu kullanarak : kappatmadan birden fazla satır ve istediğimiz kadar işlem yapabiliriz

let info = `Merhaba  ${userName} sitemize hoşgeldiniz.. 
mail adresin:${email} 
 mail adresinin uzunluğu: ${email.lengtth} burada yazabilirsiniz 
  borcunuz : ${ ( 2+ 3 )* 10 } TL
  gunun saat bilgisi : ${new Date().getHours()} 
  
  kisa isminiz ${userName[0]}.
  `  // birden fazla satır içerisinde bu bilgileri yazabildik
    // ${email.lengtth} : uzunluk bilgisine ulaşıyor.
    // ${userName[0]} userName bilgisinin sıfırını bilgisine ulaşsın 


console.log(info)
