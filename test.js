import test from 'ava';
import execa from 'execa';

test('test string-length-cli', async t => {
	const {stdout} = await execa('./cli.js', ['Jiong囧']);
	t.is(Number.parseInt(stdout, 10), 6);
});
