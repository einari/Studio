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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ColumnRecommendation
 */
export interface ColumnRecommendation {
    /**
     * 
     * @type {string}
     * @memberof ColumnRecommendation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ColumnRecommendation
     */
    why?: string;
}

/**
 * Check if a given object implements the ColumnRecommendation interface.
 */
export function instanceOfColumnRecommendation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ColumnRecommendationFromJSON(json: any): ColumnRecommendation {
    return ColumnRecommendationFromJSONTyped(json, false);
}

export function ColumnRecommendationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColumnRecommendation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'why': !exists(json, 'why') ? undefined : json['why'],
    };
}

export function ColumnRecommendationToJSON(value?: ColumnRecommendation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'why': value.why,
    };
}

