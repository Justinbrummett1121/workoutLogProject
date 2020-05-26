const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutLogProject', 'postgres', 'ThiscarisCat', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Conncected to workoutlog postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;