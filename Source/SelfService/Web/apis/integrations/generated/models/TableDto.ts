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
import type { ColumnMetadata } from './ColumnMetadata';
import {
    ColumnMetadataFromJSON,
    ColumnMetadataFromJSONTyped,
    ColumnMetadataToJSON,
} from './ColumnMetadata';
import type { ModelIndex } from './ModelIndex';
import {
    ModelIndexFromJSON,
    ModelIndexFromJSONTyped,
    ModelIndexToJSON,
} from './ModelIndex';

/**
 * 
 * @export
 * @interface TableDto
 */
export interface TableDto {
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    component?: string | null;
    /**
     * 
     * @type {Array<ColumnMetadata>}
     * @memberof TableDto
     */
    columns?: Array<ColumnMetadata> | null;
    /**
     * 
     * @type {ModelIndex}
     * @memberof TableDto
     */
    primaryKey?: ModelIndex;
    /**
     * 
     * @type {number}
     * @memberof TableDto
     */
    indexCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TableDto
     */
    foreignKeyCount?: number;
}

/**
 * Check if a given object implements the TableDto interface.
 */
export function instanceOfTableDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TableDtoFromJSON(json: any): TableDto {
    return TableDtoFromJSONTyped(json, false);
}

export function TableDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TableDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'component': !exists(json, 'component') ? undefined : json['component'],
        'columns': !exists(json, 'columns') ? undefined : (json['columns'] === null ? null : (json['columns'] as Array<any>).map(ColumnMetadataFromJSON)),
        'primaryKey': !exists(json, 'primaryKey') ? undefined : ModelIndexFromJSON(json['primaryKey']),
        'indexCount': !exists(json, 'indexCount') ? undefined : json['indexCount'],
        'foreignKeyCount': !exists(json, 'foreignKeyCount') ? undefined : json['foreignKeyCount'],
    };
}

export function TableDtoToJSON(value?: TableDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'category': value.category,
        'component': value.component,
        'columns': value.columns === undefined ? undefined : (value.columns === null ? null : (value.columns as Array<any>).map(ColumnMetadataToJSON)),
        'primaryKey': ModelIndexToJSON(value.primaryKey),
        'indexCount': value.indexCount,
        'foreignKeyCount': value.foreignKeyCount,
    };
}
