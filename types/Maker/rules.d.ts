export interface RuleFunction {
    (...values: any[]): boolean | string | number;
}
export interface RulesInterface {
    [key: string]: RegExp | RuleFunction;
    md5(arg?: string, arg2?: boolean): string;
    uuid(arg?: string): string;
    now(arg?: string): string;
    exp(arg?: string | RegExp): string;
    enum<T extends boolean | string | number>(...args: T[]): T;
    int(arg1?: number, arg2?: number): number;
    number(arg1?: number, arg2?: number, arg3?: number): number;
    bool(): boolean;
    month(): number;
    day(): number;
    minute(): number;
    validcode(arg?: number): string;
    mid: RegExp;
    account: RegExp;
    password: RegExp;
    color: RegExp;
    url: RegExp;
    mail: RegExp;
    mobile: RegExp;
    port: RegExp;
    bizcode: RegExp;
    bankcard: RegExp;
    qq: RegExp;
    english(arg: string, num?: number): string;
    chinese(arg: string, num?: number): string;
    ip(local?: boolean): string;
    text(arg?: string, n1?: number, n2?: number): string;
    price(arg1?: number, arg2?: number, arg3?: boolean): string;
    enName(): string;
    enMaleName(): string;
    enFemaleName(): string;
    surname(): string;
    cnName(): string;
    cnMaleName(): string;
    cnFemaleName(): string;
    enState(): string;
    cnState(): string;
    company(): string;
    address(): string;
}
export declare const rules: RulesInterface;
