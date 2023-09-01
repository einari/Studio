/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.333
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MappableTableColumn } from './MappableTableColumn';
import {
    MappableTableColumnFromJSON,
    MappableTableColumnFromJSONTyped,
    MappableTableColumnToJSON,
} from './MappableTableColumn';

/**
 * Represents a mapping from a column on an M3 table to a field on a message-type
 * @export
 * @interface MappedField
 */
export interface MappedField {
    /**
     * 
     * @type {MappableTableColumn}
     * @memberof MappedField
     */
    mappedColumn: MappableTableColumn;
    /**
     * The name of the field in the message-type
     * @type {string}
     * @memberof MappedField
     */
    mappedName: string;
    /**
     * Description of the field, from the M3 metadata. May be empty.
     * @type {string}
     * @memberof MappedField
     */
    mappedDescription: string;
}

/**
 * Check if a given object implements the MappedField interface.
 */
export function instanceOfMappedField(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mappedColumn" in value;
    isInstance = isInstance && "mappedName" in value;
    isInstance = isInstance && "mappedDescription" in value;

    return isInstance;
}

export function MappedFieldFromJSON(json: any): MappedField {
    return MappedFieldFromJSONTyped(json, false);
}

export function MappedFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappedField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mappedColumn': MappableTableColumnFromJSON(json['mappedColumn']),
        'mappedName': json['mappedName'],
        'mappedDescription': json['mappedDescription'],
    };
}

export function MappedFieldToJSON(value?: MappedField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mappedColumn': MappableTableColumnToJSON(value.mappedColumn),
        'mappedName': value.mappedName,
        'mappedDescription': value.mappedDescription,
    };
}

