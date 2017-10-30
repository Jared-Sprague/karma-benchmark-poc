/* global suite, benchmark, _ */
let p5Inst;

suite('p5 random() vs Math.random()', function () {
  benchmark('myFunction()', function () {
    return p5Inst.random();
  });

  benchmark('Math.random()', function () {
    return Math.random();
  });
}, {
  onStart: function() {
    p5Inst = new p5();
  },
});
