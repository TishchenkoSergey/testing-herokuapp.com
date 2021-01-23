class FileUploadPage {
  get fileUploadButton() {
    return $('//*[@id="file-upload"]');
  }

  get uploadButton() {
    return $('//*[@id="file-submit"]');
  }

  get checkMessage() {
    return $('//*[@class="example"]/h3');
  }

  fileUpload(path) {
    this.fileUploadButton.setValue(path);
  }

  clickUploadButton() {
    this.uploadButton.click();
  }

  checkToUploaded() {
    return this.checkMessage.getText();
  }
}

module.exports = new FileUploadPage();
