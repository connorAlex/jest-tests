function capitalize(a) {
    a = a.replace(a[0], a[0].toUpperCase());
    return a;
}

function reverseString(a) {
    let output = "";
    for (let i = a.length - 1; i >= 0; i--) {
        output += a[i];
    }
    return output;
}

const calculator = (() => {
    const add = (a,b) => (a+b);
    
    const subtract = (a,b) => (a-b);

    const multiply = (a,b) => (a*b);

    const divide = (a,b) => (a/b);

    return {
        add,
        subtract,
        multiply,
        divide
    };

})()

function caesarCipher(str, num) {
    let output = "";

    for (let i = 0; i < str.length; i++) {
        if (["!",".","?","-",","].includes(str[i])){
            output += str[i];
            continue;
        };

        let unicode = str.charCodeAt(i);
        if ((unicode >= 122 && unicode >= 97) || (unicode >= 90 && unicode <=65)) {
            unicode -= 26;
        }
        let char = String.fromCharCode(unicode + num);
        output += char;
    }
    return output;

};

const analyzeArray = (arr) => {
    let sum = 0;
    arr.forEach((e) => {
        sum += e;
    });
    
    let output = {
        average: sum / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };

    return output;
}





export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};