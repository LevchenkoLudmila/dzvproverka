const { json } = require('express');
const express = require('express');
const server = express();
const upload = require('multer')();
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.get('/', (req, res) => {
   res.render('index');
});

server.post('/test', upload.none(), (req, res) => {
   //const obj = {bio: {name: "Kot", surname: "Lapulya"}} 
   const zapros = req.body;
   console.log( 'zapros:', zapros );

   const bio = req.body.bio;
   if( bio === req.body.bio ){
      console.log('bio:',bio);
   } else {
      console.error(error);
   };

   let oneName = req.body.bio.name;
   if( oneName === req.body.bio.name){
      console.log('name:', oneName);
   } else {
      console.log('wrong value name');
   };
   if( typeof(oneName) !== 'string' ){
      console.log('wrong type name');
   };

   let surname = req.body.bio.surname;
   if( surname === req.body.bio.surname ){
      console.log('surname:', surname);
   } else {
      console.log('wrong value surname');
   };
   if( typeof(surname) !== 'string' ){
      console.log('wrong type surname');
   };
   res.end();
});

server.listen(3000, () => {
   console.log('Работает сервер');
});