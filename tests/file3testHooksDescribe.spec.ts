import {test, expect} from '@playwright/test';

test.describe('User Tests', () => {   //Grouping the tests using describe block
    test('Test One', async({page}) =>{
        console.log("Test one is passed");
    });
    test('Test two', async({page}) =>{
        console.log("Test two is passed");
    });
})