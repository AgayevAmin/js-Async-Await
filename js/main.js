// Görev 1: Hava Durumu Sorgulama
// Tanım: Bu görev, belirli bir şehir için hava durumunu sorgulamayı kapsar. Şehir adı verildiğinde, o şehre ait güncel hava durumu bilgisi getirilmelidir.



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////



// function hava ( seher , successCallback ,errorCallback) {

//     setTimeout(()=>{
//         if(seher == 'Baki'){
//             successCallback('Buludlu')
//         }
//         else if(seher == "Sumqait"){
//             successCallback('alovlu')
//         }
//         else{
//             errorCallback("bele bir seher yoxdur")
//         }

//     }, 2000)
// }

// hava ("hay",
// function(message){
//     console.log(message)
// },

// function(error){
//     console.log(error);
// }
// );




///////////////////////////////////////////   PROMISE METHOD   //////////////////////////////////////////////////////




// //task2   hava durumu   promise usul

// function hava(seher){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             if(seher == "Baki"){
//                 resolve("buluddu")
//             }
//             else if(seher == "Sumqait"){
//                 resolve("alovlu")
//             }
//             else{
//                 reject("bele bir seherimiz yoxdur")
//             }
//         }, 2000);
//     })
// }

// hava( "sirvan")
// .then(message=> console.log(message))
// .catch(error=> console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function hava(seher) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (seher == "Baki") {
//                 resolve("buluddu");
//             } else if (seher == "Sumqait") {
//                 resolve("alovlu");
//             } else {
//                 reject("bele bir seherimiz yoxdur");
//             }
//         }, 2000);
//     });
// }

// async function getWeather(seher) {
//     try {
//         const result = await hava(seher);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getWeather("sirvan");













// Görev 3: Kitap Bilgisi Sorgulama
// Tanım: Bu görev, veritabanında mevcut olan kitaplar arasından belirli bir kitap adına göre sorgulama yapılmasını içerir. Kitabın yazarı ve yayın yılı gibi bilgileri getirir.



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////




// function books(kitab , successCallback ,errorCallback ){

//     setTimeout(() => {

//         if(kitab=="Harry Potter"  ){
//             successCallback("Anar  - 26.07.1997")
//         }
//         else if(kitab == "UcaN Quslar"){
//             successCallback("Samir - 31.01.1999")
//         }
//         else{
//             errorCallback("Bu kitabin melumati yoxdur")
//         }
//     }, 2000);
// }

// books("UcaN Quslar",
//     function(message){
//         console.log(message)
//     },
//     function(error){
//         console.log(error);
//     }

// )



////////////////////////////////////////////////    Promise Method  ////////////////////////////////////////////////////////

// function books(kitab){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {

//             if(kitab == "Harry Potter"){
//                 resolve("Anar - 26.07.1997")
//             }
//             else if(kitab == "Ucan Quslar"){
//                 resolve("Samir - 31.69.2072")
//             }
//             else{
//                 reject("bele bir kitab yoxdur")
//             }
//         }, 2000);
//     })
// }

// books("Harry Potter")
// .then(message =>console.log(message) )
// .catch(error =>console.log(error) )




///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////


// function books(kitab){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {

//             if(kitab == "Harry Potter"){
//                 resolve("Anar Nagilbaz - 26.07.1997")
//             }
//             else if(kitab == "Ucan Quslar"){
//                 resolve("Samiraldo - 31.69.2072")
//             }
//             else{
//                 reject("bele bir kitab yoxdur")
//             }
//         }, 2000);
//     })
// }

// async function kitabiDe(kitab){
//     try {
//         const result = await books(kitab)
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }

// }


// kitabiDe("Harry Potter")




//Görev 4: Kullanıcı Kaydı ve E-posta Bildirimi
//Tanım: Bu görev, yeni bir kullanıcı kaydı ve bu kaydı takiben bir hoş geldin e-postası gönderilmesini kapsar. Kullanıcının adı ve e-posta adresi kaydedilmeli ve ona bir e-posta gönderilmelidir.


//////////////////////////////////////////////////// Promise Method ///////////////////////////////////////////////

// function validateUser(username, email) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === 'user' && email === 'a@a') {
//           resolve("Giriş başarılı!");
//         } else {
//           reject("Kullanıcı adı veya email yanlış.");
//         }
//       }, 2000);
//     });
//   }
 
