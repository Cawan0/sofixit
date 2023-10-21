const check = require('./app')

const TestCase0 = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]
const TestCase1 = [6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0]
const TestCase2 = [6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 4, 0]
const TestCase3 = [8, 3, 2, 1, 4, 2, 6, 1, 2]
const TestCase4 = [2, 5, 4, 9, 7, 7, 8, 4, 5, 0, 5, 7, 6, 3, 2, 7, 0, 9, 5, 5, 7, 5, 5, 5, 1, 4, 0, 5, 1, 9, 7, 8]
const TestCase5 = [2, 10, 10, 6, 6, 1, 7, 1, 8, 5, 0, 8, 0, 7, 2, 6, 4, 2, 4, 7, 0, 3, 0, 9, 8, 1, 0, 3, 7, 6, 6, 4, 7, 3, 7, 5, 7, 1, 0, 3, 4, 3, 1, 5, 3, 3, 7, 9, 3, 2, 5, 9, 6, 7, 6, 3, 1, 0, 6, 0, 2, 4, 1, 8, 3, 1, 9, 7, 2, 2, 9, 0, 3, 9, 9, 0, 9, 0, 3, 9, 10, 6, 4, 3, 0, 5, 10, 1, 8, 9, 5, 5, 5, 7, 10, 5, 8, 4, 5, 10]
const TestCase6 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const TestCase7 = [2, 7, 8, 2, 6, 2, 6, 1, 2, 9, 4, 3, 4, 0, 8, 3, 7, 6, 7, 6, 0, 5, 5, 4, 7, 4]
const TestCase8 = [[2, 7, 8, 2, 6, 2, 6],[6, 1, 2, 9, 4, 3, 4, 0, 8, 3, 7, 6],[6, 7, 6, 0, 5, 5, 4, 7, 4]]
const TestCase9 = [[6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3],[6, 2, 1, 1, 8, 0, 5, 5, 0, 1, 8, 9, 6, 9, 4, 8, 0, 0]]


console.log("Test 1: "+check(TestCase0))
console.log("Test 2: "+check(TestCase1))
console.log("Test 3: "+check(TestCase2))
console.log("Test 4: "+check(TestCase3))
console.log("Test 5: "+check(TestCase4))
console.log("Test 6: "+check(TestCase5))
console.log("Test 7: "+check(TestCase6))
console.log("Test 8: "+check(TestCase7))
console.log("Test 9: "+check(TestCase8))
console.log("Test 10: "+check(TestCase9))