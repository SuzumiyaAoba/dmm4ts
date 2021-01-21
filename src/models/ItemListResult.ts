/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

/**
 * 商品情報リスト検索結果
 */
export type ItemListResult = {
    /**
     * ステータスコード
     */
    status?: number;
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
    /**
     * 商品情報
     */
    items?: Array<Item>;
}
