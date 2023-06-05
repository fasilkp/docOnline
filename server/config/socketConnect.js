import { Server } from "socket.io";

export default function socketConnect(server){


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

let activeUsers = {}

io.on("connection", (socket) => {
    socket.on("new-user-add", (newUserId) => {
        if (!activeUsers[newUserId]) {
            activeUsers[newUserId] = { userId: newUserId, socketId: socket.id }
            console.log("New User Connected", activeUsers);
        }
        console.log("active",activeUsers);
        io.emit("get-users", activeUsers);
    });
    socket.on("disconnect", () => {
        Object.keys(activeUsers).forEach((key) => {
                if(activeUsers[key].socketId === socket.id) {
                     delete activeUsers[key] 
                }
            });
        console.log("disconnect", socket.id)
        console.log("User Disconnected", activeUsers);
        io.emit("get-users", activeUsers);
    });
    socket.on("check",()=>{
    })
    socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers[receiverId];
        console.log("User", user)
        console.log("Data: ", data)
        if (user) {
          socket.broadcast.emit("recieve-message", data);
        }
      });
    
});

}
