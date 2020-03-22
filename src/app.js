import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import'normalize.css/normalize.css'
import '../src/styles/styles.scss'
const express = require('express')
const path = require('path')
const app = express()
const port = process.env || 3000

app.get('/', (req,res)=>{ res.sendfile(path.join(__dirname + '/index.html'))})
app.listen(port,()=>{console.log(`Server connected on port ${port}!`)})


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

