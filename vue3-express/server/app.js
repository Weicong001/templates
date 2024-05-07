import express from 'express';
import { fileURLToPath, URL } from 'node:url';
import usersRouter from './api/users.js';
import connection from './mongo/connect.js'; // 连接数据库

const port = 3000;

const app = express();

app.use(express.static(fileURLToPath(new URL('../dist', import.meta.url))));


// 路由
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log('server is running at ' + port);
  console.log(connection);
});
