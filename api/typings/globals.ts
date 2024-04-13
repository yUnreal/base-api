import { Request, Response } from 'hyper-express';

export enum RequestMethod {
    Get = 'get',
    Post = 'post',
    Delete = 'delete',
    Patch = 'patch',
    Put = 'put',
}

export type RouteFn = (request: Request, response: Response) => unknown;

export interface BaseRoute extends Partial<Record<RequestMethod, RouteFn>> {
    /**
     * The pattern of the route, all routes will be prefixed with '/api'. So '/users/:user' will be transformed in '/api/users/:user'
     */
    pattern: string;
}
