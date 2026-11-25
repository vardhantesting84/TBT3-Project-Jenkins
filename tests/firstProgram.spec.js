import {expect, test} from '@playwright/test'

test("Verify Title", async ({page})=>{
    // 1. Navigate to URL
    await page.goto("https://practice.bpbonline.com/")
    
    // 2. Verify the title of the application
    await expect(page).toHaveTitle("BPB Online")

    await page.waitForTimeout(3000)
})
