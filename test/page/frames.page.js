const iFramePage = require('../page/iFrame.page');

class FramesPage {
  get iframe() {
    return $('//*[@href="/iframe"]');
  }

  clickIframe() {
    this.iframe.click();
    return iFramePage
  }
}

module.exports = new FramesPage();
