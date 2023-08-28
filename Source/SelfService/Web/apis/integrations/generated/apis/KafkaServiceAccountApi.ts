/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.301
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountAccess,
  KafkaServiceAccountCreatedDto,
  KafkaServiceAccountCredentialsDto,
  KafkaServiceAccountListDto,
  ProblemDetails,
} from '../models/index';
import {
    AccountAccessFromJSON,
    AccountAccessToJSON,
    KafkaServiceAccountCreatedDtoFromJSON,
    KafkaServiceAccountCreatedDtoToJSON,
    KafkaServiceAccountCredentialsDtoFromJSON,
    KafkaServiceAccountCredentialsDtoToJSON,
    KafkaServiceAccountListDtoFromJSON,
    KafkaServiceAccountListDtoToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models/index';

export interface ConnectionsIdKafkaServiceAccountsGetRequest {
    id: string;
}

export interface ConnectionsIdKafkaServiceAccountsServiceAccountNameDeleteRequest {
    id: string;
    serviceAccountName: string;
}

export interface ConnectionsIdKafkaServiceAccountsServiceAccountNameGetRequest {
    id: string;
    serviceAccountName: string;
}

export interface ConnectionsIdKafkaServiceAccountsServiceAccountNamePostRequest {
    id: string;
    serviceAccountName: string;
    description?: string;
    access?: AccountAccess;
}

/**
 * 
 */
export class KafkaServiceAccountApi extends runtime.BaseAPI {

    /**
     * List all service accounts for a connection.
     */
    async connectionsIdKafkaServiceAccountsGetRaw(requestParameters: ConnectionsIdKafkaServiceAccountsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<KafkaServiceAccountListDto>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdKafkaServiceAccountsGet.');
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
            path: `/connections/{id}/kafkaServiceAccounts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(KafkaServiceAccountListDtoFromJSON));
    }

    /**
     * List all service accounts for a connection.
     */
    async connectionsIdKafkaServiceAccountsGet(requestParameters: ConnectionsIdKafkaServiceAccountsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<KafkaServiceAccountListDto>> {
        const response = await this.connectionsIdKafkaServiceAccountsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a given service account for a connection
     */
    async connectionsIdKafkaServiceAccountsServiceAccountNameDeleteRaw(requestParameters: ConnectionsIdKafkaServiceAccountsServiceAccountNameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdKafkaServiceAccountsServiceAccountNameDelete.');
        }

        if (requestParameters.serviceAccountName === null || requestParameters.serviceAccountName === undefined) {
            throw new runtime.RequiredError('serviceAccountName','Required parameter requestParameters.serviceAccountName was null or undefined when calling connectionsIdKafkaServiceAccountsServiceAccountNameDelete.');
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
            path: `/connections/{id}/kafkaServiceAccounts/{serviceAccountName}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"serviceAccountName"}}`, encodeURIComponent(String(requestParameters.serviceAccountName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a given service account for a connection
     */
    async connectionsIdKafkaServiceAccountsServiceAccountNameDelete(requestParameters: ConnectionsIdKafkaServiceAccountsServiceAccountNameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdKafkaServiceAccountsServiceAccountNameDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get credentials for a given service account for a connection
     */
    async connectionsIdKafkaServiceAccountsServiceAccountNameGetRaw(requestParameters: ConnectionsIdKafkaServiceAccountsServiceAccountNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KafkaServiceAccountCredentialsDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdKafkaServiceAccountsServiceAccountNameGet.');
        }

        if (requestParameters.serviceAccountName === null || requestParameters.serviceAccountName === undefined) {
            throw new runtime.RequiredError('serviceAccountName','Required parameter requestParameters.serviceAccountName was null or undefined when calling connectionsIdKafkaServiceAccountsServiceAccountNameGet.');
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
            path: `/connections/{id}/kafkaServiceAccounts/{serviceAccountName}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"serviceAccountName"}}`, encodeURIComponent(String(requestParameters.serviceAccountName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KafkaServiceAccountCredentialsDtoFromJSON(jsonValue));
    }

    /**
     * Get credentials for a given service account for a connection
     */
    async connectionsIdKafkaServiceAccountsServiceAccountNameGet(requestParameters: ConnectionsIdKafkaServiceAccountsServiceAccountNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KafkaServiceAccountCredentialsDto> {
        const response = await this.connectionsIdKafkaServiceAccountsServiceAccountNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a service-account for connecting to and using the stream of  messages from a connection. Each service-account needs a unique name pr  connection and can have a description.
     */
    async connectionsIdKafkaServiceAccountsServiceAccountNamePostRaw(requestParameters: ConnectionsIdKafkaServiceAccountsServiceAccountNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KafkaServiceAccountCreatedDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdKafkaServiceAccountsServiceAccountNamePost.');
        }

        if (requestParameters.serviceAccountName === null || requestParameters.serviceAccountName === undefined) {
            throw new runtime.RequiredError('serviceAccountName','Required parameter requestParameters.serviceAccountName was null or undefined when calling connectionsIdKafkaServiceAccountsServiceAccountNamePost.');
        }

        const queryParameters: any = {};

        if (requestParameters.description !== undefined) {
            queryParameters['description'] = requestParameters.description;
        }

        if (requestParameters.access !== undefined) {
            queryParameters['access'] = requestParameters.access;
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
            path: `/connections/{id}/kafkaServiceAccounts/{serviceAccountName}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"serviceAccountName"}}`, encodeURIComponent(String(requestParameters.serviceAccountName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KafkaServiceAccountCreatedDtoFromJSON(jsonValue));
    }

    /**
     * Create a service-account for connecting to and using the stream of  messages from a connection. Each service-account needs a unique name pr  connection and can have a description.
     */
    async connectionsIdKafkaServiceAccountsServiceAccountNamePost(requestParameters: ConnectionsIdKafkaServiceAccountsServiceAccountNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KafkaServiceAccountCreatedDto> {
        const response = await this.connectionsIdKafkaServiceAccountsServiceAccountNamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
