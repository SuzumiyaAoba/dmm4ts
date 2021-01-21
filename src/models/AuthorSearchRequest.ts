/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * リクエスト
 */
export type AuthorSearchRequest = {
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
         * 出力形式
         */
        output?: string,
        /**
         * コールバック
         */
        callback?: string,
    };
}
