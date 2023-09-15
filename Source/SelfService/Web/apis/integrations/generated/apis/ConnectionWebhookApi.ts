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
  WebhookStatusDto,
} from '../models/index';
import {
    WebhookStatusDtoFromJSON,
    WebhookStatusDtoToJSON,
} from '../models/index';

export interface ConnectionsIdWebhooksDisablePostRequest {
    id: string;
}

export interface ConnectionsIdWebhooksEnablePostRequest {
    id: string;
}

export interface ConnectionsIdWebhooksStatusGetRequest {
    id: string;
}

/**
 * 
 */
export class ConnectionWebhookApi extends runtime.BaseAPI {

    /**
     * POST to this resource to disable the Webhook API for the connection
     */
    async connectionsIdWebhooksDisablePostRaw(requestParameters: ConnectionsIdWebhooksDisablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdWebhooksDisablePost.');
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
            path: `/connections/{id}/webhooks/disable`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to this resource to disable the Webhook API for the connection
     */
    async connectionsIdWebhooksDisablePost(requestParameters: ConnectionsIdWebhooksDisablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdWebhooksDisablePostRaw(requestParameters, initOverrides);
    }

    /**
     * POST to this resource to deploy the webhook API for the connection
     */
    async connectionsIdWebhooksEnablePostRaw(requestParameters: ConnectionsIdWebhooksEnablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdWebhooksEnablePost.');
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
            path: `/connections/{id}/webhooks/enable`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to this resource to deploy the webhook API for the connection
     */
    async connectionsIdWebhooksEnablePost(requestParameters: ConnectionsIdWebhooksEnablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdWebhooksEnablePostRaw(requestParameters, initOverrides);
    }

    /**
     * GET this resource to get the status of the webhook API for the connection
     */
    async connectionsIdWebhooksStatusGetRaw(requestParameters: ConnectionsIdWebhooksStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookStatusDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdWebhooksStatusGet.');
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
            path: `/connections/{id}/webhooks/status`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookStatusDtoFromJSON(jsonValue));
    }

    /**
     * GET this resource to get the status of the webhook API for the connection
     */
    async connectionsIdWebhooksStatusGet(requestParameters: ConnectionsIdWebhooksStatusGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookStatusDto> {
        const response = await this.connectionsIdWebhooksStatusGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
