/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 女優情報
 */
export type Actress = {
    /**
     * 女優ID
     */
    id?: number;
    /**
     * 女優名
     */
    name?: string;
    /**
     * 女優名（読み仮名）
     */
    ruby?: string;
    /**
     * バスト
     */
    bust?: number;
    /**
     * カップ数
     */
    cup?: string;
    /**
     * ウェスト
     */
    waist?: number;
    /**
     * ヒップ
     */
    hip?: number;
    /**
     * 身長
     */
    height?: number;
    /**
     * 生年月日
     */
    birthday?: string;
    /**
     * 血液型
     */
    blood_type?: string;
    /**
     * 趣味
     */
    hobby?: string;
    /**
     * 出身地
     */
    prefectures?: string;
    /**
     * 画像URL
     */
    imageURL?: {
        /**
         * 画像（小）
         */
        small?: string,
        /**
         * 画像（大）
         */
        large?: string,
    };
    /**
     * リストページURL（アフィリエイトID付き）
     */
    listURL?: {
        /**
         * 動画
         */
        digital?: string,
        /**
         * 月額動画 見放題chプレミアム
         */
        monthly_premium?: string,
        /**
         * DVD通販
         */
        mono?: string,
        /**
         * DVDレンタル
         */
        rental?: string,
    };
}
