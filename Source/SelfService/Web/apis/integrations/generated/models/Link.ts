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
 * A link to a resource in the API. The relation indicates what the link is in
 * the context of the resource it is part of.
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * The relation of the link. This is a string that indicates what the link is
     * in the context of the resource it is part of.
     * @type {string}
     * @memberof Link
     */
    rel: string;
    /**
     * The href of the link. This is the URI to the resource.
     * @type {string}
     * @memberof Link
     */
    href: string;
    /**
     * The title of the link. This is a human readable description of the link.
     * Used for display purposes, and to distinguish between links with the same
     * relation.
     * @type {string}
     * @memberof Link
     */
    title?: string | null;
}

/**
 * Check if a given object implements the Link interface.
 */
export function instanceOfLink(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rel" in value;
    isInstance = isInstance && "href" in value;

    return isInstance;
}

export function LinkFromJSON(json: any): Link {
    return LinkFromJSONTyped(json, false);
}

export function LinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Link {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rel': json['rel'],
        'href': json['href'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function LinkToJSON(value?: Link | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rel': value.rel,
        'href': value.href,
        'title': value.title,
    };
}

