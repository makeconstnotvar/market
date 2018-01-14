import {Injectable} from "@angular/core";
import {Config} from "models/config";

@Injectable()
export class ConfigService {

    private _config: Config;

    public set config(newConfig: Config) {
        this._config = newConfig;
    };

    public get config(): Config {
        return Object.assign({}, this._config)
    };

}