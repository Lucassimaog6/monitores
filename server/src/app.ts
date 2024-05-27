import express from 'express';
import cors from 'cors';
import MonitorController from './controllers/monitor';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/monitor', MonitorController.index);
app.get('/monitor/:id', MonitorController.show);
app.post('/monitor', MonitorController.store);
app.put('/monitor/:id', MonitorController.update);
app.delete('/monitor/:id', MonitorController.delete);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});