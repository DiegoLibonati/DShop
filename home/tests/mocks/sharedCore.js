const getIdsByLength = (length) =>
  Array.from({ length }, (_, i) => `mock-id-${i}`);

const mountComponent = jest.fn();
const unMountComponent = jest.fn();

module.exports = {
  getIdsByLength,
  mountComponent,
  unMountComponent,
};