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
 * @interface ServiceAccountListDto
 */
export interface ServiceAccountListDto {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountListDto
     */
    serviceAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountListDto
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ServiceAccountListDto
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountListDto
     */
    description?: string | null;
}

/**
 * Check if a given object implements the ServiceAccountListDto interface.
 */
export function instanceOfServiceAccountListDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceAccountListDtoFromJSON(json: any): ServiceAccountListDto {
    return ServiceAccountListDtoFromJSONTyped(json, false);
}

export function ServiceAccountListDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountListDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serviceAccountName': !exists(json, 'serviceAccountName') ? undefined : json['serviceAccountName'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ServiceAccountListDtoToJSON(value?: ServiceAccountListDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serviceAccountName': value.serviceAccountName,
        'createdBy': value.createdBy,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
    };
}
