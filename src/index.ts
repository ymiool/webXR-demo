import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const port: number = 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, '..', 'public')));

// 默认路由
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`);
});
