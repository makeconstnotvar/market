import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Config} from "models/config";
import {ConfigService} from "services/config";


@Injectable()
class SettingsProvider {
    constructor(private http: Http,
                private configService: ConfigService) {
    }

    config(): Promise<Config> {
        return this.http.post('/api/settings/config', {})
            .map((r: Response) => {
                let config = r.json() as Config;
                this.configService.config = config;
                return config;
            }).toPromise();
    }

    meta(state): Observable<any> {
        return this.http.post('/api/settings/meta', {state})
            .map((r: Response) => {
                return r.json() as any
            });
    }
}

function SettingsFactory(settings: SettingsProvider) {
    return () => settings.config();
}

export {
    SettingsProvider,
    SettingsFactory
}