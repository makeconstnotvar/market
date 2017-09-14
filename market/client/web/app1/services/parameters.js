var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
let ParametersService = class ParametersService {
    constructor() {
        if (!this.filterData)
            this.filterData = new Map();
    }
    getFilterData() {
        return this.getUrlObject();
    }
    clearFilterData() {
        this.filterData = new Map();
    }
    filterToUrl(parameter) {
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
                throw Error('Неизвестный тип параметра фильтра');
        }
        return this.getUrlObject();
    }
    filterToUrlChecboxlist(parameter) {
        let valuesSelected = parameter.values.filter(v => v.selected);
        if (valuesSelected.length) {
            let valuesFiltered = valuesSelected.map(v => v.url);
            let fake = {};
            fake[parameter.url] = valuesFiltered;
            this.filterData.set(parameter._id, fake);
        }
        else {
            this.filterData.delete(parameter._id);
        }
        return this.filterData;
    }
    filterToUrlOnecheck(parameter) {
        let valuesSelected = parameter.values[0].selected;
        let fake = {};
        fake[parameter.url] = valuesSelected ? parameter.values[0].url : 'net';
        this.filterData.set(parameter._id, fake);
    }
    filterToUrlInput(parameter) {
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
            this.filterData.set(parameter._id, fake);
        }
        else {
            this.filterData.delete(parameter._id);
        }
    }
    getUrlObject() {
        let values = this.filterData.values();
        let valuesArray = Array.from(values);
        return valuesArray.length ? Object.assign({}, ...valuesArray) : {};
    }
    urlToParameter(parameter, queryParams) {
        switch (parameter.behavior) {
            case 'checklist':
            case 'radiolist':
            case 'onecheck':
                return this.urlToFilterChecboxlist(parameter, queryParams);
            case 'input':
                return this.urlToFilterInput(parameter, queryParams);
            default:
                throw Error('Неизвестный тип параметра фильтра');
        }
    }
    urlToFilterChecboxlist(parameter, queryParams) {
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
    urlToFilterInput(parameter, queryParams) {
        for (let prop in queryParams) {
            if (parameter.url == prop) {
                let fromRegexp = new RegExp(/from_(\d+)/), toRegexp = new RegExp(/to_(\d+)/), from = fromRegexp.exec(queryParams[prop]), to = toRegexp.exec(queryParams[prop]);
                if (from)
                    parameter.from = from[1];
                if (to)
                    parameter.to = to[1];
                this.filterToUrl(parameter);
            }
        }
        return parameter;
    }
};
ParametersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ParametersService);
export { ParametersService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcmFtZXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxJQUFhLGlCQUFpQixHQUE5QjtJQUVJO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBS00sYUFBYTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sV0FBVyxDQUFDLFNBQW9CO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQztZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztZQUVWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUVWO2dCQUNJLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7UUFDeEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFNBQW9CO1FBQy9DLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMs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QyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQ3JDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFDakMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3pDLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0wsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDSCxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUdKLENBQUE7QUFwSVksaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTs7R0FDQSxpQkFBaUIsQ0FvSTdCO1NBcElZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJ9IGZyb20gXCIuLi9tb2RlbHMvcGFyYW1ldGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlckRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckRhdGE6IE1hcDxzdHJpbmcsIG9iamVjdD47XHJcbiAgICBwcml2YXRlIHBhcmFtZXRlcnM6IFBhcmFtZXRlcltdO1xyXG5cclxuICAgIHB1YmxpYyBnZXRGaWx0ZXJEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVybE9iamVjdCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyRmlsdGVyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckRhdGEgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbHRlclRvVXJsKHBhcmFtZXRlcjogUGFyYW1ldGVyKSB7XHJcbiAgICAgICAgc3dpdGNoIChwYXJhbWV0ZXIuYmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcclxuICAgICAgICAgICAgY2FzZSAncmFkaW9saXN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVG9VcmxDaGVjYm94bGlzdChwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ29uZWNoZWNrJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVG9VcmxPbmVjaGVjayhwYXJhbWV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdpbnB1dCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclRvVXJsSW5wdXQocGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCfQndC10LjQt9Cy0LXRgdGC0L3Ri9C5INGC0LjQvyDQv9Cw0YDQsNC80LXRgtGA0LAg0YTQuNC70YzRgtGA0LAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcmxPYmplY3QoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyVG9VcmxDaGVjYm94bGlzdChwYXJhbWV0ZXI6IFBhcmFtZXRlcikge1xyXG4gICAgICAgIGxldCB2YWx1ZXNTZWxlY3RlZCA9IHBhcmFtZXRlci52YWx1ZXMuZmlsdGVyKHYgPT4gdi5zZWxlY3RlZCk7XHJcbiAgICAgICAgaWYgKHZhbHVlc1NlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzRmlsdGVyZWQ6IHN0cmluZ1tdID0gdmFsdWVzU2VsZWN0ZWQubWFwKHYgPT4gdi51cmwpO1xyXG4gICAgICAgICAgICBsZXQgZmFrZSA9IHt9O1xyXG4gICAgICAgICAgICBmYWtlW3BhcmFtZXRlci51cmxdID0gdmFsdWVzRmlsdGVyZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YS5zZXQocGFyYW1ldGVyLl9pZCwgZmFrZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YS5kZWxldGUocGFyYW1ldGVyLl9pZClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyVG9VcmxPbmVjaGVjayhwYXJhbWV0ZXI6IFBhcmFtZXRlcikge1xyXG4gICAgICAgIGxldCB2YWx1ZXNTZWxlY3RlZCA9IHBhcmFtZXRlci52YWx1ZXNbMF0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgbGV0IGZha2UgPSB7fTtcclxuICAgICAgICBmYWtlW3BhcmFtZXRlci51cmxdID0gdmFsdWVzU2VsZWN0ZWQgPyBwYXJhbWV0ZXIudmFsdWVzWzBdLnVybCA6ICduZXQnO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRGF0YS5zZXQocGFyYW1ldGVyLl9pZCwgZmFrZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlclRvVXJsSW5wdXQocGFyYW1ldGVyOiBQYXJhbWV0ZXIpIHtcclxuICAgICAgICBsZXQgdmFsdWVzU2VsZWN0ZWQgPSAhIXBhcmFtZXRlci5mcm9tIHx8ICEhcGFyYW1ldGVyLnRvO1xyXG4gICAgICAgIGlmICh2YWx1ZXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBsZXQgZmFrZSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5mcm9tKVxyXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZXMucHVzaChgZnJvbV8ke3BhcmFtZXRlci5mcm9tfWApO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyLnRvKVxyXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZXMucHVzaChgdG9fJHtwYXJhbWV0ZXIudG99YCk7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBmYWtlW3BhcmFtZXRlci51cmxdID0gcXVlcnlWYWx1ZXM7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YS5zZXQocGFyYW1ldGVyLl9pZCwgZmFrZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0YS5kZWxldGUocGFyYW1ldGVyLl9pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVcmxPYmplY3QoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZmlsdGVyRGF0YS52YWx1ZXMoKTtcclxuICAgICAgICBsZXQgdmFsdWVzQXJyYXkgPSBBcnJheS5mcm9tKHZhbHVlcyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlc0FycmF5Lmxlbmd0aCA/IE9iamVjdC5hc3NpZ24oe30sIC4uLnZhbHVlc0FycmF5KSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cmxUb1BhcmFtZXRlcihwYXJhbWV0ZXI6IFBhcmFtZXRlciwgcXVlcnlQYXJhbXMpIHtcclxuICAgICAgICBzd2l0Y2ggKHBhcmFtZXRlci5iZWhhdmlvcikge1xyXG4gICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxyXG4gICAgICAgICAgICBjYXNlICdyYWRpb2xpc3QnOlxyXG4gICAgICAgICAgICBjYXNlICdvbmVjaGVjayc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cmxUb0ZpbHRlckNoZWNib3hsaXN0KHBhcmFtZXRlciwgcXVlcnlQYXJhbXMpO1xyXG4gICAgICAgICAgICBjYXNlICdpbnB1dCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cmxUb0ZpbHRlcklucHV0KHBhcmFtZXRlciwgcXVlcnlQYXJhbXMpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ9Cd0LXQuNC30LLQtdGB0YLQvdGL0Lkg0YLQuNC/INC/0LDRgNCw0LzQtdGC0YDQsCDRhNC40LvRjNGC0YDQsCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXJsVG9GaWx0ZXJDaGVjYm94bGlzdChwYXJhbWV0ZXI6IFBhcmFtZXRlciwgcXVlcnlQYXJhbXM6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcXVlcnlQYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci51cmwgPT0gcHJvcCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci52YWx1ZXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVBhcmFtc1twcm9wXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuc2VsZWN0ZWQgPSBxdWVyeVBhcmFtc1twcm9wXS5pbmNsdWRlcyh2LnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnNlbGVjdGVkID0gcXVlcnlQYXJhbXNbcHJvcF0gPT0gdi51cmw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVG9VcmwocGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXJsVG9GaWx0ZXJJbnB1dChwYXJhbWV0ZXI6IFBhcmFtZXRlciwgcXVlcnlQYXJhbXM6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcXVlcnlQYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci51cmwgPT0gcHJvcCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmcm9tUmVnZXhwID0gbmV3IFJlZ0V4cCgvZnJvbV8oXFxkKykvKSxcclxuICAgICAgICAgICAgICAgICAgICB0b1JlZ2V4cCA9IG5ldyBSZWdFeHAoL3RvXyhcXGQrKS8pLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSBmcm9tUmVnZXhwLmV4ZWMocXVlcnlQYXJhbXNbcHJvcF0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvID0gdG9SZWdleHAuZXhlYyhxdWVyeVBhcmFtc1twcm9wXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJvbSlcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIuZnJvbSA9IGZyb21bMV07XHJcbiAgICAgICAgICAgICAgICBpZiAodG8pXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLnRvID0gdG9bMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclRvVXJsKHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==