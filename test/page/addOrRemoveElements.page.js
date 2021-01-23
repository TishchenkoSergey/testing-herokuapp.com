class AddOrRemoveElementsPage {
  get addElement() {
    return $('//*[@onclick="addElement()"]');
  }

  get secondElement() {
    return $('//*[@class="added-manually"][2]');
  }

  countOfElements() {
    return $$('//*[@class="added-manually"]').length;
  }

  clickToSecondElement() {
    this.secondElement.click();
  }

  trippleClickAddElement() {
    for (let i = 0; i < 3; i++) {
      this.addElement.click();
    }
  }
}

module.exports = new AddOrRemoveElementsPage();
