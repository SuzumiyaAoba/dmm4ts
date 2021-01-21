/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * リクエスト
 */
export type GenreSearchRequest = {
    /**
     * リクエストパラメータ
     */
    parameters?: {
        /**
         * API ID
         */
        api_id?: string,
        /**
         * アフィリエイトID
         */
        affiliate_id?: string,
        /**
         * フロアID
         */
        floor_id?: number,
        /**
         * 頭文字（50音）
         */
        initial?: string,
        /**
         * 取得件数
         */
        hits?: number,
        /**
         * 検索開始位置
         */
        offset?: number,
        /**
         * 出力形式
         */
        output?: 'json' | 'xml',
        /**
         * コールバック
         */
        callback?: string,
    };
}
