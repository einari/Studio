/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.351
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
} from './Link';
import type { MessageMappingModel } from './MessageMappingModel';
import {
    MessageMappingModelFromJSON,
    MessageMappingModelFromJSONTyped,
    MessageMappingModelToJSON,
} from './MessageMappingModel';

/**
 * A result with the value (if any) and links to other resources (if any)
 * @export
 * @interface MessageMappingModelIEnumerableResult
 */
export interface MessageMappingModelIEnumerableResult {
    /**
     * The value of the result - may be null if no value is present (yet)
     * @type {Array<MessageMappingModel>}
     * @memberof MessageMappingModelIEnumerableResult
     */
    value?: Array<MessageMappingModel> | null;
    /**
     * Links to other resources. There will usually be a self link, but there
     * may be other links as well with relations that indicate what the link is.
     * @type {Array<Link>}
     * @memberof MessageMappingModelIEnumerableResult
     */
    links: Array<Link>;
}

/**
 * Check if a given object implements the MessageMappingModelIEnumerableResult interface.
 */
export function instanceOfMessageMappingModelIEnumerableResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function MessageMappingModelIEnumerableResultFromJSON(json: any): MessageMappingModelIEnumerableResult {
    return MessageMappingModelIEnumerableResultFromJSONTyped(json, false);
}

export function MessageMappingModelIEnumerableResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageMappingModelIEnumerableResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (json['value'] === null ? null : (json['value'] as Array<any>).map(MessageMappingModelFromJSON)),
        'links': ((json['links'] as Array<any>).map(LinkFromJSON)),
    };
}

export function MessageMappingModelIEnumerableResultToJSON(value?: MessageMappingModelIEnumerableResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value === undefined ? undefined : (value.value === null ? null : (value.value as Array<any>).map(MessageMappingModelToJSON)),
        'links': ((value.links as Array<any>).map(LinkToJSON)),
    };
}

