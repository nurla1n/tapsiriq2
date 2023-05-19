const express=require('express')
const app=express()
const fs=require('fs')
let data1=fs.readFileSync('./index.html','utf-8')
let data2=fs.readFileSync('./salam.html','utf-8')

app.get('/',async function(req,res){
    res.end(data1)
})
app.get('/user/signup',async function(req,res){
    data2=data2.replace(/{{ad}}/,req.query.name)
    res.end(data2)
})

app.listen(9876,async function(req,res){
    console.log('Server ishe dushdu')
})
