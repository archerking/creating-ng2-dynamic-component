import { browser, element, by } from 'protractor';

export class CreatingNg2DynamicComponentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
