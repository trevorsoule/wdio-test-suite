/**
 * PageLoad
 *
 * Methods that check the readyState of the page, to ensure that test steps are only performed after JS has finished
 * processing
 */
export default class PageLoad {
    constructor() {}

    async checkIfPageLoaded() {
        return await browser.executeScript('return window.document.readyState;', []) === 'complete';
    }

    async waitForPageReady() {
        await browser.waitUntil( async () => {
            return await this.checkIfPageLoaded() == true;
        }, 20000, 'Page has not completed loading', 3000);
    }
}