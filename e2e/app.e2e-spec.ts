import { ShopCMSPage } from './app.po';

describe('shop-cms App', function() {
  let page: ShopCMSPage;

  beforeEach(() => {
    page = new ShopCMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
