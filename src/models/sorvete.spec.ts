import { Sorvete } from './sorvete';

describe('Sorvete', () => {
  it('should create an instance', () => {
    expect(new Sorvete('Chocolate')).toBeTruthy();
  });
});

describe('Should accepts values in the constructor', () => {
  const sorv = new Sorvete('Morango');
  expect(sorv.sabor).toEqual('Morango');
});
