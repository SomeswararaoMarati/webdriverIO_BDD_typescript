export abstract class BasePage {
    async open(path: string) {
        await browser.url(path);
    }

    async getTitle(): Promise<string> {
        return browser.getTitle();
    }

    async getCurrentUrl(): Promise<string> {
        return browser.getUrl();
    }

    async waitForPageLoad(timeoutMs: number = 30000) {
        await browser.waitUntil(
            () => document.readyState === 'complete',
            { timeout: timeoutMs, timeoutMsg: 'Page load timed out' }
        );
    }

    async waitForElementVisible(selector: string, timeoutMs: number = 30000) {
        await $(selector).waitForDisplayed({ timeout: timeoutMs });
    }

    async getElementText(locator: string): Promise<string> {
        await this.waitForElementVisible(locator); 
        return $(locator).getText();
      }

    async waitForElementClickable(selector: string, timeoutMs: number = 30000) {
        await $(selector).waitForClickable({ timeout: timeoutMs });
    }

    async typeText(selector: string, value: string) {
        await this.waitForElementVisible(selector)
        await $(selector).setValue(value);
    }

    async clickElement(selector: string) {
        await this.waitForElementClickable(selector)
        await $(selector).click()
    }

    async isDisplayed(locator: string): Promise<boolean> {
        return await $(locator).isDisplayed();
    }

}