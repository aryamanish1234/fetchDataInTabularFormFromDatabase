const SchemaOne = require('../models/schemaOne')
const SchemaTwo = require('../models/schemaTwo')

async function getAllDataFromSchemaOne() {
    return new Promise((resolve, reject) => {
        SchemaOne.find({}, function (err, data) {
            if(err) {
                console.log("Error while getting the data", err)
                reject(err)
            } else {
                if(data === null) {
                    console.log("Collection is empty")
                    resolve(data)
                } else {
                    console.log("Collection data found", data)
                    resolve(data)
                }
            }
        })
    })
}

async function getUserTeamNameByEmail(email) {
    return new Promise((resolve, reject) => {
        SchemaTwo.find({ email }, function (err, data) {
            if(err) {
                console.log("Error while finding the User Team name with email.", err)
                reject(err)
            } else {
                console.log("User team name is found")
                resolve(data[0].team_name)
            }
        })
    })
} 

async function getAllUsersTeamName() {
    return new Promise((resolve, reject) => {
        SchemaTwo.find({}, function(err, details) {
            if(err) {
                console.log("Error while getting the each user email",err)
                reject(err)
            } else {
                console.log("Found users team name")
                resolve(details.map(value => value.team_name))
            }
        })
    })
}


 
module.exports = {
    getAllDataFromSchemaOne,
    getUserTeamNameByEmail,
    getAllUsersTeamName
}