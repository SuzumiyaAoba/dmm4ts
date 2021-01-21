/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Actress } from './Actress';

/**
 * 女優情報検索結果
 */
export type ActressSearchResult = {
    /**
     * ステータスコード
     */
    status?: string;
    /**
     * 取得件数
     */
    result_count?: number;
    /**
     * 全体件数
     */
    total_count?: number;
    /**
     * 検索開始位置
     */
    first_position?: number;
    actress?: Actress;
}