// validateUser('user', 'a@a')
// .then(message => console.log(message))
// .catch(error => console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function validateUser(username, email) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === 'user' && email === 'a@a') {
//           resolve("Giriş başarılı!");
//         } else {
//           reject("Kullanıcı adı veya email yanlış.");
//         }
//       }, 2000);
//     });
//   }

//   async function kitabiDe(username, email){
//         try {
//             const resolve = await validateUser(username, email)
//             console.log(resolve);
//         }
//         catch(error){
//             console.log(reject);
//         }
    
//     }
    
    
//     kitabiDe('user','a@a')



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////



//     function qeydiyat ( username, email , successCallback ,errorCallback) {

//         setTimeout(()=>{
//             if(username === 'user' && email === 'a@a'){
//                 successCallback('ugurla kecdin ')
//             }
//             else{
//                 errorCallback("bele bir seher yoxdur")
//             }

//         }, 2000)
//     }

//     qeydiyat("user", "a@a",
//     function (message) {
//         console.log(message);
//     },
//     function (error) {
//         console.log(error);
//     }
// );



//Görev 5: Kullanıcı Kaydı ve pasvord Bildirimi
//Tanım: Bu görev, yeni bir kullanıcı kaydı ve bu kaydı takiben bir hoş geldin e-postası gönderilmesini kapsar. Kullanıcının adı ve e-posta adresi kaydedilmeli ve ona bir e-posta gönderilmelidir.


//////////////////////////////////////////////////// Promise Method ///////////////////////////////////////////////

// function validateUser(username, pasvord) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === 'user' && pasvord === '1234') {
//           resolve("Giriş başarılı!");
//         } else {
//           reject("Kullanıcı adı veya pasvord yanlış.");
//         }
//       }, 2000);
//     });
//   }
 
// validateUser('user', '1234')
// .then(message => console.log(message))
// .catch(error => console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function validateUser(username, pasvord) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === 'user' && pasvord === '1234') {
//           resolve("Giriş başarılı!");
//         } else {
//           reject("Kullanıcı adı veya pasvord yanlış.");
//         }
//       }, 2000);
//     });
//   }

//   async function kitabiDe(username,pasvord){
//         try {
//             const resolve = await validateUser(username, pasvord)
//             console.log(resolve);
//         }
//         catch(error){
//             console.log(reject);
//         }
    
//     }
    
    
//     kitabiDe('user','1234')



//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////



//     function qeydiyat ( username, pasvord , successCallback ,errorCallback) {

//         setTimeout(()=>{
//             if(username === 'user' && pasvord=== '1234'){
//                 successCallback('ugurla kecdin ')
//             }
//             else{
//                 errorCallback("bele bir seher yoxdur")
//             }

//         }, 2000)
//     }

//     qeydiyat("user", '1234',
//     function (message) {
//         console.log(message);
//     },
//     function (error) {
//         console.log(error);
//     }
// );




//Görev 6: Ürün Fiyat Kontrolü ve İndirim Uygulaması
//Tanım: Bu görev, belirli bir ürünün fiyatını kontrol etmeyi ve belirli koşullar altında indirim uygulamayı içerir. Ürün ID'si verildiğinde, ürünün fiyatını kontrol eder ve uygunsa indirim yapar.



//////////////////////////////////////////////////// Promise Method ///////////////////////////////////////////////

// function validateUser(fiyat, indrim) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (fiyat === '1222' && indrim === '1000') {
//           resolve(" belirli bir ürünün fiyatını kontrol etmeyi");
//         } else {
//           reject("belirli koşullar altında indirim uygulamay.");
//         }
//       }, 2000);
//     });
//   }
 
// validateUser('1222', '1000')
// .then(message => console.log(message))
// .catch(error => console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function validateUser(fiyat, indrim) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (fiyat=== '1222' && indrim === '1000') {
//           resolve("belirli bir ürünün fiyatını kontrol etmeyi");
//         } else {
//           reject("belirli koşullar altında indirim uygulamay.");
//         }
//       }, 2000);
//     });
//   }

//   async function kitabiDe(fiyat, indrim){
//         try {
//             const resolve = await validateUser(fiyat, indrim)
//             console.log(resolve);
//         }
//         catch(error){
//             console.log(reject);
//         }
    
//     }
    
    
//     kitabiDe('1222','1000')



//////////////////////////////////////////////////// CALLBACK  METHOD  ///////////////////////////////////////////////



