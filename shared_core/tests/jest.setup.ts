import "@testing-library/jest-dom";

Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => "mock-uuid-12345", 
  },
});
