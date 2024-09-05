const app = require('./app')
//port é a PORTa que está definido no .env
const port = process.env.PORT || 3000
 
app.listen(port, () => {
    console.log(`O servidor está funcionando na porta: ${port}`)
})
// Precisa definir um script para rodar a aplicação, inicialmente utilizamos: node --watch src/server