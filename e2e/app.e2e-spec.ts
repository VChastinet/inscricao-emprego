import { InscricaoEmpregoPage } from './app.po';

describe('inscricao-emprego App', () => {
  let page: InscricaoEmpregoPage;

  beforeEach(() => {
    page = new InscricaoEmpregoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
