/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * リクエスト
 */
export type ItemListRequest = {
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
         * サイト
         */
        site?: 'DMM.com' | 'FANZA',
        /**
         * サービス
         */
        service?: string,
        /**
         * フロア
         */
        floor?: string,
        /**
         * 取得件数
         */
        hits?: string,
        /**
         * 検索開始位置
         */
        offset?: string,
        /**
         * ソート順
         */
        sort?: 'rank' | 'price' | '-price' | 'date' | 'review' | 'match',
        /**
         * キーワード
         */
        keyword?: string,
        /**
         * 商品ID
         */
        cid?: string,
        /**
         * 絞り込み項目
         */
        article?: 'actress' | 'author' | 'genre' | 'series' | 'maker',
        /**
         * 絞り込みID
         */
        article_id?: number,
        /**
         * 発売日絞り込み
         */
        gte_date?: string,
        /**
         * 発売日絞り込み
         */
        lte_date?: string,
        /**
         * 在庫絞り込み
         */
        mono_stock?: string,
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
