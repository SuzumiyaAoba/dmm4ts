/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 商品情報
 */
export type Item = {
    /**
     * サービスコード
     */
    service_code?: string;
    /**
     * サービス名
     */
    service_name?: string;
    /**
     * フロアコード
     */
    floor_code?: string;
    /**
     * フロア名
     */
    floor_name?: string;
    /**
     * カテゴリ名
     */
    category_name?: string;
    /**
     * 商品ID
     */
    content_id?: string;
    /**
     * 品番
     */
    product_id?: string;
    /**
     * タイトル
     */
    title?: string;
    /**
     * 収録時間 or ページ数
     */
    volume?: string;
    /**
     * 巻数
     */
    number?: number;
    /**
     * レビュー
     */
    review?: {
        /**
         * レビュー数
         */
        count?: number,
        /**
         * レビュー平均点
         */
        average?: string,
    };
    /**
     * 商品ページURL
     */
    URL?: string;
    /**
     * アフィリエイトリンクURL
     */
    affiliateURL?: string;
    /**
     * スマホ向け商品ページURL
     */
    URLsp?: string;
    /**
     * スマホ向けアリフィエイトリンクURL
     */
    affiliateURLSp?: string;
    /**
     * 画像URL
     */
    imageURL?: {
        /**
         * リストページ用
         */
        list?: string,
        /**
         * 末端用（小）
         */
        small?: string,
        /**
         * 末端用（大）
         */
        large?: string,
    };
    /**
     * 立ち読み
     */
    tachiyomi?: {
        /**
         * 立ち読みページURL
         */
        URL?: string,
        /**
         * 立ち読みアフィリエイトリンクURL
         */
        affiliateURL?: string,
    };
    /**
     * サンプル画像URL
     */
    sampleImageURL?: {
        /**
         * サンプル（小）リスト
         */
        sample_s?: {
            /**
             * サンプル画像（小）
             */
            image?: Array<string>,
        },
    };
    /**
     * サンプル動画URL
     */
    sampleMovieURL?: {
        /**
         * 476x306
         */
        size_476_306?: string,
        /**
         * 560x360
         */
        size_560_360?: string,
        /**
         * 644x414
         */
        size_644_414?: string,
        /**
         * 720x480
         */
        size_720_480?: string,
        /**
         * PC対応しているか
         */
        pc_flag?: number,
        /**
         * スマホ対応しているか
         */
        sp_flag?: number,
    };
    /**
     * 価格
     */
    prices?: {
        /**
         * 金額
         */
        price?: string,
        /**
         * 定価
         */
        list_price?: string,
        /**
         * 配信リスト
         */
        deliveries?: {
            /**
             * 配信タイプ
             */
            type?: string,
            /**
             * 配信価格
             */
            price?: string,
        },
    };
    /**
     * 発売日、配信開始日、貸出開始日
     */
    date?: string;
    /**
     * 商品詳細
     */
    iteminfo?: {
        /**
         * ジャンル
         */
        genre?: {
            /**
             * ジャンル名
             */
            name?: string,
            /**
             * ジャンルID
             */
            id?: number,
        },
        /**
         * シリーズ
         */
        series?: {
            /**
             * シリーズ名
             */
            name?: string,
            /**
             * シリーズID
             */
            id?: number,
        },
        /**
         * メーカー
         */
        maker?: {
            /**
             * メーカー名
             */
            name?: string,
            /**
             * メーカーID
             */
            id?: number,
        },
        /**
         * 出演者（一般作品のみ）
         */
        actor?: {
            /**
             * 主演者名
             */
            name?: string,
            /**
             * 出演者ID
             */
            id?: number,
        },
        /**
         * 女優（アダルト作品のみ）
         */
        actress?: {
            /**
             * 女優名
             */
            name?: string,
            /**
             * 女優ID
             */
            id?: number,
        },
        /**
         * 監督
         */
        director?: {
            /**
             * 監督名
             */
            name?: string,
            /**
             * 監督ID
             */
            id?: number,
        },
        /**
         * 作家、原作者、著者
         */
        author?: {
            /**
             * 作家、原作者、著者名
             */
            name?: string,
            /**
             * 作家、原作者、著者ID
             */
            id?: number,
        },
        /**
         * レーベル
         */
        label?: {
            /**
             * レーベル名
             */
            name?: string,
            /**
             * レーベルID
             */
            id?: number,
        },
    };
    /**
     * JANコード
     */
    jancode?: string;
    /**
     * メーカー品番
     */
    maker_product?: string;
    /**
     * ISBN
     */
    isbn?: string;
    /**
     * 在庫状況
     */
    stock?: string;
    /**
     * CD情報
     */
    cdinfo?: {
        /**
         * アルバム、シングル
         */
        kind?: string,
    };
    /**
     * バンダイ情報
     */
    bandaiinfo?: {
        /**
         * タイトルコード
         */
        titlecode?: string,
    };
}
