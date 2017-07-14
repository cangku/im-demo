const http = require('http'),
      router = require('./router').router,
      server = http.createServer(router),
      io = require('socket.io')(server);

server.listen(3333, () => {
    console.log('IM demo running')
});

let numUsers = 0;

io.on('connection', (socket) => {
    // 设置添加状态
    let addedUser = false;

    socket.on('add user', function (username) {
        if(addedUser) return;

        // 存入session
        socket.username = username;
        numUsers++;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        })
        // 通知有新朋友加入
        socket.broadcast.emit('user joined', {
            username: socket.username
        })
    });
})