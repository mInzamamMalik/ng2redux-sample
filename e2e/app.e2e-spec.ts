import { Ng2reduxSamplePage } from './app.po';

describe('ng2redux-sample App', function() {
  let page: Ng2reduxSamplePage;

  beforeEach(() => {
    page = new Ng2reduxSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
