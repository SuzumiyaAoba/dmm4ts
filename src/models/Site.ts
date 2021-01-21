/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * サイト情報
 */
export type Site = {
    /**
     * サイト名
     */
    name?: string;
    /**
     * サイトコード
     */
    code?: string;
    /**
     * サービス情報
     */
    service?: {
        /**
         * サービス名
         */
        name?: string,
        /**
         * サービスコード
         */
        code?: string,
        /**
         * フロア情報リスト
         */
        floor?: Array<{
            /**
             * フロアID
             */
            id?: number,
            /**
             * フロア名
             */
            name?: string,
            /**
             * フロアコード
             */
            code?: string,
        }>,
    };
}
