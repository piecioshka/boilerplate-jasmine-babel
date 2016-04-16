import Foo from '../../app/scripts/core/foo.es6';

describe('Foo', () => {
    it('bar', () => {
        expect(Foo.bar()).toEqual('bar');
    });
});
