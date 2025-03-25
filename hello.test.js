const sayHello = require('./hello');

test('saludo con nombre', () => {
  expect(sayHello('Axel')).toBe('Hola, Axel!');
});
