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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ServiceAccountCreatedDto
 */
export interface ServiceAccountCreatedDto {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreatedDto
     */
    serviceAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreatedDto
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreatedDto
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreatedDto
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ServiceAccountCreatedDto
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the ServiceAccountCreatedDto interface.
 */
export function instanceOfServiceAccountCreatedDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceAccountCreatedDtoFromJSON(json: any): ServiceAccountCreatedDto {
    return ServiceAccountCreatedDtoFromJSONTyped(json, false);
}

export function ServiceAccountCreatedDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountCreatedDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serviceAccountName': !exists(json, 'serviceAccountName') ? undefined : json['serviceAccountName'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function ServiceAccountCreatedDtoToJSON(value?: ServiceAccountCreatedDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serviceAccountName': value.serviceAccountName,
        'description': value.description,
        'token': value.token,
        'createdBy': value.createdBy,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

