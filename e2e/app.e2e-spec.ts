import { ChatReenbitPage } from './app.po';

describe('chat-reenbit App', function() {
  let page: ChatReenbitPage;

  beforeEach(() => {
    page = new ChatReenbitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
