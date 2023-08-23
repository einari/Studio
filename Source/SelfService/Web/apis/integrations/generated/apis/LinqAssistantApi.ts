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
  DescribedLinqDto,
  NoSuchReadModelResult,
  ProblemDetails,
} from '../models/index';
import {
    DescribedLinqDtoFromJSON,
    DescribedLinqDtoToJSON,
    NoSuchReadModelResultFromJSON,
    NoSuchReadModelResultToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models/index';

export interface ConnectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPostRequest {
    id: string;
    table: string;
    message: string;
    linqExpression: string;
}

export interface ConnectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPostRequest {
    id: string;
    table: string;
    message: string;
    request: string;
}

/**
 * 
 */
export class LinqAssistantApi extends runtime.BaseAPI {

    /**
     * Describe a Linq predicate for a message mapping, based on a user\'s request
     */
    async connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPostRaw(requestParameters: ConnectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DescribedLinqDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPost.');
        }

        if (requestParameters.table === null || requestParameters.table === undefined) {
            throw new runtime.RequiredError('table','Required parameter requestParameters.table was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPost.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPost.');
        }

        if (requestParameters.linqExpression === null || requestParameters.linqExpression === undefined) {
            throw new runtime.RequiredError('linqExpression','Required parameter requestParameters.linqExpression was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.linqExpression !== undefined) {
            queryParameters['linqExpression'] = requestParameters.linqExpression;
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
            path: `/connections/{id}/message-mappings/tables/{table}/messages/{message}/linq-assistant/createDescription`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"table"}}`, encodeURIComponent(String(requestParameters.table))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DescribedLinqDtoFromJSON(jsonValue));
    }

    /**
     * Describe a Linq predicate for a message mapping, based on a user\'s request
     */
    async connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPost(requestParameters: ConnectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DescribedLinqDto> {
        const response = await this.connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateDescriptionPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a LINQ predicate for a message mapping, based on a user\'s request
     */
    async connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPostRaw(requestParameters: ConnectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DescribedLinqDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPost.');
        }

        if (requestParameters.table === null || requestParameters.table === undefined) {
            throw new runtime.RequiredError('table','Required parameter requestParameters.table was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPost.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPost.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.request !== undefined) {
            queryParameters['request'] = requestParameters.request;
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
            path: `/connections/{id}/message-mappings/tables/{table}/messages/{message}/linq-assistant/createLinq`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"table"}}`, encodeURIComponent(String(requestParameters.table))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DescribedLinqDtoFromJSON(jsonValue));
    }

    /**
     * Create a LINQ predicate for a message mapping, based on a user\'s request
     */
    async connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPost(requestParameters: ConnectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DescribedLinqDto> {
        const response = await this.connectionsIdMessageMappingsTablesTableMessagesMessageLinqAssistantCreateLinqPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
