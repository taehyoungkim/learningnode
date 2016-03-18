var OrientDB = require('orientjs');

var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'th0120'
});

//DATABASE
var db = server.use('learn');
console.log('Using database: ' + db.name);

//RECORD
// db.record.get('#12:1')
// .then(function (record) {
//   console.log('Loaded record:', record);
// });

/*
 * CREATE
 * READ
 * UPDATE
 * DELETE
 *
 * AKA 'CRUD'
 *
 */

 //CREATE
// var command = 'SELECT FROM topic WHERE @rid=:id';
// var param = {
//     params:{
//         id:'#12:1'
//     }
// };
// db.query(command, param).then(function(results){
//     console.log(results);
// });

//INSERT

// var sql = 'INSERT INTO topic(title, description) VALUES(:title, :desc)';
//
// db.query(sql,{
//     params: {
//         title : 'new entry',
//         desc : 'new entry with INSERT command'
//     }
// }).then(function(results){
//     console.log(results);
// });

//UPDATE
var sql = 'UPDATE topic SET title=:title WHERE @rid=:id';
db.query(sql,{params:{title:'edited', id:'#12:1'}}).then(function(results){
    console.log(results);
});
