// Challenge: Public API search App ======================================================
// https://github.com/davemachado/public-api#public-api-for-public-apis // API ที่ใช้

// READ ME HERE FOR MORE UNDERSTANDING WITH THIS PROJECT
// 1. (get form location) get form location> > (add evet listener) check value input feedback > insert to params of get API // 2. (get data from API) async function for get API with try & catch by specific with config, So we got the obj respond JSON > access them in the last list of data and input as a params in next async function // 3. (create & alignment) buit up card in the div container we've prepared, access the obj of each API services, separated each key and alignment to look good for you || after that style them as your preferences.

// get form location #1
const formGet = document.querySelector('#formGet')

// add evet listener
formGet.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = formGet.elements.query.value
    getSearch(search)
    const button = document.querySelector('button')
    button.type = 'reset'
})

//get data from API #2
const getSearch = async (search) => {
    try {
        const url = `https://api.publicapis.org/entries`
        const config = { params: { title: search } } // paramiters config
        const res = await axios.get(url, config) // get url with config
        alignContent(res.data.entries) // insert respond to next async function
    }
    catch (err) {
        console.log('error', err);
    }
}

// create & alignment #3
const alignContent = async (data) => {

    // Header
    const resultHead = document.querySelector('h2')
    resultHead.append('Here is search result in Public API database')

    // Card separetors
    try {

        const content = document.querySelector('#content')
        for (let list of data) {

            // card box
            const cardDiv = document.createElement('div')
            cardDiv.classList.add('bgbk')
            content.append(cardDiv)

            //card body
            const cardBodyDiv = document.createElement('div')
            cardBodyDiv.classList.add('bglightblue')
            cardDiv.append(cardBodyDiv)

            //card heading
            const h3Ele = document.createElement('h3')
            h3Ele.append(list.API)
            cardBodyDiv.append(h3Ele)

            // card description
            const pEle = document.createElement('p')
            pEle.append(list.Description)
            cardBodyDiv.append(pEle)

            // list 
            for (const [key, value] of Object.entries(list)) {
                const ulEle = document.createElement('ul')
                const liEle = document.createElement('li')
                cardBodyDiv.append(ulEle)

                // description & API name we show as a header card
                if (key !== 'Description' && key !== 'API') {
                    // console.log(`    ${key} : ${value} `);
                    if (key == 'Link') { //  check link do it different
                        const aEle = document.createElement('a')
                        aEle.target = "_blank" // open another blank page
                        aEle.href = value
                        aEle.append(value)
                        liEle.append(`    ${key} : `) // add link later to make it working
                        liEle.append(aEle) //  put link in li
                    } else {
                        if (value === true) {
                            const valueY = 'Supported' // don't wanna show true it's cant understand
                            liEle.append(`    ${key} : ${valueY} `)
                        } else if (value === 'no') {
                            const valueN = 'Not Supported' // dont wanna show no 
                            liEle.append(`    ${key} : ${valueN} `)
                        } else if (value === 'yes') {
                            const valueN = 'Supported' // dont wanna show yes 
                            liEle.append(`    ${key} : ${valueN} `)
                        } else if (value === '') {
                            const valueN = 'unknown' // dont wanna show blank data 
                            liEle.append(`    ${key} : ${valueN} `)
                        }
                        else {
                            liEle.append(`    ${key} : ${value} `) // value data except link come here
                        }
                    }
                    ulEle.append(liEle) // append li to ul is the last step
                }
            }
        }
    } catch (error) {
        console.log('Error', error)
    }
}





// https://github.com/davemachado/public-api



// Challenge: Public API search App ======================================================



// // TV show search app =====================================================
// //  https://api.tvmaze.com/search/shows?q=girls

// const formEle = document.querySelector('#searchForm') // ระบุ form element


// formEle.addEventListener('submit', function (e) { // ตรวจจับ submit
//     e.preventDefault() // ป้องกันไม่ให้เกิดการ reflesh
//     const search = formEle.elements.query.value // ดึงค่าที่ถูกเก็บเข้าไปใน input name'qeury' ไว้สำหรับเป็น params
//     getMovieDetails(search) // สั่งฟังก์ชั่น
// })

// const getMovieDetails = async (search) => { // async function ทำงานด้วยค่าจาก input
//     try { // fullfilled ทำส่วนนี้
//         const config = { params: { q: search } } // ตั้งตัวแปรสำหรับ query ที่ปกติเป็น ?q='search '
//         const res = await axios.get(`https://api.tvmaze.com/search/shows`, config) // เอามาเ req.API with config until await
//         renderImg(res.data) // call function render
//     } catch (err) { // catch error
//         console.log(err);
//     }
// }

// const renderImg = (data) => { // this use for append or ใส่ภาพลงใน html
//     for (let item of data) { // loop มัน เพราะมีหลายภาพ ให้รันตาม data เมื่อ data เราใส่มาเป็น res.data[i] ตามที่ api ตอบกลับ
//         if (item.show.image?.medium) { // ถ้ามีครบตามนี้ก็ให้ทำในนี้ โดยให้ดูว่าถ้า image ไม่มีก็ข้ามไป
//             const imgEle = document.createElement('img') // สร้าง html element
//             imgEle.src = item.show.image.medium // ใส่ src เข้าไปว่าจะเป็นภาพที่ไหน
//             document.body.append(imgEle) // ใส่ภาพเข้าไปใน body
//         } // วนซ้ำจนกว่าจะไม่มี
//     }
// }

// // TV show search app =====================================================


// Setting Headers with Axios // https://swapi.dev.api/people/${} ========================

// const makeAxiosRequest = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log("Success", res.data.name)
//     } catch (error) {
//         console.log("Failed", error)
//     }
// }

// Setting Headers with Axios // https://swapi.dev.api/people/${} ========================



// renderJoke addEventlistener ================================================
// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//     renderJoke()
// })

// const renderJoke = async () => {
//     const jokeString = await getDadJoke()
//     const ulEle = document.querySelector('#joke')
//     const liEle = document.createElement('li') // <li></li>
//     liEle.append(jokeString) //<li>...</li>
//     ulEle.append(liEle)
// }

// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get(`https://icanhazdadjoke.com/`, config)
//         return res.data.joke
//     } catch (error) {
//         console.log("Error")
//         return "No joke avalible!!! :("
//     }
// }

// renderJoke addEventlistener ================================================







// Async Function to make it looks better ====================================
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

// Async Function to make it looks better ====================================



//First Promise Function =====================================================
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

//First Promise Function =====================================================