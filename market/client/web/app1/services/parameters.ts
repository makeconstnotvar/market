import {Injectable} from "@angular/core";
import {Parameter} from "../entities/parameter";

@Injectable()
export class ParametersService {

    constructor() {
        if (!this.paramsFiltered)
            this.paramsFiltered = new Map();
    }

    private paramsFiltered: Map<string, object>;

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
            this.paramsFiltered.set(parameter._id, fake)
        }
        else {
            this.paramsFiltered.delete(parameter._id)
        }
        return this.paramsFiltered
    }

    private filterToUrlOnecheck(parameter: Parameter) {
        let valuesSelected = parameter.values[0].selected;
        let fake = {};
        fake[parameter.url] = valuesSelected ? parameter.values[0].url : 'net';
        this.paramsFiltered.set(parameter._id, fake)
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
            this.paramsFiltered.set(parameter._id, fake)
        }
        else {
            this.paramsFiltered.delete(parameter._id)
        }
    }

    private getUrlObject() {
        let values = this.paramsFiltered.values();
        let valuesArray = Array.from(values);
        return valuesArray.length ? Object.assign({}, ...valuesArray) : {};
    }

    private mergeParamsWithFilter(parameters: Parameter[]) {
        return parameters.map(parameter => {

        })

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

    private urlToFilterChecboxlist(parameter: Parameter, queryParams:any) {
        parameter.values.forEach(v => {
            //if (Array.isArray(queryParams))
            let t = Object.keys(queryParams).map(k => queryParams[k]);
                v.selected = t.includes(v.url);
            //else
            //    v.selected = v.url == Object.values(queryParams)[0]
        });

        return parameter;
    }

    private urlToFilterInput(parameter: Parameter, queryParams:any) {
        let fromRegexp = new RegExp(/from_(\d+)/),
            toRegexp = new RegExp(/to_(\d+)/),
            from = fromRegexp.exec(queryParams),
            to = toRegexp.exec(queryParams);
        if (from)
            parameter.from = from[1];
        if (to)
            parameter.to = to[1];
        return parameter;
    }
}