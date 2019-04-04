   var net = require('net');
   
   var sockets = [];
   
   var server = net.createServer(function(socket){
        sockets.push(socket);
        socket.on('data', function(data){
            for(var i=0; i<sockets.length; i++){
   
            //sockets[i].write(data);
            console.log(" Data: " + data);
            }
        })

        socket.on('end', function(socket){
            var i = sockets.indexOf(socket);
            delete sockets[i];
        })
    })


    server.listen(8000, function(){
        console.log("Server is running.")
    });
