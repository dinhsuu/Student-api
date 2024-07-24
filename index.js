import express from 'express';
import StudentRoute from './src/routes/StudentRoute';
require('./connection_database');

const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server is listening on prot 4000');
});

app.use(express.json());
app.use('/api/v1/student', StudentRoute);
