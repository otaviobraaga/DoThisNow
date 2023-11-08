const express = require("express");
const cors = require("cors");
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
    username: 'rbwiz',
    password: '12345',
    host: 'localhost',
    database: 'ToDo-DB',
    port: 5432,
})

app.get('./items', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM items')
        res.json(rows);
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

app.use(cors());
app.use(express.json());

//Configuração de rotas que será inserido posteriormente

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
