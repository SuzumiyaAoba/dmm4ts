/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FloorListRequest } from './FloorListRequest';
import type { FloorListResult } from './FloorListResult';

/**
 * フロア一覧レスポンス
 */
export type FloorListResponse = {
    request?: FloorListRequest;
    result?: FloorListResult;
}
