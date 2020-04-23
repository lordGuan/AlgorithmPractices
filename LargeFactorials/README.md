# 阶乘

## 问题描述
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

简单来说就是计算阶乘，需要考虑的是大数问题

## 用例
factorial(15) // '1307674368000'

## 连接
https://www.codewars.com/kata/557f6437bf8dcdd135000010/train/javascript

## 思路
计算阶乘可以用循环或者递归实现，最关键是解决大数乘法。两个个位数乘积最大81

