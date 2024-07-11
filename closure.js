function example() {
  for (i = 0; i < 3; i++) {
    (function fun(i) {
      setTimeout(() => {
        console.log("i", i);
      }, i * 1000);
    })(i);
  }
}

example();
