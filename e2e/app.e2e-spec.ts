import { CreatingNg2DynamicComponentPage } from './app.po';

describe('creating-ng2-dynamic-component App', function() {
  let page: CreatingNg2DynamicComponentPage;

  beforeEach(() => {
    page = new CreatingNg2DynamicComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
