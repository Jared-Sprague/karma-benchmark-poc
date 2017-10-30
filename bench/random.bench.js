/* global suite, benchmark, _ */
suite('p5 random() vs Math.random()', function () {
  benchmark('myFunction()', function () {
    return myFunction();
  });

  benchmark('Math.random()', function () {
    return Math.random();
  });
});
