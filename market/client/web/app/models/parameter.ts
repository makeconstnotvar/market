export class Parameter {
    _id: string;
    name: string;
    behavior: string;
    details: string;
    field: string;
    from: string;
    to: string;
    unit: string;
    url: string;
    values: ParamValue[];
}
export class ParamValue {
    _id: string;
    value: string;
    url: string;
    selected: boolean;
    active: boolean;
    nomatter: boolean;


}

export class ParamFiltered {
    parameterUrl: string;
    valueUrls: string[];
}
