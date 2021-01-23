const addOrRemoveElementsPage = require('../page/addOrRemoveElements.page');
const fileUploadPage = require('../page/fileUpload.page');
const framesPage = require('../page/frames.page');
const jsAlertPage = require('../page/jsAlerts.page');

class MainPage {
  get addOrRemoveElements() {
    return $('//*[@href="/add_remove_elements/"]');
  }

  get javaScriptAlerts() {
    return $('//*[@href="/javascript_alerts" ]');
  }

  get frames() {
    return $('//*[@href="/frames"]');
  }

  get fileUpload() {
    return $('//*[@href="/upload"]');
  }

  clickAddOrRemoveElements() {
    this.addOrRemoveElements.click();
    return addOrRemoveElementsPage;
  }

  clickJavaScriptAlerts() {
    this.javaScriptAlerts.click();
    return jsAlertPage;
  }

  clickFrames() {
    this.frames.click();
    return framesPage;
  }

  clickFileUpload() {
    this.fileUpload.click();
    return fileUploadPage;
  }
}

module.exports = new MainPage();
