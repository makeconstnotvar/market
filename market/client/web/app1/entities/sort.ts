export enum SortingMode {
    Asc = 1,
    Desc = -1
}

export class Sort{
    name: string;
    field: string;
    mode: number;
    active: boolean
}