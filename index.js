const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const BodyParser = require('body-parser')
const Post = require ("./models/Post")
const bodyParser = require('body-parser')
const { where } = require('sequelize')


// config
    //Template Engine
    app.engine('handlebars', engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }));
    
        app.set('view engine','handlebars')
    //Body Parser
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
//Rotas

    app.get('/', function(req, res){
        Post.findAll({order:[['id', 'DESC']]}).then(function(posts){
            console.log(posts)
            res.render('home', {posts: posts})
        })
        
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

   app.post('/add', function(req, res){

        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
        
   })

   app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Post deletado com sucesso')
    }).catch(function(erro){
        res.send("Esta postagem não existe! ")
    })
   })

app.listen(8081, function(){
    console.log('Servidor rodando')
})
