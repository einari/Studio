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

export interface LoginPostRequest {
    passphrase?: string;
}

/**
 * 
 */
export class LoginApi extends runtime.BaseAPI {

    /**
     */
    async loginCheckGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Login/check`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async loginCheckGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.loginCheckGetRaw(initOverrides);
    }

    /**
     */
    async loginPostRaw(requestParameters: LoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.passphrase !== undefined) {
            queryParameters['passphrase'] = requestParameters.passphrase;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async loginPost(requestParameters: LoginPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.loginPostRaw(requestParameters, initOverrides);
    }

}
