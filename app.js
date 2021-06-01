const express = require('express')
const app = express()
const port = 8080

app.use(express.static(process.cwd()+"/DevFolio"));

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/DevFolio")
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
