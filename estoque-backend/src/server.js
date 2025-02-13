const sequelize = require('./config/database');
const Product = require('./models/Product');

const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

sequelize
  .sync()
  .then(() => {
    console.log('Tabela de produtos criada.');
  })
  .catch((err) => {
    console.error('Erro ao criar tabela:', err);
  });


