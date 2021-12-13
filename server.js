let  http = require('http')

let users = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Jerry' },
    { id: 3, name: 'Susan' },
    { id: 4, name: 'Bill' },
    { id: 5, name: 'Thomas' },
    { id: 5, name: 'Alan' },
    { id: 5, name: 'Russel' }

]
let server = http.createServer(function (req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url ==='/api/users'){
        res.end(JSON.stringify(users));
    }else{
        res.end('Not Found');
    }
});
server.listen(3000,()=>{
    console.log("back end server boot at port 3000");
})