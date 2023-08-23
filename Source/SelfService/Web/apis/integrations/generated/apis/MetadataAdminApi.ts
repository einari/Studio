/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.292
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  M3EnvironmentListDto,
} from '../models/index';
import {
    M3EnvironmentListDtoFromJSON,
    M3EnvironmentListDtoToJSON,
} from '../models/index';

export interface ConnectionsIdMetadataAdminImportTablePostRequest {
    id: string;
    m3Environment?: string;
    tableName?: string;
}

export interface ConnectionsIdMetadataAdminReimportBasePostRequest {
    id: string;
    version?: string;
}

export interface ConnectionsIdMetadataAdminReimportPostRequest {
    id: string;
}

/**
 * 
 */
export class MetadataAdminApi extends runtime.BaseAPI {

    /**
     */
    async connectionsIdMetadataAdminImportTablePostRaw(requestParameters: ConnectionsIdMetadataAdminImportTablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<M3EnvironmentListDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdMetadataAdminImportTablePost.');
        }

        const queryParameters: any = {};

        if (requestParameters.m3Environment !== undefined) {
            queryParameters['m3Environment'] = requestParameters.m3Environment;
        }

        if (requestParameters.tableName !== undefined) {
            queryParameters['tableName'] = requestParameters.tableName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Organization-Id"] = this.configuration.apiKey("X-Organization-Id"); // X-Organization-Id authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/connections/{id}/metadata/admin/import-table`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(M3EnvironmentListDtoFromJSON));
    }

    /**
     */
    async connectionsIdMetadataAdminImportTablePost(requestParameters: ConnectionsIdMetadataAdminImportTablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<M3EnvironmentListDto>> {
        const response = await this.connectionsIdMetadataAdminImportTablePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async connectionsIdMetadataAdminReimportBasePostRaw(requestParameters: ConnectionsIdMetadataAdminReimportBasePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<M3EnvironmentListDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdMetadataAdminReimportBasePost.');
        }

        const queryParameters: any = {};

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Organization-Id"] = this.configuration.apiKey("X-Organization-Id"); // X-Organization-Id authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/connections/{id}/metadata/admin/reimport-base`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(M3EnvironmentListDtoFromJSON));
    }

    /**
     */
    async connectionsIdMetadataAdminReimportBasePost(requestParameters: ConnectionsIdMetadataAdminReimportBasePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<M3EnvironmentListDto>> {
        const response = await this.connectionsIdMetadataAdminReimportBasePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async connectionsIdMetadataAdminReimportPostRaw(requestParameters: ConnectionsIdMetadataAdminReimportPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<M3EnvironmentListDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdMetadataAdminReimportPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Organization-Id"] = this.configuration.apiKey("X-Organization-Id"); // X-Organization-Id authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/connections/{id}/metadata/admin/reimport`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(M3EnvironmentListDtoFromJSON));
    }

    /**
     */
    async connectionsIdMetadataAdminReimportPost(requestParameters: ConnectionsIdMetadataAdminReimportPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<M3EnvironmentListDto>> {
        const response = await this.connectionsIdMetadataAdminReimportPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
