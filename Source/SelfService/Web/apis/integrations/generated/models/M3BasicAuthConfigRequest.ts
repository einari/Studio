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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface M3BasicAuthConfigRequest
 */
export interface M3BasicAuthConfigRequest {
    /**
     * Path to the M3 API.
     * @type {string}
     * @memberof M3BasicAuthConfigRequest
     */
    host: string;
    /**
     * 
     * @type {string}
     * @memberof M3BasicAuthConfigRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof M3BasicAuthConfigRequest
     */
    password: string;
    /**
     * If true, the connection will not validate the TLS certificate of the gateway.
     * @type {boolean}
     * @memberof M3BasicAuthConfigRequest
     */
    allowInsecureSsl?: boolean;
}

/**
 * Check if a given object implements the M3BasicAuthConfigRequest interface.
 */
export function instanceOfM3BasicAuthConfigRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "host" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function M3BasicAuthConfigRequestFromJSON(json: any): M3BasicAuthConfigRequest {
    return M3BasicAuthConfigRequestFromJSONTyped(json, false);
}

export function M3BasicAuthConfigRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): M3BasicAuthConfigRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': json['host'],
        'username': json['username'],
        'password': json['password'],
        'allowInsecureSsl': !exists(json, 'allowInsecureSsl') ? undefined : json['allowInsecureSsl'],
    };
}

export function M3BasicAuthConfigRequestToJSON(value?: M3BasicAuthConfigRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'username': value.username,
        'password': value.password,
        'allowInsecureSsl': value.allowInsecureSsl,
    };
}

