import { browser, element, by } from 'protractor/globals';

export class Ng2ProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getHeading() {
    return element(by.tagName('h1')).getText();
  }
}
