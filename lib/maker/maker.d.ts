import SpecificRules, { SettingOption, RuleFunction, rulesName } from './specificRules';
export { SettingOption, RuleFunction as MethodFuction };
export default class Maker extends SpecificRules {
    private __OptPropKey;
    private __parseTypes;
    constructor(option?: SettingOption);
    get(methodName: rulesName, ...args: any[]): string | number | boolean;
    private bulk;
    private nested;
    private convertOption;
    private findBlock;
    private parseTPL;
    make(content: string | object, parseValueType?: string | boolean, optionKey?: string): object;
}
