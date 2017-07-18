import { NgLanguageSelectorPage } from './app.po';

describe('ng-language-selector App', () => {
  let page: NgLanguageSelectorPage;

  beforeEach(() => {
    page = new NgLanguageSelectorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
