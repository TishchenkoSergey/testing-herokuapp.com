class JSAlertPage {
  get alertButton() {
    return $('//*[@onclick="jsAlert()"]');
  }

  get confirmButton() {
    return $('//*[@onclick="jsConfirm()"]');
  }

  get promptButton() {
    return $('//*[@onclick="jsPrompt()"]');
  }

  get resultMessage() {
    return $('//*[@id="result"]');
  }

  clickToAlertButton() {
    this.alertButton.click();
  }

  clickToConfirmButton() {
    this.confirmButton.click();
  }

  clickToPromptButton() {
    this.promptButton.click();
  }

  getResultMessage() {
    return this.resultMessage.getText();
  }
}

module.exports = new JSAlertPage();
