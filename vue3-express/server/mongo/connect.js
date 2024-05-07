//连库
import mongoose from 'mongoose';
const hostname='0.0.0.0';
const port=27017;
const dbName='dbName';
// const user='?';
// const password="?";

const CONN_DB_STR=`mongodb://${hostname}:${port}/${dbName}`;

mongoose.connect(CONN_DB_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const connection=mongoose.connection;

//连接成功
connection.on("connected",()=>{
    console.log('Mongoose connection open to ' + CONN_DB_STR)
})

//数据库开启
connection.on("open",()=>{
    console.log('mongoose open')
});

//连接异常
connection.on("error",err=>{
    console.log('Mongoose connection error:' + err);
});

//断开连接
connection.on('disconnected',()=>{
    console.log('Mongoose connection fail 连接失败');
})

export default connection;