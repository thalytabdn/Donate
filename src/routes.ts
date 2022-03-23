import express from 'express';
import PointsController from './controllers/PointsController';

const routes = express.Router();

const pointsController = new PointsController();

routes.get('/points', pointsController.index);
routes.get('/points:id', pointsController.show);

routes.post('/points', pointsController.create);

export default routes;
