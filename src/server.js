import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req
  console.log(method, url)

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('criação de usuário')
  }

  return res.end('Hello world')
})

server.listen(3001)
