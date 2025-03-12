const express = require('express')
const app = express()
const port = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/',(request,response)=>{
    response.send(`
        <!doctype html>
        <html>
        <head>
            <title>Express.js</title>
        </head>
        <body>
            <h3>Welcome to Express.js</h3>
            <b>Express.js Fact, unopinionated, minimalist <br> web framework for Node.js</b>
        </body>
        </html>
        `
    )
})

app.post('/api/form-post', (request, response) => {
    let name = request.body.name || ''
    let email = request.body.email || ''
    let msg = request.body.message || ''
    let text = `
        <table border="1">
        <caption>ข้อมูลที่ส่งขึ้นไป</caption>
        <tr><td>ชื่อ:</td><td>${name}</td></tr>
        <tr><td>อีเมล:</td><td>${email}</td></tr>
        <tr><td>ข้อความ:</td><td>${msg}</td></tr>
        </table>
        `
        response.send(text)
    })

app.listen(port,() => console.log('Server listening on port'+port))