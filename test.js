const h = 6.62 * 10 ^ (-34);
const c = 8 * 10 ^ (8);
const m0 = 9.11 * 10 ^ (-31);
let A2 = 4.47 * 1.6 * 10 ^ (-19);
let lambda = 0.22 * 10 ^ (-6);

v = Math.sqrt(
    Math.abs(
        (h * c - A2 * lambda) / lambda * (2 / m0)
    )
);

console.log(v);