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
 * @interface MetadataPublisherConfigDto
 */
export interface MetadataPublisherConfigDto {
    /**
     * 
     * @type {string}
     * @memberof MetadataPublisherConfigDto
     */
    deploymentName: string;
    /**
     * 
     * @type {string}
     * @memberof MetadataPublisherConfigDto
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof MetadataPublisherConfigDto
     */
    password: string;
}

/**
 * Check if a given object implements the MetadataPublisherConfigDto interface.
 */
export function instanceOfMetadataPublisherConfigDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deploymentName" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function MetadataPublisherConfigDtoFromJSON(json: any): MetadataPublisherConfigDto {
    return MetadataPublisherConfigDtoFromJSONTyped(json, false);
}

export function MetadataPublisherConfigDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataPublisherConfigDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deploymentName': json['deploymentName'],
        'url': json['url'],
        'password': json['password'],
    };
}

export function MetadataPublisherConfigDtoToJSON(value?: MetadataPublisherConfigDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deploymentName': value.deploymentName,
        'url': value.url,
        'password': value.password,
    };
}

