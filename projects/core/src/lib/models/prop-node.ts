export interface PropNode {
    key: string;
    previous?: string;
    proposed?: string;
    same?: boolean;
    isObject: boolean;
    values?: PropNode[];
}