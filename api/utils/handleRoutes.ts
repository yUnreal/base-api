import glob from 'tiny-glob';
import { Server } from 'hyper-express';
import { RequestMethod, BaseRoute } from '../typings/globals';

export const handleRoutes = async (server: Server) => {
    const paths = await glob('api/routes/**/*.ts');

    for (const path of paths) {
        const { route }: { route: BaseRoute } = await import(`../../${path}`);

        const pattern = `/api/${route.pattern}`;

        for (const [key, value] of Object.entries(route)) {
            const ROUTE_PATTERN_KEY = 'pattern';

            if (key === ROUTE_PATTERN_KEY) continue;

            server[key as RequestMethod](pattern, value);
        }

        console.debug(`Rota ${pattern} carregada`);
    }
};
