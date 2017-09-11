import {Injectable} from "@angular/core";
import {Parameter} from "../models/parameter";

@Injectable()
export class ParametersService {

    constructor() {
        if (!this.filterData)
            this.filterData = new Map();
    }

    private filterData: Map<string, object>;
    private parameters: Parameter[];

    public getFilterData() {
        return this.getUrlObject()
    }

    public clearFilterData() {
        this.filterData = new Map();
    }

    public filterToUrl(parameter: Parameter) {
        switch (parameter.behavior) {
            case 'checklist':
            case 'radiolist':
                this.filterToUrlChecboxlist(parameter);
                break;
            case 'onecheck':
                this.filterToUrlOnecheck(parameter);
                break;

            case 'input':
                this.filterToUrlInput(parameter);
                break;

            default:
                throw Error('Неизвестный тип параметра фильтра')
        }
        return this.getUrlObject()
    }

    private filterToUrlChecboxlist(parameter: Parameter) {
        let valuesSelected = parameter.values.filter(v => v.selected);
        if (valuesSelected.length) {
            let valuesFiltered: string[] = valuesSelected.map(v => v.url);
            let fake = {};
            fake[parameter.url] = valuesFiltered;
            this.filterData.set(parameter._id, fake)
        }
        else {
            this.filterData.delete(parameter._id)
        }
        return this.filterData
    }

    private filterToUrlOnecheck(parameter: Parameter) {
        let valuesSelected = parameter.values[0].selected;
        let fake = {};
        fake[parameter.url] = valuesSelected ? parameter.values[0].url : 'net';
        this.filterData.set(parameter._id, fake)
    }

    private filterToUrlInput(parameter: Parameter) {
        let valuesSelected = !!parameter.from || !!parameter.to;
        if (valuesSelected) {
            let fake = {};
            let queryValues = [];
            if (parameter.from)
                queryValues.push(`from_${parameter.from}`);
            if (parameter.to)
                queryValues.push(`to_${parameter.to}`);
            if (queryValues.length)
                fake[parameter.url] = queryValues;
            this.filterData.set(parameter._id, fake)
        }
        else {
            this.filterData.delete(parameter._id)
        }
    }

    private getUrlObject() {
        let values = this.filterData.values();
        let valuesArray = Array.from(values);
        return valuesArray.length ? Object.assign({}, ...valuesArray) : {};
    }

    public urlToParameter(parameter: Parameter, queryParams) {
        switch (parameter.behavior) {
            case 'checklist':
            case 'radiolist':
            case 'onecheck':
                return this.urlToFilterChecboxlist(parameter, queryParams);
            case 'input':
                return this.urlToFilterInput(parameter, queryParams);
            default:
                throw Error('Неизвестный тип параметра фильтра')
        }
    }

    private urlToFilterChecboxlist(parameter: Parameter, queryParams: any) {
        for (let prop in queryParams) {
            if (parameter.url == prop) {

                parameter.values.forEach(v => {
                    if (Array.isArray(queryParams[prop]))
                        v.selected = queryParams[prop].includes(v.url);
                    else
                        v.selected = queryParams[prop] == v.url;
                });
                this.filterToUrl(parameter);
            }
        }
        return parameter;
    }

    private urlToFilterInput(parameter: Parameter, queryParams: any) {
        for (let prop in queryParams) {
            if (parameter.url == prop) {

                let fromRegexp = new RegExp(/from_(\d+)/),
                    toRegexp = new RegExp(/to_(\d+)/),
                    from = fromRegexp.exec(queryParams[prop]),
                    to = toRegexp.exec(queryParams[prop]);
                if (from)
                    parameter.from = from[1];
                if (to)
                    parameter.to = to[1];
                this.filterToUrl(parameter);
            }
        }

        return parameter;
    }


}