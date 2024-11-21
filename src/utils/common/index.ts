import { IFunc1 } from "@/types/Function";
import * as _ from "lodash"

export interface IQueryObject {
    filter?: string;
    sort?: string;
    limit?: number;
    page?: number;
    search?: string;
}

export interface IQueryGetMaxPage {
    filter?: string;
    limit?: number;
    search?: string;
}

export const ObjectToQuery = (object: IQueryObject) => {
    let query: string = "";
    if (object.filter) {
        query += "filter=" + encodeURIComponent(object.filter) + "&";
    }
    if (object.sort) {
        query += "sort=" + encodeURIComponent(object.sort) + "&";
    }
    if (object.limit) {
        query += "limit=" + encodeURIComponent(object.limit.toString()) + "&";
    }
    if (object.page) {
        query += "page=" + encodeURIComponent(object.page.toString()) + "&";
    }
    if (object.search) {
        query += "search=" + encodeURIComponent(object.search) + "&";
    }
    if (query) {
        query = "?" + query;
    }
    return query;
};

export const ObjectToFilterQuery = (object: Object) => {
    let result = "";
    let currentKey = 0;

    for (const key in object) {
        currentKey++;
        if (currentKey === Object.keys(object).length) {
            if (object[key] instanceof Array) {
                if (object[key].length) {
                    for (const [index, value] of object[key].entries()) {
                        if (index === object[key].length - 1) {
                            result += key + " " + value;
                        } else {
                            result += key + " " + value + " ";
                        }
                    }
                }
            } else {
                result += key + " " + object[key];
            }
        } else {
            if (object[key] instanceof Array) {
                if (object[key].length) {
                    for (const value of object[key]) {
                        result += key + " " + value + " ";
                    }
                }
            } else {
                result += key + " " + object[key] + " ";
            }
        }
    }
    return result;
};

export const formatDate: IFunc1<Date, string> = (time) => {
    const year = time.getFullYear();
    const month = time.getMonth() < 10 ? `0${time.getMonth() + 1}` : `${time.getMonth() + 1}`;
    const date = time.getDate() < 10 ? `0${time.getDate()}` : `${time.getDate()}`;
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`;
    return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
};

export const returnTime = (dateString: string) => {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('/').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds);
};

export const delay = (time: number = 1000) => {
    return new Promise((resolve) =>  _.delay(resolve, time))
}
