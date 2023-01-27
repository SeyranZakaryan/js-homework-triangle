// exercise1

let str = "";

for (i = 0; i < 10; i++) {
    for (j = 0; j <= i; j++) {
        str += "* ";
    }
    str += "\n";
}
console.log(str);

//exercise2

//first version

let str1 = "";

// for (i = 0; i < 10; i++) {
//     for (j = 0; j < 10 - i; j++) {
//         str1 += "* ";
//     }
//     str1 += "\n";
// }
// console.log(str1);

//second version

for (i = 0; i < 10; i++) {
    for (j = 10; j > i; j--) {
        str1 += "* ";
    }
    str1 += "\n";
}
console.log(str1);

//exercise3

let str2 = "";

for (i = 0; i < 10; i++) {
    for (j = 10; j > i; j--) {
        str2 += "  ";
    }
    for (k = 0; k <= i; k++) {
        str2 += "# ";
    }
    str2 += "\n";
}
console.log(str2);

//exercise4

let str3 = "";

for (i = 0; i < 10; i++) {
    for (j = 0; j <= i; j++) {
        str3 += "  ";
    }
    for (k = 0; k < 10 - i; k++) {
        str3 += "# ";
    }
    str3 += "\n";
}
console.log(str3);

//exercise5

let str4 = "";

for (i = 0; i < 10; i++) {
    for (j = 10; j > i; j--) {
        str4 += " ";
    }
    for (k = 0; k <= i; k++) {
        str4 += "& ";
    }
    str4 += "\n";
}
console.log(str4);

//exercise6

let str5 = "";

for (i = 0; i < 3; i++) {
    for (j = 4; j > i; j--) {
        str5 += "  ";
    }
    for (k = 0; k <= i; k++) {
        str5 += " *  ";
    }
    str5 += "\n";
}
for (i = 1; i < 4; i++) {
    for (j = 4; j > i; j--) {
        str5 += "  ";
    }
    for (k = 0; k <= i; k++) {
        str5 += " *  ";
    }
    str5 += "\n";
}
for (i = 2; i < 5; i++) {
    for (j = 4; j > i; j--) {
        str5 += "  ";
    }
    for (k = 0; k <= i; k++) {
        str5 += " *  ";
    }
    str5 += "\n";
}
console.log(str5);

//  christmas tree in one loop
let spaces = "";
let n = 3;
for (p = 0; p < n; p++) {
    for (i = p; i < p + n; i++) {
        for (j = 2 * n; j > i; j--) {
            spaces += " ";
        }
        for (k = 0; k < i + 1; k++) {
            spaces += "$ ";
        }
        spaces += "\n";
    }
}
console.log(spaces);