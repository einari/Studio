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
  CommandHeader,
  CommandMappingModel,
  CommandParameters,
  CreateCommand,
  ProblemDetails,
  UpdateCommandNames,
  UpdateCommandParameters,
} from '../models/index';
import {
    CommandHeaderFromJSON,
    CommandHeaderToJSON,
    CommandMappingModelFromJSON,
    CommandMappingModelToJSON,
    CommandParametersFromJSON,
    CommandParametersToJSON,
    CreateCommandFromJSON,
    CreateCommandToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    UpdateCommandNamesFromJSON,
    UpdateCommandNamesToJSON,
    UpdateCommandParametersFromJSON,
    UpdateCommandParametersToJSON,
} from '../models/index';

export interface ConnectionsIdCommandsCommandIdCreatePostRequest {
    id: string;
    commandId: string;
    createCommand?: CreateCommand;
}

export interface ConnectionsIdCommandsCommandIdDeleteRequest {
    id: string;
    commandId: string;
}

export interface ConnectionsIdCommandsCommandIdDeployPostRequest {
    id: string;
    commandId: string;
}

export interface ConnectionsIdCommandsCommandIdGetRequest {
    id: string;
    commandId: string;
}

export interface ConnectionsIdCommandsCommandIdParametersGetRequest {
    id: string;
    commandId: string;
}

export interface ConnectionsIdCommandsCommandIdParametersPostRequest {
    id: string;
    commandId: string;
    updateCommandParameters?: UpdateCommandParameters;
}

export interface ConnectionsIdCommandsCommandIdPostRequest {
    id: string;
    commandId: string;
    updateCommandNames?: UpdateCommandNames;
}

export interface ConnectionsIdCommandsCommandIdUndeployPostRequest {
    id: string;
    commandId: string;
}

export interface ConnectionsIdCommandsGetRequest {
    id: string;
    startIndex?: number;
    pageSize?: number;
}

/**
 * 
 */
export class CommandMappingApi extends runtime.BaseAPI {

    /**
     * POST to Update command name, namespace and description
     */
    async connectionsIdCommandsCommandIdCreatePostRaw(requestParameters: ConnectionsIdCommandsCommandIdCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdCreatePost.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdCreatePost.');
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
            path: `/connections/{id}/commands/{commandId}/create`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCommandToJSON(requestParameters.createCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to Update command name, namespace and description
     */
    async connectionsIdCommandsCommandIdCreatePost(requestParameters: ConnectionsIdCommandsCommandIdCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdCommandsCommandIdCreatePostRaw(requestParameters, initOverrides);
    }

    /**
     * DELETE the mapping of a program to a command.
     */
    async connectionsIdCommandsCommandIdDeleteRaw(requestParameters: ConnectionsIdCommandsCommandIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdDelete.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdDelete.');
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
            path: `/connections/{id}/commands/{commandId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * DELETE the mapping of a program to a command.
     */
    async connectionsIdCommandsCommandIdDelete(requestParameters: ConnectionsIdCommandsCommandIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdCommandsCommandIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Deploy the command mapping
     */
    async connectionsIdCommandsCommandIdDeployPostRaw(requestParameters: ConnectionsIdCommandsCommandIdDeployPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdDeployPost.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdDeployPost.');
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
            path: `/connections/{id}/commands/{commandId}/deploy`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deploy the command mapping
     */
    async connectionsIdCommandsCommandIdDeployPost(requestParameters: ConnectionsIdCommandsCommandIdDeployPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdCommandsCommandIdDeployPostRaw(requestParameters, initOverrides);
    }

    /**
     * GET a command mapping for a connection.
     */
    async connectionsIdCommandsCommandIdGetRaw(requestParameters: ConnectionsIdCommandsCommandIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommandMappingModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdGet.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdGet.');
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
            path: `/connections/{id}/commands/{commandId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommandMappingModelFromJSON(jsonValue));
    }

    /**
     * GET a command mapping for a connection.
     */
    async connectionsIdCommandsCommandIdGet(requestParameters: ConnectionsIdCommandsCommandIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommandMappingModel> {
        const response = await this.connectionsIdCommandsCommandIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * GET the mapped parameters for a command
     */
    async connectionsIdCommandsCommandIdParametersGetRaw(requestParameters: ConnectionsIdCommandsCommandIdParametersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommandParameters>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdParametersGet.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdParametersGet.');
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
            path: `/connections/{id}/commands/{commandId}/parameters`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommandParametersFromJSON(jsonValue));
    }

    /**
     * GET the mapped parameters for a command
     */
    async connectionsIdCommandsCommandIdParametersGet(requestParameters: ConnectionsIdCommandsCommandIdParametersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommandParameters> {
        const response = await this.connectionsIdCommandsCommandIdParametersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * POST to Update parameter mappings for a command
     */
    async connectionsIdCommandsCommandIdParametersPostRaw(requestParameters: ConnectionsIdCommandsCommandIdParametersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdParametersPost.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdParametersPost.');
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
            path: `/connections/{id}/commands/{commandId}/parameters`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCommandParametersToJSON(requestParameters.updateCommandParameters),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to Update parameter mappings for a command
     */
    async connectionsIdCommandsCommandIdParametersPost(requestParameters: ConnectionsIdCommandsCommandIdParametersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdCommandsCommandIdParametersPostRaw(requestParameters, initOverrides);
    }

    /**
     * POST to update command name, namespace and description
     */
    async connectionsIdCommandsCommandIdPostRaw(requestParameters: ConnectionsIdCommandsCommandIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdPost.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdPost.');
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
            path: `/connections/{id}/commands/{commandId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCommandNamesToJSON(requestParameters.updateCommandNames),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to update command name, namespace and description
     */
    async connectionsIdCommandsCommandIdPost(requestParameters: ConnectionsIdCommandsCommandIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdCommandsCommandIdPostRaw(requestParameters, initOverrides);
    }

    /**
     * POST to undeploy the command mapping
     */
    async connectionsIdCommandsCommandIdUndeployPostRaw(requestParameters: ConnectionsIdCommandsCommandIdUndeployPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsCommandIdUndeployPost.');
        }

        if (requestParameters.commandId === null || requestParameters.commandId === undefined) {
            throw new runtime.RequiredError('commandId','Required parameter requestParameters.commandId was null or undefined when calling connectionsIdCommandsCommandIdUndeployPost.');
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
            path: `/connections/{id}/commands/{commandId}/undeploy`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"commandId"}}`, encodeURIComponent(String(requestParameters.commandId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * POST to undeploy the command mapping
     */
    async connectionsIdCommandsCommandIdUndeployPost(requestParameters: ConnectionsIdCommandsCommandIdUndeployPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectionsIdCommandsCommandIdUndeployPostRaw(requestParameters, initOverrides);
    }

    /**
     * GET all command mappings for a connection
     */
    async connectionsIdCommandsGetRaw(requestParameters: ConnectionsIdCommandsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommandHeader>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling connectionsIdCommandsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
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
            path: `/connections/{id}/commands`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommandHeaderFromJSON));
    }

    /**
     * GET all command mappings for a connection
     */
    async connectionsIdCommandsGet(requestParameters: ConnectionsIdCommandsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommandHeader>> {
        const response = await this.connectionsIdCommandsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
