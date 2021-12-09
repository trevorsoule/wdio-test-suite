export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    if (!path) {
      browser.url('/');
    } else {
      browser.url(path);
    }
  }
};
