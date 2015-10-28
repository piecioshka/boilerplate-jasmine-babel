import Foo from '../../app/scripts/core/Foo.es6';

describe('Foo', () => {
    it('bar', () => {
        expect(Foo.bar()).toEqual('bar');
    });
});
