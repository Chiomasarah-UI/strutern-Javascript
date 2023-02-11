function Multiply(val1, val2) {
    return val1 * val2;
};

console.log = Multiply(10,20);

let FirstName = 'Chioma ';
let LastName = 'Abana ';
let Track = 'Frontend ';
let skills = 'html, css, Javascript and Photoshop ';
let Favourite = 'Pink';
let Independence = '1960';

let result = "my name is " + LastName + FirstName + ". my favourite color is" + Favourite + "and my country Nigeria got her independence in" + Independence + ".";
let Result = "my track is " + Track + " with mastery of " + skills;
console.log(result);
console.log(Result);