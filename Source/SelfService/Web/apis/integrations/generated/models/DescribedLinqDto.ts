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
 * @interface DescribedLinqDto
 */
export interface DescribedLinqDto {
    /**
     * 
     * @type {string}
     * @memberof DescribedLinqDto
     */
    linqExpression?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DescribedLinqDto
     */
    description?: string;
}

/**
 * Check if a given object implements the DescribedLinqDto interface.
 */
export function instanceOfDescribedLinqDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DescribedLinqDtoFromJSON(json: any): DescribedLinqDto {
    return DescribedLinqDtoFromJSONTyped(json, false);
}

export function DescribedLinqDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribedLinqDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linqExpression': !exists(json, 'linqExpression') ? undefined : json['linqExpression'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function DescribedLinqDtoToJSON(value?: DescribedLinqDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linqExpression': value.linqExpression,
        'description': value.description,
    };
}

