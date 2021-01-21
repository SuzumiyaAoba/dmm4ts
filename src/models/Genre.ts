/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ジャンル情報リスト
 */
export type Genre = Array<{
    /**
     * ジャンルID
     */
    genre_id?: number,
    /**
     * ジャンル名
     */
    name?: string,
    /**
     * ジャンル名（読み仮名）
     */
    ruby?: string,
    /**
     * リストページURL（アフィリエイトID付き）
     */
    list_url?: string,
}>;