function calculateYears(principal, interest, tax, desired) {
    let sum = principal
    let year = 0

    if (principal === desired) return 0

    do{
        i = (sum * interest)
        t = i * tax
        sum = sum + i - t
        year++
    }
    while(sum <= desired)

    return year
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); //3
console.log(calculateYears(1000,0.01625,0.18,1200)); // 14
console.log(calculateYears(1000,0.05,0.18,1000)); // 0




