const arrLength = +prompt('Введіть довжину:')
const userArr = []

for (let i = 0; i < arrLength; i += 1) {
    const element = +prompt(`Введіть елемент${i}:`)
    userArr.push(element)
}

console.log(userArr)

userArr.sort((a, b) => a - b)

console.log(userArr)

userArr.splice(1, 3)

console.log(userArr)

document.write(userArr)
