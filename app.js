
const OddEvenPromise = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input === 'string') { // is a string 
            console.log('string')
            reject('error')
        } else {
            // not a string
            if (input % 2 !== 0) { // odd
                setTimeout(() => {
                    console.log('number')
                    resolve('odd')
                }, 1000)
            } else { // even
                setTimeout(() => {
                    console.log('number')
                    resolve('even')
                }, 2000);
            }
        }
    })
}

OddEvenPromise('1')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
OddEvenPromise(1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
OddEvenPromise(10)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))