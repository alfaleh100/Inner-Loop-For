
// Array

let myStudents = ["ahmad", "anas", "omar", "ali", ["widad", "layan", "esraa"]];


for (let i = 0; i < myStudents.length; i++) {
    if (typeof myStudents[i] == "string") {
        console.log(myStudents[i].toUpperCase());
    }
    //todo: find better way to check array type :)
    else {
        for (let j = 0; j < myStudents[i].length; j++) {
            if (typeof myStudents[i][j] == "string") {
                console.log(myStudents[i][j].toUpperCase());
            }

        }
    }
}
