import { AngularPrimengPage } from './app.po';

describe('angular-primeng App', () => {
  let page: AngularPrimengPage;

  beforeEach(() => {
    page = new AngularPrimengPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
