const {DataTypes, STRING} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    createdInDB: { //esta propiedad me sirve para consultar solo aquellos juegos creados en mi base de datos
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};