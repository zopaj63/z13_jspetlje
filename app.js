firstName = "Božica";
lastName = "Jakas";
fullName = firstName + " " + lastName;
console.log(fullName);

//krivo:
var x = 2;
var z = x;
if (z === 2) {
    console.log(y);
}
else {
    console.log(5);
}

//dobro:
var x;
if (z === 2) {
    x = y;
} else {
    x = 5;
}

for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Broj " + i + " je paran");
    }
    else {
        console.log("Broj " + i + " je neparan");
    }
}
