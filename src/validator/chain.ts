import { rules, RulesMap, RuleFunction } from './rules';
import { RulesInterface } from 'src/maker/rules';

export { RuleFunction }

type ruleNames = keyof RulesMap;
type OptionType = {
    value?: any; // 设置检查的值内容
    label?: string | object; // 标记验证规则
    isdev?: boolean; // 调试输出模式
};

export interface CallbackFunction {
	(result: boolean): void;
}

export interface OnFaultsFunction {
	(faults: ruleNames[]): void;
}
export interface ChainInterface {
    $set?(arg: OptionType): this;
    on(str:keyof RulesMap|OnFaultsFunction, fnc?: CallbackFunction):this;
    readonly result: boolean;
    readonly string?: this;
    readonly number?: this;
    readonly boolean?: this;
    readonly object?: this;
    readonly array?: this;
    readonly null?: this;
    readonly required?: this;
    readonly english?: this;
    readonly nospace?: this;
    readonly nodbc?: this;
    readonly alphanum?: this;
    readonly qq?: this;
    readonly age?: this;
    readonly zipcode?: this;
    readonly ip?: this;
    readonly port?: this;
    readonly domain?: this;
    readonly maca?: this;
    readonly bizcode?: this;
    readonly invoice?: this;
    readonly bankcard?: this;
    readonly currency?: this;
    readonly float?: this;
    readonly int?: this;
    readonly decimal?: this;
    readonly chinese?: this;
    readonly mail?: this;
    readonly url?: this;
    readonly account?: this;
    readonly password?: this;
    readonly safe?: this;
    readonly hex?: this;
    readonly color?: this;
    readonly ascii?: this;
    readonly base64?: this;
    readonly md5?: this;
    readonly uuid?: this;
    readonly mobile?: this;
    readonly telphone?: this;
    readonly phone?: this;
    readonly percent?: this;
    readonly year?: this;
    readonly month?: this;
    readonly day?: this;
    readonly hour?: this;
    readonly minute?: this;
    readonly time?: this;
    readonly date?: this;
    readonly datetime?: this;
    readonly file?: this;
    readonly image?: this;
    readonly word?: this;
    readonly lon?: this;
    readonly lat?: this;
    readonly approval?: this;
    readonly citycode?: this;
    readonly address?: this;
    readonly upper?: this;
    readonly lower?: this;
    readonly even?: this;
    readonly odd?: this;
    readonly ipv6?: this;
    readonly bodycard?: this;
    readonly autocard?: this;
    readonly isbn?: this;
    readonly tag?: this;
    readonly jwt?: this;
    readonly objectid?: this;
    readonly empty?: this;
    not?(arg: any): this;
    eq?(arg: any): this;
    gt?(arg: string | number | Date): this;
    gte?(arg: string | number | Date): this;
    lt?(arg: string | number | Date): this;
    lte?(arg: string | number | Date): this;
    between?<T extends string | number | Date>(arg1: T, arg2: T): this;
    min?<T extends string | number | Date>(arg1: T, ...args: T[]): this;
    max?<T extends string | number | Date>(arg1: T, ...args: T[]): this;
    length?(arg: string | number): this;
    minlength?(arg: string | number): this;
    maxlength?(arg: string | number): this;
    bitmax?(arg: string | number): this;
    in?(arg: string | number | any[] | object): this;
    has?(arg: string | number | any[] | object): this;
    regexp?(arg: RegExp | string ): this;
    custom?(arg: string|RuleFunction, ...args:Array<any>): this;    
}

var props:PropertyDescriptorMap = {};

/**
 * @class 验证链
 */
export class Chain implements ChainInterface{
    /**
     * 缓存规则名称
     */
    private __rls:RulesInterface;
    private __lbs: any[] = [];
    private __val: any;
    private __cbs: { [key:string]: CallbackFunction; } = {};
    private __allcb: OnFaultsFunction;
    private __dev = false;
    
