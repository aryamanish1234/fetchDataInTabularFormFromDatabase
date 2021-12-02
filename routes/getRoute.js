const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const SchemaOne = require('../models/schemaOne')
const SchemaTwo = require('../models/schemaTwo')
const { getAllDataFromSchemaOne, getUserTeamNameByEmail, getAllUsersTeamName } = require('../utils/utils')
const ejs = require('ejs')

router.get('/',async (req, res) => {
    let allDataOfSchemaOne = await getAllDataFromSchemaOne()
    console.log("------------all", allDataOfSchemaOne[0].email)
    let userTeamName = await getAllUsersTeamName()
    
    // res.send(userTeamName)
    // res.send(userTeamName)
    console.log("--------------------", userTeamName)
    res.render('index', { 
        data: allDataOfSchemaOne,
        teamName: userTeamName
     })
})

module.exports = router
