import {padStart} from 'lodash'

export function resolveToBinary(str: string) {
    return str.split('').map(c => padStart(c.charCodeAt(0).toString(16), 8, '0'))
}
