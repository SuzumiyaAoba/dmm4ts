/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * リクエスト
 */
export type ActressSearchRequest = {
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
         * 頭文字（50音）
         */
        initial?: string,
        /**
         * 女優ID
         */
        actress_id?: number,
        /**
         * キーワード
         */
        keyword?: string,
        /**
         * バスト下限
         */
        gte_bust?: number,
        /**
         * バスト上限
         */
        lte_bust?: number,
        /**
         * ウエスト下限
         */
        gte_waist?: number,
        /**
         * ウエスト上限
         */
        lte_waist?: number,
        /**
         * ヒップ下限
         */
        gte_hip?: number,
        /**
         * ヒップ上限
         */
        lte_hip?: number,
        /**
         * 身長下限
         */
        gte_height?: number,
        /**
         * 身長上限
         */
        lte_height?: number,
        /**
         * 生年月日下限
         */
        gte_birthday?: string,
        /**
         * 生年月日上限
         */
        lte_birthday?: string,
        /**
         * 取得件数
         */
        hits?: number,
        /**
         * 検索開始位置
         */
        offset?: number,
        /**
         * ソート順
         */
        sort?: 'name' | '-name' | 'bust' | '-bust' | 'waist' | '-waist' | 'hip' | '-hip' | 'height' | '-height' | 'birthday' | '-birthday' | 'id' | '-id',
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
