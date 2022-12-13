var x = [1, 2, null, 5, 8, "ok", 9, 10, 44];
var y = 0;
var z = 0;
var nul = 0;
for (i of x) {
    if (typeof i === 'number'){
        if (i % 2 === 0){
            ++y;
        } else {
            ++z;
        }
    } else if (i === null) {
        ++nul;
    }
}
console.log ("Четных чисел - "+ y);
console.log ("Нечетных чисел - "+ z);
console.log ("Нулей чисел - " + nul);
