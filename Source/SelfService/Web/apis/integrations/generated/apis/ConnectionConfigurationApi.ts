/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.351
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConnectionConfigurationResult,
  ConnectionModelResult,
  IonConfigRequest,
  IonConfigurationResult,
  M3BasicAuthConfigRequest,
  M3BasicAuthConfigurationResult,
  MdpConfigurationResult,
  MetadataPublisherConfigRequest,
  ProblemDetails,
} from '../models/index';
import {
    ConnectionConfigurationResultFromJSON,
    ConnectionConfigurationResultToJSON,
    ConnectionModelResultFromJSON,
    ConnectionModelResultToJSON,
    IonConfigRequestFromJSON,
    IonConfigRequestToJSON,
    IonConfigurationResultFromJSON,
    IonConfigurationResultToJSON,
    M3BasicAuthConfigRequestFromJSON,
    M3BasicAuthConfigRequestToJSON,
    M3BasicAuthConfigurationResultFromJSON,
    M3BasicAuthConfigurationResultToJSON,
    MdpConfigurationResultFromJSON,
    MdpConfigurationResultToJSON,
    MetadataPublisherConfigRequestFromJSON,
    MetadataPublisherConfigRequestToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models/index';

export interface ConnectionsIdConfigurationBasicGetRequest {
    id: string;
}

export interface ConnectionsIdConfigurationBasicPostRequest {
    id: string;
    m3BasicAuthConfigRequest?: M3BasicAuthConfigRequest;
}

export interface ConnectionsIdConfigurationExporterCronPostRequest {
    id: string;
    cronExpression?: string;
}

export interface ConnectionsIdConfigurationExporterStrictCertificateValidationPostRequest {
    id: string;
    enable?: boolean;
}

export interface ConnectionsIdConfigurationGetRequest {
    id: string;
}

export interface ConnectionsIdConfigurationIonGetRequest {
    id: string;
}

export interface ConnectionsIdConfigurationIonPostRequest {
    id: string;
    ionConfigRequest?: IonConfigRequest;
}

export interface ConnectionsIdConfigurationIonSimulateFailurePutRequest {
    id: string;
}

export interface ConnectionsIdConfigurationIonSimulateSuccessPutRequest {
    id: string;
}

export interface ConnectionsIdConfigurationMdpConcurrencyPostRequest {
    id: string;
    concurrency?: number;
}

export interface ConnectionsIdConfigurationMdpGetRequest {
    id: string;
}

export interface ConnectionsIdConfigurationMdpPostRequest {
    id: string;
    metadataPublisherConfigRequest?: MetadataPublisherConfigRequest;
}

export interface ConnectionsIdConfigurationMdpSimulateFailurePutRequest {
    id: string;
}

export interface ConnectionsIdConfigurationMdpSimulateSuccessPutRequest {
    id: string;
}

/**
 * 
 */
export class ConnectionConfigurationApi extends runtime.BaseAPI {

    /**
     * GET basic authentication configuration for the connection, if present
     */
    async connectionsIdConfigurationBasicGetRaw(requestParameters: ConnectionsIdConfigurationBasicGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<M3BasicAuthConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationBasicGet.');
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
            path: `/connections/{id}/configuration/basic`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => M3BasicAuthConfigurationResultFromJSON(jsonValue));
    }

    /**
     * GET basic authentication configuration for the connection, if present
     */
    async connectionsIdConfigurationBasicGet(requestParameters: ConnectionsIdConfigurationBasicGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<M3BasicAuthConfigurationResult> {
        const response = await this.connectionsIdConfigurationBasicGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST to this resource to configure M3 with basic auth.  This works with non-ION M3 instances.
     */
    async connectionsIdConfigurationBasicPostRaw(requestParameters: ConnectionsIdConfigurationBasicPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<M3BasicAuthConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationBasicPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/connections/{id}/configuration/basic`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: M3BasicAuthConfigRequestToJSON(requestParameters.m3BasicAuthConfigRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => M3BasicAuthConfigurationResultFromJSON(jsonValue));
    }

    /**
     * POST to this resource to configure M3 with basic auth.  This works with non-ION M3 instances.
     */
    async connectionsIdConfigurationBasicPost(requestParameters: ConnectionsIdConfigurationBasicPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<M3BasicAuthConfigurationResult> {
        const response = await this.connectionsIdConfigurationBasicPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST to this resource to configure when the exporter should check for new data
     */
    async connectionsIdConfigurationExporterCronPostRaw(requestParameters: ConnectionsIdConfigurationExporterCronPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationExporterCronPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.cronExpression !== undefined) {
            queryParameters['cronExpression'] = requestParameters.cronExpression;
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
            path: `/connections/{id}/configuration/exporter/cron`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to this resource to configure when the exporter should check for new data
     */
    async connectionsIdConfigurationExporterCronPost(requestParameters: ConnectionsIdConfigurationExporterCronPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdConfigurationExporterCronPostRaw(requestParameters, initOverrides);
    }

    /**
     * POST to this resource to configure when the exporter should check for new data
     */
    async connectionsIdConfigurationExporterStrictCertificateValidationPostRaw(requestParameters: ConnectionsIdConfigurationExporterStrictCertificateValidationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationExporterStrictCertificateValidationPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.enable !== undefined) {
            queryParameters['enable'] = requestParameters.enable;
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
            path: `/connections/{id}/configuration/exporter/strict-certificate-validation`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to this resource to configure when the exporter should check for new data
     */
    async connectionsIdConfigurationExporterStrictCertificateValidationPost(requestParameters: ConnectionsIdConfigurationExporterStrictCertificateValidationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdConfigurationExporterStrictCertificateValidationPostRaw(requestParameters, initOverrides);
    }

    /**
     * GET the configuration for a connection. Will include configurations of  different kinds that together make up the whole connection to M3.
     */
    async connectionsIdConfigurationGetRaw(requestParameters: ConnectionsIdConfigurationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectionConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationGet.');
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
            path: `/connections/{id}/configuration`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionConfigurationResultFromJSON(jsonValue));
    }

    /**
     * GET the configuration for a connection. Will include configurations of  different kinds that together make up the whole connection to M3.
     */
    async connectionsIdConfigurationGet(requestParameters: ConnectionsIdConfigurationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectionConfigurationResult> {
        const response = await this.connectionsIdConfigurationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * GET the Intelligent Open Network (ION) configuration for the connection
     */
    async connectionsIdConfigurationIonGetRaw(requestParameters: ConnectionsIdConfigurationIonGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IonConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationIonGet.');
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
            path: `/connections/{id}/configuration/ion`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IonConfigurationResultFromJSON(jsonValue));
    }

    /**
     * GET the Intelligent Open Network (ION) configuration for the connection
     */
    async connectionsIdConfigurationIonGet(requestParameters: ConnectionsIdConfigurationIonGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IonConfigurationResult> {
        const response = await this.connectionsIdConfigurationIonGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST to this resource to configure Intelligent Open Network (ION) for the  connection. ION is a gateway into M3 that the deployed Bridge -services use  to communicate with M3. Without this the Bridge will not work.
     */
    async connectionsIdConfigurationIonPostRaw(requestParameters: ConnectionsIdConfigurationIonPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IonConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationIonPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/connections/{id}/configuration/ion`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IonConfigRequestToJSON(requestParameters.ionConfigRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IonConfigurationResultFromJSON(jsonValue));
    }

    /**
     * POST to this resource to configure Intelligent Open Network (ION) for the  connection. ION is a gateway into M3 that the deployed Bridge -services use  to communicate with M3. Without this the Bridge will not work.
     */
    async connectionsIdConfigurationIonPost(requestParameters: ConnectionsIdConfigurationIonPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IonConfigurationResult> {
        const response = await this.connectionsIdConfigurationIonPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PUT on this resource to simulate ION connection-failure
     */
    async connectionsIdConfigurationIonSimulateFailurePutRaw(requestParameters: ConnectionsIdConfigurationIonSimulateFailurePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectionModelResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationIonSimulateFailurePut.');
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
            path: `/connections/{id}/configuration/ion/simulate/failure`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionModelResultFromJSON(jsonValue));
    }

    /**
     * PUT on this resource to simulate ION connection-failure
     */
    async connectionsIdConfigurationIonSimulateFailurePut(requestParameters: ConnectionsIdConfigurationIonSimulateFailurePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectionModelResult> {
        const response = await this.connectionsIdConfigurationIonSimulateFailurePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PUT on this resource to simulate ION connection-success
     */
    async connectionsIdConfigurationIonSimulateSuccessPutRaw(requestParameters: ConnectionsIdConfigurationIonSimulateSuccessPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectionModelResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationIonSimulateSuccessPut.');
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
            path: `/connections/{id}/configuration/ion/simulate/success`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionModelResultFromJSON(jsonValue));
    }

    /**
     * PUT on this resource to simulate ION connection-success
     */
    async connectionsIdConfigurationIonSimulateSuccessPut(requestParameters: ConnectionsIdConfigurationIonSimulateSuccessPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectionModelResult> {
        const response = await this.connectionsIdConfigurationIonSimulateSuccessPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST to this resource to configure the Metadata Publisher (MDP) for the  connection. The MDP service is gives the Bridge API insight into the tables,  fields, programs and environments in the M3 -instance.  This endpoint is used to configure the concurrency level for the MDP service (How many parallel requests it handles).  High concurrency can improve throughput, but also increases the load on the MDP instance.
     */
    async connectionsIdConfigurationMdpConcurrencyPostRaw(requestParameters: ConnectionsIdConfigurationMdpConcurrencyPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MdpConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationMdpConcurrencyPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.concurrency !== undefined) {
            queryParameters['concurrency'] = requestParameters.concurrency;
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
            path: `/connections/{id}/configuration/mdp/concurrency`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MdpConfigurationResultFromJSON(jsonValue));
    }

    /**
     * POST to this resource to configure the Metadata Publisher (MDP) for the  connection. The MDP service is gives the Bridge API insight into the tables,  fields, programs and environments in the M3 -instance.  This endpoint is used to configure the concurrency level for the MDP service (How many parallel requests it handles).  High concurrency can improve throughput, but also increases the load on the MDP instance.
     */
    async connectionsIdConfigurationMdpConcurrencyPost(requestParameters: ConnectionsIdConfigurationMdpConcurrencyPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MdpConfigurationResult> {
        const response = await this.connectionsIdConfigurationMdpConcurrencyPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * GET the Metadata Publisher (MDP) configuration for the connection
     */
    async connectionsIdConfigurationMdpGetRaw(requestParameters: ConnectionsIdConfigurationMdpGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MdpConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationMdpGet.');
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
            path: `/connections/{id}/configuration/mdp`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MdpConfigurationResultFromJSON(jsonValue));
    }

    /**
     * GET the Metadata Publisher (MDP) configuration for the connection
     */
    async connectionsIdConfigurationMdpGet(requestParameters: ConnectionsIdConfigurationMdpGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MdpConfigurationResult> {
        const response = await this.connectionsIdConfigurationMdpGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST to this resource to configure the Metadata Publisher (MDP) for the  connection. The MDP service is gives the Bridge API insight into the tables,  fields, programs and environments in the M3 -instance.
     */
    async connectionsIdConfigurationMdpPostRaw(requestParameters: ConnectionsIdConfigurationMdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MdpConfigurationResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationMdpPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/connections/{id}/configuration/mdp`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MetadataPublisherConfigRequestToJSON(requestParameters.metadataPublisherConfigRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MdpConfigurationResultFromJSON(jsonValue));
    }

    /**
     * POST to this resource to configure the Metadata Publisher (MDP) for the  connection. The MDP service is gives the Bridge API insight into the tables,  fields, programs and environments in the M3 -instance.
     */
    async connectionsIdConfigurationMdpPost(requestParameters: ConnectionsIdConfigurationMdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MdpConfigurationResult> {
        const response = await this.connectionsIdConfigurationMdpPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PUT on this resource to simulate the Metadata Publisher reporting  connection-failure
     */
    async connectionsIdConfigurationMdpSimulateFailurePutRaw(requestParameters: ConnectionsIdConfigurationMdpSimulateFailurePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectionModelResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationMdpSimulateFailurePut.');
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
            path: `/connections/{id}/configuration/mdp/simulate/failure`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionModelResultFromJSON(jsonValue));
    }

    /**
     * PUT on this resource to simulate the Metadata Publisher reporting  connection-failure
     */
    async connectionsIdConfigurationMdpSimulateFailurePut(requestParameters: ConnectionsIdConfigurationMdpSimulateFailurePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectionModelResult> {
        const response = await this.connectionsIdConfigurationMdpSimulateFailurePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * PUT on this resource to simulate the Metadata Publisher reporting  connection-success
     */
    async connectionsIdConfigurationMdpSimulateSuccessPutRaw(requestParameters: ConnectionsIdConfigurationMdpSimulateSuccessPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectionModelResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdConfigurationMdpSimulateSuccessPut.');
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
            path: `/connections/{id}/configuration/mdp/simulate/success`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionModelResultFromJSON(jsonValue));
    }

    /**
     * PUT on this resource to simulate the Metadata Publisher reporting  connection-success
     */
    async connectionsIdConfigurationMdpSimulateSuccessPut(requestParameters: ConnectionsIdConfigurationMdpSimulateSuccessPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectionModelResult> {
        const response = await this.connectionsIdConfigurationMdpSimulateSuccessPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
