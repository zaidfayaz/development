/*Write a js code to find the area of a right angled  triangle*/
function areaOFTriabgle(base, height) {
    let area = (base * height) / 2
    return `Base : ${base} Height : ${height} Area :${area}`;
}
console.log(areaOFTriabgle(5, 6));

/*Write a js code to find the area of a three sided general triangle*/
function areaOfTriabngle2(s1, s2, s3) {
    //using herons formula 
    // first we have to calculate value of S (semi permimeter)
    let s = (s1 + s2 + s3) / 2
    //console.log(`The value of s is ${s}`);
    let area = Math.sqrt(s * (s-s1) * (s-s2) * (s- s3))
    console.log(`The area of a triangle is ${area}`);
}
areaOfTriabngle2(10, 5, 10)