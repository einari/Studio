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
import type { ImportState } from './ImportState';
import {
    ImportStateFromJSON,
    ImportStateFromJSONTyped,
    ImportStateToJSON,
} from './ImportState';
import type { TableKind } from './TableKind';
import {
    TableKindFromJSON,
    TableKindFromJSONTyped,
    TableKindToJSON,
} from './TableKind';

/**
 * 
 * @export
 * @interface ListTable
 */
export interface ListTable {
    /**
     * 
     * @type {string}
     * @memberof ListTable
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListTable
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListTable
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListTable
     */
    component?: string | null;
    /**
     * 
     * @type {TableKind}
     * @memberof ListTable
     */
    kind?: TableKind;
    /**
     * 
     * @type {ImportState}
     * @memberof ListTable
     */
    loaded?: ImportState;
    /**
     * 
     * @type {number}
     * @memberof ListTable
     */
    importance?: number;
}

/**
 * Check if a given object implements the ListTable interface.
 */
export function instanceOfListTable(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListTableFromJSON(json: any): ListTable {
    return ListTableFromJSONTyped(json, false);
}

export function ListTableFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'component': !exists(json, 'component') ? undefined : json['component'],
        'kind': !exists(json, 'kind') ? undefined : TableKindFromJSON(json['kind']),
        'loaded': !exists(json, 'loaded') ? undefined : ImportStateFromJSON(json['loaded']),
        'importance': !exists(json, 'importance') ? undefined : json['importance'],
    };
}

export function ListTableToJSON(value?: ListTable | null): any {
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
        'kind': TableKindToJSON(value.kind),
        'loaded': ImportStateToJSON(value.loaded),
        'importance': value.importance,
    };
}

