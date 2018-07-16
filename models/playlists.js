'use strict';
module.exports = (sequelize, DataTypes) => {
  const playlists = sequelize.define(
    'playlists',
    {
      PlaylistId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: DataTypes.STRING,
    },
    {
      timestamps: false
    }
  );
  return playlists;
};