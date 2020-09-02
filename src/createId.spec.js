import cookies from 'js-cookie';
import createId from './createId';

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
}));

describe('createId()', () => {
  beforeEach(() => {
    cookies.get.mockReset();
  });

  it('should return an existing value', () => {
    cookies.get.mockImplementation(() => 'abcdef');
    expect(createId()).toBe('abcdef');
  });

  it('should return value based on `_ga`', () => {
    cookies.get.mockImplementation((key) => {
      const values = {
        _ga: 'GA-1234',
      };

      return values[key];
    });

    const id = createId();

    expect(id).toMatchSnapshot();
    expect(cookies.set).toHaveBeenCalledWith('carlId', id, { expires: 365 });
  });

  it('should return a new random value', () => {
    const id = createId();

    expect(id).toEqual(expect.any(String));
    expect(cookies.set).toHaveBeenCalledWith('carlId', id, { expires: 365 });
  });
});

