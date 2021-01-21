/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActressSearchResponse } from '../models/ActressSearchResponse';
import type { FloorListResponse } from '../models/FloorListResponse';
import type { GenreSearchResponse } from '../models/GenreSearchResponse';
import type { ItemListResponse } from '../models/ItemListResponse';
import type { MakerSearchResponse } from '../models/MakerSearchResponse';
import { request as __request } from '../core/request';

export class Service {

    /**
     * @returns ItemListResponse 商品の情報リストを取得する
     * @throws ApiError
     */
    public static async getItemList({
        apiId,
        affiliateId,
        site,
        service,
        floor,
        hits,
        offset,
        sort,
        keyword,
        cid,
        article,
        articleId,
        gteDate,
        lteDate,
        monoStock,
        output,
        callback,
    }: {
        /** API ID **/
        apiId: string,
        /** アフィリエイトID **/
        affiliateId: string,
        /** サイト **/
        site: 'DMM.com' | 'FANZA',
        /** サービス **/
        service?: string,
        /** フロア **/
        floor?: string,
        /** 取得件数 **/
        hits?: number,
        /** 検索開始位置 **/
        offset?: number,
        /** ソート順 **/
        sort?: 'rank' | 'price' | '-price' | 'date' | 'review' | 'match',
        /** キーワード **/
        keyword?: string,
        /** 商品ID **/
        cid?: string,
        /** 絞りこみ項目 **/
        article?: 'actress' | 'author' | 'genre' | 'series' | 'maker',
        /** 絞り込みID **/
        articleId?: number,
        /** 発売日絞り込み **/
        gteDate?: string,
        /** 発売日絞り込み **/
        lteDate?: string,
        /** 在庫絞り込み **/
        monoStock?: 'stock' | 'reserve' | 'mono' | 'dmp',
        /** 出力形式 **/
        output?: 'json' | 'xml',
        /** コールバック **/
        callback?: string,
    }): Promise<ItemListResponse> {
        const result = await __request({
            method: 'GET',
            path: `/ItemList`,
            query: {
                'api_id': apiId,
                'affiliate_id': affiliateId,
                'site': site,
                'service': service,
                'floor': floor,
                'hits': hits,
                'offset': offset,
                'sort': sort,
                'keyword': keyword,
                'cid': cid,
                'article': article,
                'article_id': articleId,
                'gte_date': gteDate,
                'lte_date': lteDate,
                'mono_stock': monoStock,
                'output': output,
                'callback': callback,
            },
        });
        return result.body;
    }

    /**
     * @returns FloorListResponse フロア一覧
     * @throws ApiError
     */
    public static async getFloorList({
        apiId,
        affiliateId,
        output,
        callback,
    }: {
        /** API ID **/
        apiId: string,
        /** アフィリエイトID **/
        affiliateId: string,
        /** 出力形式 **/
        output?: 'json' | 'xml',
        /** コールバック **/
        callback?: string,
    }): Promise<FloorListResponse> {
        const result = await __request({
            method: 'GET',
            path: `/FloorList`,
            query: {
                'api_id': apiId,
                'affiliate_id': affiliateId,
                'output': output,
                'callback': callback,
            },
        });
        return result.body;
    }

