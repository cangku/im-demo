const http = require('http'),
      router = require('./router').router,
      server = http.createServer(router),
      io = require('socket.io')(server);

server.listen(3000, () => {
    console.log('IM demo running')
});


io.on('connection', (socket) => {
    socket.on('demo', (data, fn) => {
        fn(data)
    })
})