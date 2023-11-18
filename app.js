// Challenge: Public API search App ======================================================
// https://github.com/davemachado/public-api#public-api-for-public-apis // API ที่ใช้

const formGet = document.querySelector('#formGet')

formGet.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = formGet.elements.query.value
    getSearch(search)
    const button = document.querySelector('button')
    button.type = 'reset'
})

const getSearch = async (search) => {
    try {
        const url = `https://api.publicapis.org/entries`
        const config = { params: { title: search } }
        const res = await axios.get(url, config)
        contentArr(res.data.entries)
    }
    catch (err) {
        console.log('error', err);
    }
}

const itemArr = []
const contentArr = async (data) => {
    for (let item of data) {
        itemArr.push(item)
    }
    alignContent(itemArr)
}

const alignContent = async (itemArr) => {

    const resultHead = document.querySelector('h2')
    resultHead.append('Here is search result in Public API database')

    const content = document.querySelector('#content')
    for (let list of itemArr) {

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
            if (key !== 'Description' && key !== 'API') {
                console.log(`    ${key} : ${value} `);
                if (key == 'Link') {
                    const aEle = document.createElement('a')
                    aEle.target = "_blank"
                    aEle.href = value
                    aEle.append(value)

                    liEle.append(`    ${key} : `)
                    liEle.append(aEle)
                    // ulEle.append(liEle)
                } else {
                    if (value === true) {
                        const valueY = 'Supported'
                        liEle.append(`    ${key} : ${valueY} `)
                        // ulEle.append(liEle)
                    } else if (value === 'no') {
                        const valueN = 'Not Supported'
                        liEle.append(`    ${key} : ${valueN} `)
                        // ulEle.append(liEle)
                    }
                    else {
                        liEle.append(`    ${key} : ${value} `)
                        // ulEle.append(liEle)

                    }
                }
                ulEle.append(liEle)
            }

        }
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