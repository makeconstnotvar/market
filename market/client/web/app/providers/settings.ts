import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {Config} from "../models";
import {ConfigService} from "../services";


@Injectable()
class SettingsProvider {
    constructor(private http: HttpClient,
                private configService: ConfigService) {
    }

    config(): Promise<Config> {
        return this.http.post('/api/settings/config', {})
            .map((config:Config )=> {
                this.configService.config = config;
                return config;
            }).toPromise();
    }

    meta(state): Observable<any> {
        return this.http.post('/api/settings/meta', {state});
    }
}

function SettingsFactory(settings: SettingsProvider) {
    return () => settings.config();
}

export {
    SettingsProvider,
    SettingsFactory
}