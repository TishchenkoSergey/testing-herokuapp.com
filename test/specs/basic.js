const mainPage = require('../page/main.page');
let assert = require('chai').assert;

const arrayTitles = require('../api/api');

const homePage = 'http://the-internet.herokuapp.com/';

describe('test task', () => {
  beforeEach(
    function() { 
      browser.reloadSession();
    }
  );

  it('TEST 1', () => {
    console.log('Step 1: going to main page');
    browser.url(homePage);

    console.log('Step 2: going to testing page');
    const addOrRemoveElementsPage = mainPage.clickAddOrRemoveElements();

    console.log('Step 3: adding three elements');
    addOrRemoveElementsPage.trippleClickAddElement();

    console.log('Step 4: checking for added elements');
    assert.equal(addOrRemoveElementsPage.countOfElements(), 3, 'page has 3 buttons "Delete"')
    
    console.log('Step 5: remove some element');
    addOrRemoveElementsPage.clickToSecondElement();

    console.log('Step 6: checking for removed element');
    assert.equal(addOrRemoveElementsPage.countOfElements(), 2, 'page has 2 buttons "Delete"')
  });

  it('TEST 2', () => {
    console.log('Step 1: going to main page');
    browser.url(homePage);
    
    console.log('Step 2: going to testing page');
    const jsAlertPage = mainPage.clickJavaScriptAlerts();

    console.log('Step 3: click on "Click for JS Alert" button and click "OK" on Alert');
    jsAlertPage.clickToAlertButton();
    browser.acceptAlert();

    console.log('Step 4: checking for a corresponding message');
    assert.equal(jsAlertPage.getResultMessage(), 'You successfuly clicked an alert', 'message equal "You successfuly clicked an alert"');

    console.log('Step 5: click on "Click for JS Confirm" button and click "Cancel" on Alert');
    jsAlertPage.clickToConfirmButton();
    browser.dismissAlert();
    
    console.log('Step 6: checking for a corresponding message');
    assert.equal(jsAlertPage.getResultMessage(), 'You clicked: Cancel', 'message equal "You clicked: Cancel"');

    console.log('Step 7: click on "Click for JS Prompt" button, some text input and click "OK" on Alert');
    jsAlertPage.clickToPromptButton();
    browser.sendAlertText('asd');
    browser.acceptAlert();

    console.log('Step 8: checking for a corresponding message');
    assert.equal(jsAlertPage.getResultMessage(), 'You entered: asd', 'message equal "You entered: asd"');
  });
  
  it('TEST 3', () => {
    console.log('Step 1: going to main page')
    browser.url(homePage);
    
    console.log('Step 2: going to testing page')
    const framesPage = mainPage.clickFrames();
    const iFramePage = framesPage.clickIframe();

    console.log('Step 3: executing a get request and saving all titles');
    let titlesList = arrayTitles;

    console.log('Step 4: entering all titles in the text field')
    browser.switchToFrame(iFramePage.frame);
    iFramePage.setTitlesToIFrame(titlesList);
  });
  
  it('TEST 4', () => {
    console.log('Step 1: going to main page');
    browser.url(homePage);

    console.log('Step 2: going to testing page');
    const fileUploadPage = mainPage.clickFileUpload();

    console.log('Step 3: choosing a file to download');
    fileUploadPage.fileUpload('C:\\map.jpg');

    console.log('Step 4: click on "Upload" button');
    fileUploadPage.clickUploadButton();

    console.log('Step 5: checking for a corresponding message');
    assert.equal(fileUploadPage.checkToUploaded(), 'File Uploaded!', 'message equal "File Uploaded!"');
  });
})
