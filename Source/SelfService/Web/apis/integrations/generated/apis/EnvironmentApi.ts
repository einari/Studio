/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 1.0.0
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

export interface ConnectionsIdMetadataEnvironmentsGetRequest {
    id: string;
}

/**
 * 
 */
export class EnvironmentApi extends runtime.BaseAPI {

    /**
     */
    async connectionsIdMetadataEnvironmentsGetRaw(requestParameters: ConnectionsIdMetadataEnvironmentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<M3EnvironmentListDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdMetadataEnvironmentsGet.');
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
            path: `/connections/{id}/metadata/environments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(M3EnvironmentListDtoFromJSON));
    }

    /**
     */
    async connectionsIdMetadataEnvironmentsGet(requestParameters: ConnectionsIdMetadataEnvironmentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<M3EnvironmentListDto>> {
        const response = await this.connectionsIdMetadataEnvironmentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
