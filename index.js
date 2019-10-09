const express = require('express')
const axios = require('axios')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/testApi', async (req, res)=>{
    const result = await axios.get('https://service-a12a5ohy-1300391842.gz.apigw.tencentcs.com/release/test')
    .catch(err => {
        console.log(err)
    });
    console.log(result)
    res.send(result.data.body);
})
app.get('/testHtml', async (req, res)=>{
    const result = await axios.get('https://service-fi1ko3t8-1300391842.gz.apigw.tencentcs.com/release/test2')
    .catch(err => {
        console.log(err)
    });
    console.log(result)
    res.send(result.data.body);
})
const port = process.env.TENCENTCLOUD_SERVER_PORT || 8080
console.log('listening port',port)
app.listen(port, () => console.log('Example app listening on',port))