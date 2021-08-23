
// Version 1
// function XO(str) {
//   let equal = 0;
//   str.split("").forEach((c) => {
//     if ("x" === c.toLowerCase()) {
//       equal += 1;
//     }
//     if ("o" === c.toLowerCase()) {
//       equal -= 1;
//     }
//   });
//   return equal === 0;
// }

// Version 1 refactored
// function XO(str) {
//   let equal = 0;
//   str.split``.forEach((c) => {
//     "x" === c.toLowerCase() && equal++;
//     "o" === c.toLowerCase() && equal--;
//   });
//   return equal === 0;
// }

// Version 2 using reduce method
// const X0 = str =>
//     str.split``.reduce((a, c) => {
//         if ('x' === c.toLowerCase()) {
//             return a + 1;
//         } else if  ('o' === c.toLowerCase()) {
//             return a - 1;
//         } else return a;
//     }, 0) === 0;

// Version 2 using reduce method refactored
// const X0 = (str) =>
//   str
//   .toLowerCase()
//   .split``
//   .reduce(
//     (a, c) => ("x" === c ? ++a : "o" ? --a : a),
//     0
//   ) === 0;

// Version 3 using regex
const X0 = (str) => {
    const x = str.match(/x/gi);
    const o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
