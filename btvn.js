alert("btvn");

var a = 0;
var b = 4;
var c = 2;
if (a == 0) {
    //bx+c=0
    if (b == 0 && c == 0) {
        console.log("p trinh co vo so no");
    } else {
        console.log("p trinh co no");
    }
} else {
    var delta = (b * b) - 4 * a * c;
    if (delta == 0) {
        console.log("phg trinh co 1 no duy nhat");
    } else if (delta < 0) {
        console.log(" phg trinh vo no");
    } else {
        console.log(" phg trinh co 2 no");
    }
}
var arrayNumber2 = [1, 2, 3, 5, 6, 4, 3];
let tich = 1;
let cong = 0;
for (let x of arrayNumber2) {
    tich *= x;
    cong += x;
}
console.log(tich);
console.log(cong);

var date = 30;

switch (date) {
    case 31:
        console.log('January ');
        console.log('March');
        console.log('May');
        console.log('July');
        console.log('August');
        console.log('Octorber');
        console.log('December');
        break;
    case 30:
        console.log('April');
        console.log('June');
        console.log('September');
        console.log('November');

        break;
    case 29:
        console.log('February');
        break;
}



