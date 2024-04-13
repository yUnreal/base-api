import { Server } from 'hyper-express';
import { handleRoutes } from './utils/handleRoutes';

export const server = new Server();

handleRoutes(server).then(async () => {
    await server.listen(80);

    console.info('Started on port 80');
});
