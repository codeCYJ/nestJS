import * as express from "express"

const app: express.Express = express();
const port: number = 8000;

app.get('/test', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({hello:'World!'});
})

app.post('/test', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({person:'Yoon'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})