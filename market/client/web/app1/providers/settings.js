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
import { Http } from "@angular/http";
import { ConfigService } from "services/config";
let SettingsProvider = class SettingsProvider {
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    config() {
        return this.http.post('/api/settings/config', {})
            .map((r) => {
            let config = r.json();
            this.configService.config = config;
            return config;
        }).toPromise();
    }
    meta(item) {
        return this.http.post('/api/settings/meta', { state: item.state, url: item.url })
            .map((r) => {
            return r.json();
        });
    }
};
SettingsProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        ConfigService])
], SettingsProvider);
export { SettingsProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxJQUFJLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFFN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBSTlDLElBQWEsZ0JBQWdCLEdBQTdCO0lBQ0ksWUFBb0IsSUFBVSxFQUNWLGFBQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUM7YUFDNUMsR0FBRyxDQUFDLENBQUMsQ0FBVztZQUNiLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQVksQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUk7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDO2FBQzFFLEdBQUcsQ0FBQyxDQUFDLENBQVc7WUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBUyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNKLENBQUE7QUFwQlksZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtxQ0FFaUIsSUFBSTtRQUNLLGFBQWE7R0FGdkMsZ0JBQWdCLENBb0I1QjtTQXBCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCJlbnRpdGllcy9jb25maWdcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwic2VydmljZXMvY29uZmlnXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcoKTogUHJvbWlzZTxDb25maWc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvc2V0dGluZ3MvY29uZmlnJywge30pXHJcbiAgICAgICAgICAgIC5tYXAoKHI6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0gci5qc29uKCkgYXMgQ29uZmlnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICAgIH0pLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGEoaXRlbSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3NldHRpbmdzL21ldGEnLCB7c3RhdGU6IGl0ZW0uc3RhdGUsIHVybDogaXRlbS51cmx9KVxyXG4gICAgICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIuanNvbigpIGFzIGFueVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==