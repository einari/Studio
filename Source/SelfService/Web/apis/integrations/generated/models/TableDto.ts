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
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof TableDto
     */
    component: string;
    /**
     * 
     * @type {Array<ColumnMetadata>}
     * @memberof TableDto
     */
    columns: Array<ColumnMetadata>;
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
    indexCount: number;
    /**
     * 
     * @type {number}
     * @memberof TableDto
     */
    foreignKeyCount: number;
}

/**
 * Check if a given object implements the TableDto interface.
 */
export function instanceOfTableDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "component" in value;
    isInstance = isInstance && "columns" in value;
    isInstance = isInstance && "indexCount" in value;
    isInstance = isInstance && "foreignKeyCount" in value;

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
        
        'name': json['name'],
        'description': json['description'],
        'category': json['category'],
        'component': json['component'],
        'columns': ((json['columns'] as Array<any>).map(ColumnMetadataFromJSON)),
        'primaryKey': !exists(json, 'primaryKey') ? undefined : ModelIndexFromJSON(json['primaryKey']),
        'indexCount': json['indexCount'],
        'foreignKeyCount': json['foreignKeyCount'],
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
        'columns': ((value.columns as Array<any>).map(ColumnMetadataToJSON)),
        'primaryKey': ModelIndexToJSON(value.primaryKey),
        'indexCount': value.indexCount,
        'foreignKeyCount': value.foreignKeyCount,
    };
}

