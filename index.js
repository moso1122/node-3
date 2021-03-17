const fs = require('fs/promises')
// const http = require('http')
const random = require('random')
// const file = fs.readFile('config.json','utf-8',(err,data)=>{
//     if (err) {
//         throw err
//     }
//     const json = JSON.parse(data)
//     const server = http.createServer()
//     server.listen(json.port)
// })

// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let random_int = random.int(0,100)
//         if (random_int<5) {
//             resolve(random_int)
//         }
//         else{
//             reject(random_int)
//         }
//     },2000)
// })
// pr.then(data=>console.log(data))
// pr.catch(data=>console.log(data))
