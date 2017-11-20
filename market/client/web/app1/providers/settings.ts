import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Config} from "models/config";
import {ConfigService} from "services/config";
import {HttpClient} from "@angular/common/http";


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