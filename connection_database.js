const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('studentdb', 'root', '123456', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false
});

const connectionDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectionDatabase();
