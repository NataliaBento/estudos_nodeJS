const Sequelize = require('sequelize')

 //Conexao com o banco de dados MySql
 const sequelize = new Sequelize('postapp', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports= {
    Sequelize: Sequelize, 
    sequelize: sequelize
}