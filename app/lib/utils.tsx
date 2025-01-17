export const isNull = (value: any | null): value is null => {
    return value === null;
}

export const isNotNull = (value: any | null): value is any => {
    return value !== null
}

export const isBiggerThanZero = (value: number): value is number => {
    return value > 0
}

export const stringIsEmpty = (value: string): boolean => {
    return value.trim().length === 0
}

export const objectIsEmpty = (value: object): boolean => {
    return value && Object.keys(value).length === 0
}
export const objectIsNotEmpty = (value: object): boolean => {
    return value && Object.keys(value).length > 0
}

export const emptyListOf = (value: Array<string>): boolean => {
    return value && value.length === 0;
}
export const listIsNotEmpty = (value: Array<string>): boolean => {
    return value && value.length >= 1;
}