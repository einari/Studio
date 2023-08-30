/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.320
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FieldType } from './FieldType';
import {
    FieldTypeFromJSON,
    FieldTypeFromJSONTyped,
    FieldTypeToJSON,
} from './FieldType';

/**
 * 
 * @export
 * @interface ColumnMetadata
 */
export interface ColumnMetadata {
    /**
     * 
     * @type {string}
     * @memberof ColumnMetadata
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ColumnMetadata
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ColumnMetadata
     */
    description: string;
    /**
     * 
     * @type {FieldType}
     * @memberof ColumnMetadata
     */
    type: FieldType;
    /**
     * 
     * @type {number}
     * @memberof ColumnMetadata
     */
    fieldLength: number;
    /**
     * 
     * @type {number}
     * @memberof ColumnMetadata
     */
    decimalPlaces: number;
}

/**
 * Check if a given object implements the ColumnMetadata interface.
 */
export function instanceOfColumnMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "fieldLength" in value;
    isInstance = isInstance && "decimalPlaces" in value;

    return isInstance;
}

export function ColumnMetadataFromJSON(json: any): ColumnMetadata {
    return ColumnMetadataFromJSONTyped(json, false);
}

export function ColumnMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColumnMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'key': json['key'],
        'description': json['description'],
        'type': FieldTypeFromJSON(json['type']),
        'fieldLength': json['fieldLength'],
        'decimalPlaces': json['decimalPlaces'],
    };
}

export function ColumnMetadataToJSON(value?: ColumnMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'key': value.key,
        'description': value.description,
        'type': FieldTypeToJSON(value.type),
        'fieldLength': value.fieldLength,
        'decimalPlaces': value.decimalPlaces,
    };
}

