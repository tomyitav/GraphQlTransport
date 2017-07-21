import { Ng2MaterialPage } from './app.po';

describe('ng2-material App', () => {
  let page: Ng2MaterialPage;

  beforeEach(() => {
    page = new Ng2MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
