/* tslint:disable */
/* eslint-disable */
/**
 * Dolittle.Bridge.M3
 * Bridge API - made for Dolittle Studio
 *
 * The version of the OpenAPI document: 1.0.0.0
 * Contact: dolittle@dolittle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ListTable,
  RelatedTable,
  TableDto,
} from '../models';
import {
    ListTableFromJSON,
    ListTableToJSON,
    RelatedTableFromJSON,
    RelatedTableToJSON,
    TableDtoFromJSON,
    TableDtoToJSON,
} from '../models';

export interface ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGetRequest {
    connectionId: string;
    environment: string;
}

export interface ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGetRequest {
    environment: string;
    tableName: string;
    connectionId: string;
}

export interface ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGetRequest {
    environment: string;
    tableName: string;
    connectionId: string;
}

/**
 * 
 */
export class TableMetadataApi extends runtime.BaseAPI {

    /**
     */
    async connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGetRaw(requestParameters: ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ListTable>>> {
        if (requestParameters.connectionId === null || requestParameters.connectionId === undefined) {
            throw new runtime.RequiredError('connectionId','Required parameter requestParameters.connectionId was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGet.');
        }

        if (requestParameters.environment === null || requestParameters.environment === undefined) {
            throw new runtime.RequiredError('environment','Required parameter requestParameters.environment was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/connections/{connectionId}/metadata/environments/{environment}/tables`.replace(`{${"connectionId"}}`, encodeURIComponent(String(requestParameters.connectionId))).replace(`{${"environment"}}`, encodeURIComponent(String(requestParameters.environment))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ListTableFromJSON));
    }

    /**
     */
    async connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGet(requestParameters: ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ListTable>> {
        const response = await this.connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGetRaw(requestParameters: ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TableDto>> {
        if (requestParameters.environment === null || requestParameters.environment === undefined) {
            throw new runtime.RequiredError('environment','Required parameter requestParameters.environment was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGet.');
        }

        if (requestParameters.tableName === null || requestParameters.tableName === undefined) {
            throw new runtime.RequiredError('tableName','Required parameter requestParameters.tableName was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGet.');
        }

        if (requestParameters.connectionId === null || requestParameters.connectionId === undefined) {
            throw new runtime.RequiredError('connectionId','Required parameter requestParameters.connectionId was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/connections/{connectionId}/metadata/environments/{environment}/tables/{tableName}`.replace(`{${"environment"}}`, encodeURIComponent(String(requestParameters.environment))).replace(`{${"tableName"}}`, encodeURIComponent(String(requestParameters.tableName))).replace(`{${"connectionId"}}`, encodeURIComponent(String(requestParameters.connectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TableDtoFromJSON(jsonValue));
    }

    /**
     */
    async connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGet(requestParameters: ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TableDto> {
        const response = await this.connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGetRaw(requestParameters: ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RelatedTable>>> {
        if (requestParameters.environment === null || requestParameters.environment === undefined) {
            throw new runtime.RequiredError('environment','Required parameter requestParameters.environment was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGet.');
        }

        if (requestParameters.tableName === null || requestParameters.tableName === undefined) {
            throw new runtime.RequiredError('tableName','Required parameter requestParameters.tableName was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGet.');
        }

        if (requestParameters.connectionId === null || requestParameters.connectionId === undefined) {
            throw new runtime.RequiredError('connectionId','Required parameter requestParameters.connectionId was null or undefined when calling connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/connections/{connectionId}/metadata/environments/{environment}/tables/{tableName}/related-tables`.replace(`{${"environment"}}`, encodeURIComponent(String(requestParameters.environment))).replace(`{${"tableName"}}`, encodeURIComponent(String(requestParameters.tableName))).replace(`{${"connectionId"}}`, encodeURIComponent(String(requestParameters.connectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RelatedTableFromJSON));
    }

    /**
     */
    async connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGet(requestParameters: ConnectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RelatedTable>> {
        const response = await this.connectionsConnectionIdMetadataEnvironmentsEnvironmentTablesTableNameRelatedTablesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
