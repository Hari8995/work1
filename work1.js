let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



// length()
console.log(text.length);

// charAt()
console.log(text.charAt(5));

// at()
console.log(text.at(5));

// charCodeAt()
console.log(text.charCodeAt(5));


// to upper
let x=text.toUpperCase();
console.log(x);


// to lower
let x1=text.toLowerCase();
console.log(x1);

// slice
let slice=text.slice(3,25);
console.log(slice);


// slice negative
let slice1=text.slice(-12,-6);
console.log(slice1);


// substr
let substr1=text.substr(2,5);
console.log(substr1);


// concat
let text2="   qwertyuiop";
console.log(text.concat(text2));


// trim
console.log(text2.trim());

// padding
let w = "6";
let p = w.padStart(4,"x");
console.log(p);


// repeat
console.log(text.repeat(2));

// replace
console.log(text.replace("A","a"));


// replaceAll
let q="ahalya , arun , arathi"
console.log(q.replaceAll("a","z"));

// split
console.log(text.split(""));















