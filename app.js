import express from "express";

const app = express();

app.get("/agendamentos", (req,res)=>{
    res.send("primeira rota");

})

app.listen(3000, function(){
console.log(" o servidor esta rodando na porta 3000");

} );