    constructor(override?:{ [key: string]:RuleFunction }) {
        this.__rls = (<any>Object).assign(Object.create(null), rules, override);
    }

    $set(opt: OptionType) {
        if (opt.value !== void 0) this.__val = opt.value;
        if (opt.label && this.__lbs.indexOf(opt.label) === -1) this.__lbs.push(opt.label);
        if (opt.isdev === true) this.__dev = opt.isdev;
        return this;
    }

    /**
     * 判断后的处理方法
     * @param key 
     * @param fnc 
     */
    on(key:keyof RulesMap | OnFaultsFunction, fnc?: CallbackFunction) {
        if (typeof key === 'string' && typeof fnc === 'function') {
            this.__cbs[key] = fnc;

        } else if (typeof key === 'function') {
            this.__allcb = key;
        }
        return this;
    }

    /**
     * 单项单规则验证
     * @param {*} value 检测的值，必含
     * @param {string} [ruleStr] 规则属性，默认为判断是否为空，可选
     * @param {...*} args 对比值、参考值等自定义验证方法扩展参数，可选
     * @returns {boolean} 是否验证通过
     * @example
     * check('password1','==','password2')
     */
    private checkFunc(value: any, ruleName: ruleNames = 'required', ...args: any[]): boolean {
        let passed = false, r = this.__rls[ruleName],
            v = typeof value === 'string' ? value.trim() : value;

        if (r) {
            if (r instanceof RegExp) passed = (<RegExp>r).test(v);
            else if (typeof r === 'function')  passed = (<RuleFunction>r)(v, ...args);
        } else throw new TypeError(`没有找到“${ruleName}”相关验证规则！`);

        return passed;
    }

    /**
     * 验证结果
     */
    get result():boolean { // 取最终验证结果
        let passed = false, val = this.__val,
            hasVal = !val || (typeof val === 'string' && val.trim() === '');

        if (hasVal && this.__lbs.indexOf('required') === -1) return true; // 非必需，无值终止判断
        if (val !== void 0) {
            let checkeds: boolean[] = [], faults: ruleNames[] = [], rs:boolean;

            this.__lbs.forEach(t => { // 遍历要判断的项
                if (t instanceof Object) {
                    let key:ruleNames = <ruleNames>Object.keys(t)[0], args:any[] = t[key];

                    rs = this.checkFunc(val, key, ...args);
                    if (rs === false) {
                        faults.push(key);
                        if (this.__dev) console.warn(`${val.toString()}未通过${key}单项验证！`);
                    }
                    if (this.__cbs[key]) this.__cbs[key](rs);
                } else {
                    rs = this.checkFunc(val, t);
                    if (rs === false) {
                        faults.push(t);
                        if (this.__dev) console.warn(`${val.toString()}未通过${t}单项验证！`);
                    }
                    if (this.__cbs[t]) this.__cbs[t](rs);
                }
                checkeds.push(rs);
            });

            if (this.__allcb) {
                this.__allcb(faults);
                if (this.__dev) console.warn(`${val.toString()}未通过${faults.join(',')}组合验证！`);
            }
            if (checkeds.length > 0) passed = checkeds.indexOf(false) === -1;
        } else {
            throw new TypeError(`没有设定要检查的内容！`);
        }
        return passed;
    }
}

Object.keys(rules).forEach(key => {
    let rule = rules[key];

    if (rule instanceof RegExp || (typeof rule === 'function' && rule.length === 1)) {
        props[key] = {
            get: function(){
                (<ChainInterface>this).$set({label: key});
                return this;
            }
        }
    } else if (typeof rule === 'function') {        
        props[key] = {
            value: function(...args: any[]){
                let obj: any = {};
                
                obj[key] = args;
                (<ChainInterface>this).$set({label: obj});
                return this;
            }
        }
    }
});

Object.defineProperties(Chain.prototype, props);
