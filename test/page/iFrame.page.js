class IFramePage {
  get frame() {
    return $('//*[@id="mce_0_ifr"]');
  }

  get iframeInput() {
    return $('//*[@class="mce-content-body " ]/p');
  }

  setTitlesToIFrame(titlesList) {
    this.iframeInput.setValue(titlesList.join('\n'));
  }
}

module.exports = new IFramePage();
