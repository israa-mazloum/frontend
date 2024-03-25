// String Veri Türü İşlemleri ****

let email = "isramaz@gmail.com"
let firstName = "isra"
let lastName = "mazlm"



// string karakter sayisi ---> ** length **
console.log(email.length)     


//ilk karakteri bulmak --> [0]
console.log(firstName[0])  //----> ilk karakterini gösterecek ( h )
console.log(firstName.charAt(1))       // ---> ( s )  ikinci karakteri alıyor (1)

// büyük harf -- küçük harf 

firstName = firstName.toUpperCase()
console.log(firstName)  // firstNamme içindeki bilgiyi büyük harfle gelecektir


firstName = firstName.toLowerCase()
console.log(firstName)



// string içinde istediğimiz bilgiyi aramak ve yerini bulmak ----> ** search **

console.log(email.search("@"))  // mail in içerisindeki @ karakterinin yerini bulmak istiyorum 
console.log(email[7])           // 7 inci karakterde mail adresinin içinde ne var onu bulmak için kullanılır 

email.search(email[15])

email.search('olmayan') // -1


/* deneme 
email.search('fvnk') ------> (-1) gelecek olmayan bi şey yazdığımızda 

email.search('i')
0 
email.search('s')
1 */





// bilgiyi değiştir ---> ** replace ** 

email = email.replace('gmail.comm', 'kodluyoruz.org') // emaildeki değişmiş yenibilgi 
console.log(email)
/*
let kodluyoruzEmail = email.replace('kodluyoruz.org','gmail.com')
console.log(kodluyoruzEmail)*/



// istediğim bilgi var mı ---> ** includes ** 
email.includes('@')      //----->     true
email.includes('kfnl')   // ---->     false 


/* DENEME 2
email.search('slknv')
-1
email.includes('kdnva.')
false
*/



// belli bir yere kadar al --->  ** slice **  : ( DOMAİN BİLGİSİ ) 




/* DENEME 3
email.slice(0,10) 
'isramaz@gm' ------> 0 dan başlattığımızda email in ilk karakterini alıyor (i) aldı
email.slice(1,10) 
'sramaz@gm'    -----> burada (i) almadi çünkü 1 den başlattık dolaysıyla ikinci karakterden başlattı -->< sıfırdan başlatmamız gerekiyor
 */


// email.slice(7)    ------domain bilgisi verdi---------
//'@gmail.com' ------->        onu yazdıktan sonra domainin kendisi gelecektir 
 
let DOMAIN = email.slice(email.search("@") + 1)  // slice ile birlikte kesme işlemi yaptık 
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')) )  // sadece gmail kısmını aldık 


/**
 * DOMAIN.slice(0, DOMAIN.indexOf('.')) 
'gmail'
 * 
DOMAIN. indexOf('.')
5
DOMAIN.slice(0, 5)
'gmail'

 */
// istediğim bilgiyle başladı mı ? bitti mi ---> ** statWidth *** -- ** endWidth *** 

console.log(email.endsWith('com'))

/**
 * email.endsWith('@')
false
 email.endsWith('kodluyoruz.org')
false
email.endsWith('com')
true
 */



// ilk harflerini büyük yapmak 
firstName = "firstname"
lastName = "lastname"
/*  hata var 
  let fullName = ${firstName[0].toUpperCase()} ${firstName.slice(1).toLowerCase()} 
   ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()} 
*/
