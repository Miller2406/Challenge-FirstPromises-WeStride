// Setting Headers with Axios // https://swapi.dev.api/people/${}
// const makeAxiosRequest = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log("Success", res.data.name)
//     } catch (error) {
//         console.log("Failed", error)
//     }
// }

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    renderJoke()
})

const renderJoke = async () => {
    const jokeString = await getDadJoke()
    const ulEle = document.querySelector('#joke')
    const liEle = document.createElement('li') // <li></li>
    liEle.append(jokeString) //<li>...</li>
    ulEle.append(liEle)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get(`https://icanhazdadjoke.com/`, config)
        return res.data.joke
    } catch (error) {
        console.log("Error")
        return "No joke avalible!!! :("
    }
}




































// // TV show search app =======================================
// // https://api.tvmaze.com/search/show?q=
// const formEle = document.querySelector('#searchForm')

// formEle.addEventListener('summit', function (e) {
//     e.preventDefault()
//     const search = formEle.nextElementSibling.querySelector.value
//     getMovieDetails(search)
// })


// const getMovieDetails = async (search) => {
//     try {
//         const res = await axios.get(`https://api.tvmaze.com/search/show?q=${search}`)
//         renderImg(res.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const renderImg = (data) => {
//     for (let item of data) {
//         if (item.show.image?.medium) {
//             const imgEle = document.createElement('img')
//             imgEle.srt = item.show.image.medium
//             document.body.append(imgEle)
//         }
//     }
// }


























// Async Function to make it looks better =====================
// const OddEvenPromiseAsync = async (data) => {
//     if (typeof data === 'string') throw 'error'
//     if (data % 2 !== 0) return 'odd'
//     if (data % 2 == 0) return 'even'
//     throw 'error'
// }

// OddEvenPromiseAsync(2)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// OddEvenPromiseAsync(1)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// OddEvenPromiseAsync('12')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))



//First Promise Function ======================================
// const OddEvenPromise = (input) => {
//     return new Promise((resolve, reject) => {
//         if (typeof input === 'string') { // is a string
//             console.log('string')
//             reject('error')
//         } else {
//             // not a string
//             if (input % 2 !== 0) { // odd
//                 setTimeout(() => {
//                     console.log('number')
//                     resolve('odd')
//                 }, 1000)
//             } else { // even
//                 setTimeout(() => {
//                     console.log('number')
//                     resolve('even')
//                 }, 2000);
//             }
//         }
//     })
// }

// OddEvenPromise('1')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// OddEvenPromise(1)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// OddEvenPromise(10)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))