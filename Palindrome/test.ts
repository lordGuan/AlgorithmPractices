import {palindrome, palindrome_2, palindrome_3, lps, lps_2} from './index'

test('palindrome', () => {
    expect(palindrome('abc')).toBe(false)
    expect(palindrome('aba')).toBe(true)
    expect(palindrome('a')).toBe(true)
    expect(palindrome('ji7887ij')).toBe(true)
    expect(palindrome('ji78187ij')).toBe(true)
})

test('palindrome_2', () => {
    expect(palindrome_2('abc')).toBe(false)
    expect(palindrome_2('aba')).toBe(true)
    expect(palindrome_2('a')).toBe(true)
    expect(palindrome_2('ji7887ij')).toBe(true)
    expect(palindrome_2('ji78187ij')).toBe(true)
})

test('palindrome_3', () => {
    expect(palindrome_3('abc')).toBe(false)
    expect(palindrome_3('aba')).toBe(true)
    expect(palindrome_3('a')).toBe(true)
    expect(palindrome_3('ji7887ij')).toBe(true)
    expect(palindrome_3('ji78187ij')).toBe(true)
})

test('lps', () => {
    expect(lps('cabbaef')).toBe(4)
    expect(lps('aba')).toBe(3)
    expect(lps('ji7887ij')).toBe(8)
})

test('lps_2', () => {
    expect(lps_2('cabcbaefe')).toBe(5)
    expect(lps_2('aba')).toBe(3)
    expect(lps_2('ji7887ij')).toBe(8)
})

