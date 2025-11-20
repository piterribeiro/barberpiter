import { Sequelize } from "sequelize";

const db = new Sequelize (

"barber_nds4",
"barber_nds4_user",
"oSOqTY6dgCYQufOrpZI19oT5cRxqRHGI",
{

host: "@dpg-d4f4mm8dl3ps73cmflog-a.oregon-postgres.render.com",
dialect: "postgres",
port:"5432",
dialectOptions: {
    ssl: {require: true , rejectUnauthorized: false}
}

}

);

db.authenticate().then((function(){
    console.log("concectado ao banco de dados com sucesso"
    )
})).catch(function(erro){
    console.log("erro ao conectar ao banco de dados")
}
);

export default db;
