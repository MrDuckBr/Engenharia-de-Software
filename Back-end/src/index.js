import app from './server'

const port = 3000

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});
