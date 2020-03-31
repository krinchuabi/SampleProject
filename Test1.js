import { Selector } from 'testcafe';
import { AssertionError } from 'assert';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('Heading title check', async t => {
    const title = Selector('.maincontent > h1');
    await t
    .expect(title.textContent).contains('Example')
    
});