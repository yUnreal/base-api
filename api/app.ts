import { Server } from 'hyper-express';
import { handleRoutes } from './utils/handleRoutes';
import useCORS from 'hyper-express-cors/dist/useCORS';

export const server = new Server();

handleRoutes(server).then(async () => {
    await server.listen(80);

    console.info('Started on port 80');
});

const origin = '';

server.use(useCORS({ origin, credentials: true }));

server.options(
    '/*',
    useCORS({
        origin,
        credentials: true,
        optionsRoute: true,
    })
);
