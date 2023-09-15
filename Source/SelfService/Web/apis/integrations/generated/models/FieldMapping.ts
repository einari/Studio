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
 * The mapping of a column in a table to a field in a message.
 * @export
 * @interface FieldMapping
 */
export interface FieldMapping {
    /**
     * 
     * @type {string}
     * @memberof FieldMapping
     */
    columnName: string;
    /**
     * 
     * @type {string}
     * @memberof FieldMapping
     */
    fieldName: string;
    /**
     * 
     * @type {string}
     * @memberof FieldMapping
     */
    fieldDescription?: string | null;
}

/**
 * Check if a given object implements the FieldMapping interface.
 */
export function instanceOfFieldMapping(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "columnName" in value;
    isInstance = isInstance && "fieldName" in value;

    return isInstance;
}

export function FieldMappingFromJSON(json: any): FieldMapping {
    return FieldMappingFromJSONTyped(json, false);
}

export function FieldMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldMapping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'columnName': json['columnName'],
        'fieldName': json['fieldName'],
        'fieldDescription': !exists(json, 'fieldDescription') ? undefined : json['fieldDescription'],
    };
}

export function FieldMappingToJSON(value?: FieldMapping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'columnName': value.columnName,
        'fieldName': value.fieldName,
        'fieldDescription': value.fieldDescription,
    };
}

