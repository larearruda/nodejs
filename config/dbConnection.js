var mysql = require('mysql');

var connMySql = function(){
    console.log("# Creating DB connection");
    return mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });

}

module.exports = function(){
    console.log('# Status: Successfully Loaded DB connection');
    return connMySql;
}
