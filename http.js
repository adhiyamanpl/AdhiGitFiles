const http = require(`http`)
const server = http.createServer((req,res) => {
   if(req.url == '/')
    {
res.end('Here is our first page')
    }
    if(req.url === '/about')
        {
            res.end('here is our short story')
        }
        res.end(`
    <h1>Opps</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back</a>
    `)
})

server.listen(5000)