//     function qeydiyat ( fiyat, indrim, successCallback ,errorCallback) {

//         setTimeout(()=>{
//             if( fiyat === '1222' && indrim=== '1000'){
//                 successCallback('belirli bir ürünün fiyatını kontrol etmeyi ')
//             }
//             else{
//                 errorCallback("belirli koşullar altında indirim uygulamay")
//             }

//         }, 2000)
//     }

//     qeydiyat("1222", '1000',
//     function (message) {
//         console.log(message);
//     },
//     function (error) {
//         console.log(error);
//     }
// );




//Görev 7: Stok Durumu Kontrolü
//Tanım: Bu görev, belirli bir ürünün stok durumunu kontrol etmeyi içerir. Verilen ürün ID'sine göre stokta olup olmadığını kontrol eder ve buna göre bilgi sağlar.


//////////////////////////////////////////////////// CALLBACK  METHOD///////////////////////////////////////////////




// function yer(stok, successCallback ,errorCallback ){

//     setTimeout(() => {

//         if(stock=="kitab"  ){
//             successCallback("11111")
//         }
//         else if(stock == "defter"){
//             successCallback("222222")
//         }
//         else{
//             errorCallback(" melumati yoxdur")
//         }
//     }, 2000);
// }

// books("kitab",
//     function(message){
//         console.log(message)
//     },
//     function(error){
//         console.log(error);
//     }

// )



////////////////////////////////////////////////    Promise Method  ////////////////////////////////////////////////////////

// function yer(stok){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {

//             if(stok == "kitab"){
//                 resolve("1111111")
//             }
//             else if(stok == "kitab"){
//                 resolve("2222222")
//             }
//             else{
//                 reject(" melumat yoxdur")
//             }
//         }, 2000);
//     })
// }

// books("kitab")
// .then(message =>console.log(message) )
// .catch(error =>console.log(error) )




///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////


// function yer(stok){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {

//             if(stok == "kitab"){
//                 resolve("1111111")
//             }
//             else if(stok == "kitab"){
//                 resolve("2222222")
//             }
//             else{
//                 reject(" melumat yoxdur")
//             }
//         }, 2000);
//     })
// }

// async function kitabiDe(stok){
//     try {
//         const result = await yer(stok)
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }

// }


// kitabiDe("kitab")



//Görev 8: Film Bilgisi Sorgulama
//Tanım: Bu görev, veritabanındaki filmler arasından belirli bir film adına göre sorgulama yapmayı içerir. Film bulunursa ilgili bilgiler döndürülür.


/////////////////////////////////////////////////Callback////////////////////////////////////////////////////////////
//function film(films , successCallback ,errorCallback ){

    //     setTimeout(() => {
    
    //         if(films=="Harry Potter"  ){
    //             successCallback("Harry Potter  - 26.07.1997")
    //         }
    //         else if(films == "UcaN Quslar"){
    //             successCallback("UcaN Quslar - 31.01.1999")
    //         }
    //         else{
    //             errorCallback("Bu filmin melumati yoxdur")
    //         }
    //     }, 2000);
    // }
    
    // film("UcaN Quslar",
    //     function(message){
    //         console.log(message)
    //     },
    //     function(error){
    //         console.log(error);
    //     }
    
    // )
    
    
    
    ////////////////////////////////////////////////    Promise Method  ////////////////////////////////////////////////////////
    
    // function film(films){
    //     return new Promise((resolve,reject)=>{
    
    //         setTimeout(() => {
    
    //             if(films == "Harry Potter"){
    //                 resolve("Harry Potter - 26.07.1997")
    //             }
    //             else if(films == "Ucan Quslar"){
    //                 resolve("Ucan Quslar - 31.69.2072")
    //             }
    //             else{
    //                 reject("bele bir film yoxdur")
    //             }
    //         }, 2000);
    //     })
    // }
    
    // film("Harry Potter")
    // .then(message =>console.log(message) )
    // .catch(error =>console.log(error) )
    
    
    
    
    ///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////
    
    
    // function film(films){
    //     return new Promise((resolve,reject)=>{
    
    //         setTimeout(() => {
    
    //             if(films == "Harry Potter"){
    //                 resolve("Harry Potter - 26.07.1997")
    //             }
    //             else if(films == "Ucan Quslar"){
    //                 resolve("SUcan Quslar - 31.69.2072")
    //             }
    //             else{
    //                 reject("bele bir film yoxdur")
    //             }
    //         }, 2000);
    //     })
    // }
    
    // async function filmDe(films){
    //     try {
    //         const result = await film(films)
    //         console.log(result);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    
    // }
    
    
    // filmDe("Harry Potter")
    

