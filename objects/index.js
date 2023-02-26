function  instagramPost(handle, content, imageLink, views, likes){
    this.handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}

const firstPost = new instagramPost("chioma_abana", "#just voted",  "https://live.mrf.com", "200", "120")
const secondPost = new instagramPost("chibaby", "my vote must count", "www.instagram.com", "250", "180")

console.log(firstPost);
console.log(secondPost);




//Factory function

function createPerson(x) {
    return {
        name: x.name,
        age: x.age,
        location:x.location
    }
  }
  
  const musaDetails = createPerson({name: 'Musa Dawodu', age: '19', location: 'Lekki, Lagos State'})
  //console.log(musaDetails);
  
  function createJambScores(x) {
    return {
        ENG: x.ENG,
        GOVT: x.GOVT,
        LIT: x.LIT,
        CRK: x.CRK
    }
  }
  
  const musaJambScores = createJambScores({ENG: 70, GOVT: 85, LIT: 82, CRK: 94});
  //console.log (musaJambScores);
  
  musaDetails.createJambScores = musaJambScores;
  console.log(musaDetails);



  // number 4  
  // ans 1) Using Object.assign()
  const car1 = {
    ridder: "lewis Hamilton",
    carBrand: "Mercedis",
    year: 2023,
    Age: 38,
  };
  
  const car2 = Object.assign({}, car1);
  
  console.log(car1);
  console.log(car2);

  car2.year  = 2018;
  car2.carBrand = "ferrari";

  console.log(car2);

// ans 2) Using spread syntax(...)

const car3 = { ...car2 };
car3.ridder = "peter david";
console.log({ car2 });
console.log({ car3 });


// ans 3) Using the method JSON.parse(JSON.stringify())
// JSON - JavaScript Object Notation
const car4 = JSON.parse;
car4.age = 26;
console.log({ car4 });




//number 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (const key in presidentialCandidates) {

    console.log(presidentialCandidates[key] + " is the presidential candidate of " + (key));
}
 