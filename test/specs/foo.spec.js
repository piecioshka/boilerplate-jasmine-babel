import Foo from '../../src/foo';

describe('Foo', () => {
    it('should be createable', () => {
        expect(() => {
            new Foo()
        }).not.toThrow();
    });
    it('should return bar', () => {
        expect(Foo.bar()).toEqual('bar');
    });
});
