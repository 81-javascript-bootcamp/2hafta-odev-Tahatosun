/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  }
}

var myCarDetails = car.displayDetails;
myCarDetails();


//#region  SORU 1 ÇÖZÜMLERİ

//Çözüm 1:bind

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();

//Çözüm 2: call
var myCarDetails = car.displayDetails;
myCarDetails.call(car);

//Çözüm 3: apply

var myCarDetails = car.displayDetails;
myCarDetails.apply(car);

//#endregion


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  if(typeof name == "string"){

    var words = name.trim().split(" ");

    for (let i = 0; i < words.length; i++) {
      if(words[i].length<=2)  return false;      
    }

    return true;
  }

  return false;
}



/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

//#region SORU 3 ÇÖZÜMLERİ

//Çözüm 1: call
summary.call(book, "dystopian", "1932");

//Çözüm 2: apply
summary.apply(book, ["dystopian", "1932"]);

//Çözüm 3: bind
var summaryBindedFunc = summary.bind(book, "dystopian", "1932");
summaryBindedFunc();

//#endregion
