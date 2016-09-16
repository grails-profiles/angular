import { browser, element, by } from 'protractor/globals';

export class Ng2ProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('title')).getText();
  }
}
