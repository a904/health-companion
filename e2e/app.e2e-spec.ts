import { FitappPage } from './app.po';

describe('fitapp App', () => {
  let page: FitappPage;

  beforeEach(() => {
    page = new FitappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
