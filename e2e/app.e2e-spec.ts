import { AfSubscribePage } from './app.po';

describe('af-subscribe App', function() {
  let page: AfSubscribePage;

  beforeEach(() => {
    page = new AfSubscribePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
