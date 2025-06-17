import Router from 'express';
import PostController from './PostController.js';

const router = new Router();

router.post('/create', PostController.create);
router.get('/get_all', PostController.getAll);
router.get('/get_by_id/:id', PostController.getOne);
router.put('/update', PostController.update);
router.delete('/delete/:id', PostController.delete);

export default router;