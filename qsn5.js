function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(10, 20, 30));