import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000


app.get("/", (req,res)=>{
	const message=`Hello Ibrahim , I am Pod ${os.hostname()} release v1.0.1`
	res.send(message)

})

app.listen(PORT, ()=>{
	console.log(`Webserver is listening at port : ${PORT}`)
	console.log(os.hostname())

})


