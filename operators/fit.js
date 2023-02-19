
let scienceSubject = ("Physics " + "Chemistry " + "Biology " + "Technical Drawing");
let socialScienceSubjects  = ("Accounting " + "Commerce " + "Marketing " + "Geography ");
let artSubjects  = ("Government " + "Economics " + "Literature " + "History ");
let generalSubjects  = ("English " + "Mathematics ");

function studentInput() {
    var art  = ("Government " + "Economics " + "Literature " + "History ");
    var y = document.getElementById("fname").value;
    var x = document.getElementById("lname").value;

    if ( x == "art"){
        document.getElementById("demo").innerHTML = "Dear " + y + " these are the courses you offer " + art + " " + generalSubjects;
    } else if ( x == "science"){
        document.getElementById("demo").innerHTML = "Dear " + y + " these are the courses you offer " + scienceSubject + " " + generalSubjects;
    } else if ( x == "social science"){
        document.getElementById("demo").innerHTML = "Dear " + y + " these are the courses you offer " + socialScienceSubjects + " " + generalSubjects;
    } else{
        document.getElementById("demo").innerHTML = "Dear " + y + " these are the courses you offer " + generalSubjects;
    }
};




function solve(){
    const num = document.getElementById("power").value;
    const nearestPowerOfTwo = num => {
   // dealing only with non-negative numbers
   if(num < 0){
      num *= -1;
   }
   let base = 1;
   while(base < num){
      if(num - base < Math.floor(base / 2)){
         return base;
      };
      base *= 2;
   };
   return base;
};
document.getElementById("term").innerHTML = "The number " + (nearestPowerOfTwo(num)) + " is the power of 2 nearest to  " + num;
};





