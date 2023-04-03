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
import type { MappableTableColumn } from './MappableTableColumn';
import {
    MappableTableColumnFromJSON,
    MappableTableColumnFromJSONTyped,
    MappableTableColumnToJSON,
} from './MappableTableColumn';

/**
 * 
 * @export
 * @interface MappableTable
 */
export interface MappableTable {
    /**
     * 
     * @type {string}
     * @memberof MappableTable
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MappableTable
     */
    description?: string | null;
    /**
     * 
     * @type {Array<MappableTableColumn>}
     * @memberof MappableTable
     */
    columns?: Array<MappableTableColumn> | null;
    /**
     * 
     * @type {Array<MappableTableColumn>}
     * @memberof MappableTable
     */
    required?: Array<MappableTableColumn> | null;
}

/**
 * Check if a given object implements the MappableTable interface.
 */
export function instanceOfMappableTable(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MappableTableFromJSON(json: any): MappableTable {
    return MappableTableFromJSONTyped(json, false);
}

export function MappableTableFromJSONTyped(json: any, ignoreDiscriminator: boolean): MappableTable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'columns': !exists(json, 'columns') ? undefined : (json['columns'] === null ? null : (json['columns'] as Array<any>).map(MappableTableColumnFromJSON)),
        'required': !exists(json, 'required') ? undefined : (json['required'] === null ? null : (json['required'] as Array<any>).map(MappableTableColumnFromJSON)),
    };
}

export function MappableTableToJSON(value?: MappableTable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'columns': value.columns === undefined ? undefined : (value.columns === null ? null : (value.columns as Array<any>).map(MappableTableColumnToJSON)),
        'required': value.required === undefined ? undefined : (value.required === null ? null : (value.required as Array<any>).map(MappableTableColumnToJSON)),
    };
}