    /**
     * @returns ActressSearchResponse 女優情報検索結果
     * @throws ApiError
     */
    public static async getActressSearch({
        apiId,
        affiliateId,
        initial,
        actressId,
        keyword,
        gteBust,
        lteBust,
        gteWaist,
        lteWaist,
        gteHip,
        lteHip,
        gteHeight,
        lteHeight,
        gteBirthday,
        lteBirthday,
        hits,
        offset,
        sort,
        output,
        callback,
    }: {
        /** API ID **/
        apiId: string,
        /** アフィリエイトID **/
        affiliateId: string,
        /** 頭文字（50音） **/
        initial?: string,
        /** 女優ID **/
        actressId?: string,
        /** キーワード **/
        keyword?: string,
        /** バスト下限 **/
        gteBust?: number,
        /** バスト上限 **/
        lteBust?: number,
        /** ウエスト下限 **/
        gteWaist?: number,
        /** ウエスト上限 **/
        lteWaist?: number,
        /** ヒップ下限 **/
        gteHip?: number,
        /** ヒップ上限 **/
        lteHip?: number,
        /** 身長下限 **/
        gteHeight?: number,
        /** 身長上限 **/
        lteHeight?: number,
        /** 生年月日下限 **/
        gteBirthday?: string,
        /** 生年月日上限 **/
        lteBirthday?: string,
        /** 取得件数 **/
        hits?: number,
        /** 検索開始位置 **/
        offset?: number,
        /** ソート順 **/
        sort?: 'name' | '-name' | 'bust' | '-bust' | 'waist' | '-waist' | 'hip' | '-hip' | 'height' | '-height' | 'birthday' | '-birthday' | 'id' | '-id',
        /** 出力形式 **/
        output?: 'json' | 'xml',
        /** コールバック **/
        callback?: string,
    }): Promise<ActressSearchResponse> {
        const result = await __request({
            method: 'GET',
            path: `/ActressSearch`,
            query: {
                'api_id': apiId,
                'affiliate_id': affiliateId,
                'initial': initial,
                'actress_id': actressId,
                'keyword': keyword,
                'gte_bust': gteBust,
                'lte_bust': lteBust,
                'gte_waist': gteWaist,
                'lte_waist': lteWaist,
                'gte_hip': gteHip,
                'lte_hip': lteHip,
                'gte_height': gteHeight,
                'lte_height': lteHeight,
                'gte_birthday': gteBirthday,
                'lte_birthday': lteBirthday,
                'hits': hits,
                'offset': offset,
                'sort': sort,
                'output': output,
                'callback': callback,
            },
        });
        return result.body;
    }

    /**
     * @returns GenreSearchResponse ジャンル検索結果
     * @throws ApiError
     */
    public static async getGenreSearch({
        apiId,
        affiliateId,
        floorId,
        initial,
        hits,
        offset,
        output,
        callback,
    }: {
        apiId: string,
        /** アフィリエイトID **/
        affiliateId: string,
        /** フロアID **/
        floorId: string,
        /** 頭文字（50音） **/
        initial?: string,
        /** 取得件数 **/
        hits?: number,
        /** 検索開始位置 **/
        offset?: number,
        /** 出力形式 **/
        output?: 'json' | 'xml',
        /** コールバック **/
        callback?: string,
    }): Promise<GenreSearchResponse> {
        const result = await __request({
            method: 'GET',
            path: `/GenreSearch`,
            query: {
                'api_id': apiId,
                'affiliate_id': affiliateId,
                'floor_id': floorId,
                'initial': initial,
                'hits': hits,
                'offset': offset,
                'output': output,
                'callback': callback,
            },
        });
        return result.body;
    }

    /**
     * @returns MakerSearchResponse メーカー検索結果
     * @throws ApiError
     */
    public static async getMakerSearch({
        apiId,
        affiliateId,
        floorId,
        initial,
        hits,
        offset,
        output,
        callback,
    }: {
        /** API ID **/
        apiId: string,
        /** アフィリエイトID **/
        affiliateId: string,
        /** フロアID **/
        floorId: number,
        /** 頭文字（50音） **/
        initial?: string,
        /** 取得件数 **/
        hits?: number,
        /** 検索開始位置 **/
        offset?: number,
        /** 出力形式 **/
        output?: 'json' | 'xml',
        /** コールバック **/
        callback?: string,
    }): Promise<MakerSearchResponse> {
        const result = await __request({
            method: 'GET',
            path: `/MakerSearch`,
            query: {
                'api_id': apiId,
                'affiliate_id': affiliateId,
                'floor_id': floorId,
                'initial': initial,
                'hits': hits,
                'offset': offset,
                'output': output,
                'callback': callback,
            },
        });
        return result.body;
    }

    /**
     * @returns ActressSearchResponse 作者検索結果
     * @throws ApiError
     */
    public static async getAuthorSearch({
        apiId,
        affiliateId,
        floorId,
        initial,
        hits,
        offset,
        output,
        callback,
    }: {
        /** API ID **/
        apiId: string,
        /** アフィリエイトID **/
        affiliateId: string,
        /** フロアID **/
        floorId: number,
        /** 頭文字（50音） **/
        initial?: string,
        /** 取得件数 **/
        hits?: number,
        /** 取得件数 **/
        offset?: number,
        /** 出力形式 **/
        output?: 'json' | 'xml',
        /** コールバック **/
        callback?: string,
    }): Promise<ActressSearchResponse> {
        const result = await __request({
            method: 'GET',
            path: `/AuthorSearch`,
            query: {
                'api_id': apiId,
                'affiliate_id': affiliateId,
                'floor_id': floorId,
                'initial': initial,
                'hits': hits,
                'offset': offset,
                'output': output,
                'callback': callback,
            },
        });
        return result.body;
    }

}