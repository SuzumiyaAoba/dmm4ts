/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Genre } from './Genre';

/**
 * ジャンル検索結果
 */
export type GenreSearchResult = {
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
    /**
     * サイト名
     */
    site_name?: string;
    /**
     * サイトコード
     */
    site_code?: string;
    /**
     * サービス名
     */
    service_name?: string;
    /**
     * フロアID
     */
    floor_id?: number;
    /**
     * フロア名
     */
    floor_name?: string;
    /**
     * フロアコード
     */
    floor_code?: string;
    genre?: Genre;
}
