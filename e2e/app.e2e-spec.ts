import { Ng2GoodsListPage } from './app.po';

describe('ng2-goods-list App', () => {
  let page: Ng2GoodsListPage;

  beforeEach(() => {
    page = new Ng2GoodsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
