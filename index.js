require('dotenv').config()
const http = require('http')

function requestController(req, res) {
  console.log('Bienvenidos al curso')

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  })

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Karla Choque Moran</title>
    </head>
    <body>
      <h1>Karla Choque Moran</h1>
      <h2>Diseño y Desarrollo de Software</h2>
      <p>5to semestre</p>
    </body>
    </html>
  `)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 4000

server.listen(PORT, function() {
  console.log("Aplicacion corriendo en: " + PORT)
})