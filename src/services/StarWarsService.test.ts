import { buildFilter } from './StarWarsService';

describe('buildFilter', () => {
  it('should build a filterByName', () => {
    const filter = buildFilter('tatoo');

    expect(filter.filterByName).not.toBeNull();
    expect(filter.filterByName.name).toBe('tatoo');
  });
});
