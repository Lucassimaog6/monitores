import { Request, Response } from 'express';
import Monitor from '../models/monitor';

class MonitorController {

    // Lista tudo
    index(req: Request, res: Response) {
        Monitor.findAll().then((result) => {
            res.json(result);
        });
    }

    // Lista um
    show(req: Request, res: Response) {
        Monitor.findByPk(req.params.id).then((result) => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).send('Not found');
            }
        });
    }

    // Cria
    store(req: Request, res: Response) {
        Monitor.create(req.body).then((result) => {
            res.status(201).json(result);
        });
    }

    // Atualiza
    update(req: Request, res: Response) {
        Monitor.update(req.body, {
            where: { id: req.params.id }
        }).then((result) => {
            if (result[0] === 1) {
                res.send('Updated');
            } else {
                res.status(404).send('Not found');
            }
        });
    }

    // Deleta
    delete(req: Request, res: Response) {
        Monitor.destroy({
            where: { id: req.params.id }
        }).then((result) => {
            if (result === 1) {
                res.send('Deleted');
            } else {
                res.status(404).send('Not found');
            }
        });
    }

}

// Singleton
export default new MonitorController();