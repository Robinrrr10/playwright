import {test, expect} from '@playwright/test';

test.describe('User Tests', () => {   //Grouping the tests using describe block
console.log("Inside describe block");
test.beforeAll(async() => {
    console.log("Before all executed");
});
test.beforeEach(async() => {
    console.log("Before each executed");   
});
test('test One', async({page}) =>{
    console.log("Test one is passed");
});
test('test Two', async({page}) =>{
    console.log("Test two is passed");
});
test.afterEach(async() => {
    console.log("After each executed");
});
test.afterAll(async() => {
    console.log("After all executed");
});
});