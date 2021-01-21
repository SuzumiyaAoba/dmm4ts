/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
type Resolver<T> = () => Promise<T>;
type Headers = Record<string, string>;

type Config = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
}

export const OpenAPI: Config = {
    BASE: 'https://api.dmm.com/affiliate/v3',
    VERSION: '3.0.0',
    WITH_CREDENTIALS: false,
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
};