//Görev 9: Kredi Skoru Kontrolü
//Tanım: Bu görev, belirli bir kullanıcının kredi skorunu kontrol etmeyi içerir. Kullanıcının kredi skoruna göre uygun bir yanıt verilir.


// function adam ( ad , successCallback ,errorCallback) {

//     setTimeout(()=>{
//         if(ad == 'Elmeddin'){
//             successCallback('100$')
//         }
//         else if(ad == "Eli"){
//             successCallback('200$')
//         }
//         else{
//             errorCallback("bele bir adam yoxdur")
//         }

//     }, 2000)
// }

// hava ("salam",
// function(message){
//     console.log(message)
// },

// function(error){
//     console.log(error);
// }
// );




///////////////////////////////////////////   PROMISE METHOD   //////////////////////////////////////////////////////




// //task2   hava durumu   promise usul

// function  adam (ad){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             if(ad == "Elmeddin"){
//                 resolve("100$")
//             }
//             else if(ad == "Eli"){
//                 resolve("200$")
//             }
//             else{
//                 reject("bele bir adam yoxdur")
//             }
//         }, 2000);
//     })
// }

// hava( "sirvan")
// .then(message=> console.log(message))
// .catch(error=> console.log(error))



///////////////////////////////////////  Async /Await  /////////////////////////////////////////////////////////

// function adam(ad) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ad == "Eli") {
//                 resolve("100$");
//             } else if (ad == "Elmeddin") {
//                 resolve("200$");
//             } else {
//                 reject("bele bir adam yoxdur");
//             }
//         }, 2000);
//     });
// }

// async function bank(ad) {
//     try {
//         const result = await adam(ad);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// bank("deli");


//Görev 7: Öğrenci Not Ortalaması Hesaplama
//Tanım: Bu görev, belirli bir öğrenci ID'si için not ortalamasını hesaplamayı kapsar. Öğrencinin notlarına göre ortalaması hesaplanır ve döndürülür.


///////////////////////////////////////////   PROMISE METHOD   /////////////////////////////////////////////////////
// function calculateAverage(studentId) {
//     const studentGrades = {
//       123: [70, 85, 90],
//       456: [80, 75, 88],
//       // diğer öğrenciler...
//     };
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (studentGrades[studentId]) {
//           const grades = studentGrades[studentId];
//           const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
//           resolve("Öğrencinin not ortalaması: ${average}");
//         } else {
//           reject("Öğrenci bulunamadı.");
//         }
//       }, 2000);
//     });
//   }
  
//  
//   calculateAverage(123)
//     .then(message => console.log(message))
//     .catch(error => console.log(error));




/////////////////////////////////////////// Callback     /////////////////////////////////////////////////////
// function calculateAverage(studentId, callback) {
//     const studentGrades = {
//       123: [70, 85, 90],
//       456: [80, 75, 88],
//       // diğer öğrenciler...
//     };
  
//     setTimeout(() => {
//       if (studentGrades[studentId]) {
//         const grades = studentGrades[studentId];
//         const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
//         callback(null, `Öğrencinin not ortalaması: ${average}`);
//       } else {
//         callback("Öğrenci bulunamadı.", null);
//       }
//     }, 2000);
//   }
  
//   calculateAverage(123, (error, message) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(message);
//     }
//   });


// ///////////////////////////////////////////   Async /Await    /////////////////////////////////////////////////////
//   function calculateAverage(studentId) {
//     const studentGrades = {
//       123: [70, 85, 90],
//       456: [80, 75, 88],
//       // diğer öğrenciler...
//     };
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (studentGrades[studentId]) {
//           const grades = studentGrades[studentId];
//           const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
//           resolve("Öğrencinin not ortalaması: ${average}");
//         } else {
//           reject("Öğrenci bulunamadı.");
//         }
//       }, 2000);
//     });
// }

// async function calculateAverages(studentId){
//         try {
//             const result = await calculateAverage(studentId)
//             console.log(result);
//         }
//         catch(error){
//             console.log(error);
//         }
    
// }
    
    
// calculateAverages(5)

