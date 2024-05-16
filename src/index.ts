import express, { Express, Request, Response } from 'express';
import path from 'path';
import https from 'https';
import fs from 'fs';

const app: Express = express();
const port: number = 443; // HTTPS 默认端口

const options = {
  key: fs.readFileSync(path.join(__dirname, '..', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'server.crt'))
};

// 设置静态文件目录
app.use(express.static(path.join(__dirname, '..', 'public')));

// 默认路由
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 启动服务器
https.createServer(options, app).listen(port, () => {
  console.log(`服务器运行在 https://localhost:${port}/`);
});
