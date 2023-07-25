module.exports ={
  dialect: 'postgres',
  host: 'localhost',
  username:'postgres',
  password:'postgres',
  database: 'db_prd_app',
  schema: 'srmampituba_old_atual',
  define:{
    timestamps:true,
    underscored:true,
    freezeTableName: true,
  }
}