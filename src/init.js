import './db'; // db.js 파일을 import 하기 때문에 db.js 코드가 자동적으로 실행 됨.
import './models/Video';
import app from './server';

const PORT = 4000;

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);