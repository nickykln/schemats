import { camelCase, upperFirst } from 'lodash'

const DEFAULT_OPTIONS: OptionValues = {
    writeHeader: true,
    camelCase: false
}

export type OptionValues = {
    camelCase?: boolean;
    writeHeader?: boolean; // write schemats description header
    generateClasses?: boolean; // Generate classes instead of interfaces
}

export default class Options {
    public options: OptionValues

    constructor (options: OptionValues = {}) {
        this.options = { ...DEFAULT_OPTIONS, ...options }
    }

    transformTypeName (typename: string) {
        return this.options.camelCase ? upperFirst(camelCase(typename)) : typename
    }

    transformColumnName (columnName: string) {
        return this.options.camelCase ? camelCase(columnName) : columnName
    }
}
