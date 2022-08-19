const Pool = require('pg').Pool;
var fs = require('fs');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'poc-db',
  password: '123admin',
  port: 5432,
})
const rootPath ='dbscripts';

let scriptString ='';

//get extensions

scriptString =fs.readFileSync('dbscripts/extensions.sql').toString() +"\r\n";
scriptString +=fs.readFileSync('dbscripts/tables.sql').toString() +"\r\n";
scriptString +=fs.readFileSync('dbscripts/initData.sql').toString() +"\r\n";



//get tables

console.log(scriptString)

//var sql =  fs.readFileSync('dbscripts/extensions/extensions.sql').toString();
  console.log(scriptString)
pool.query(scriptString, (error, results) => {
     console.log('Success')
    if (error) {
      throw error
    }
  
  })