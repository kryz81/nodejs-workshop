function get1() {
  throw 'dddd';
}

// get1();

function get2() {
  throw new Error('dddd');
}

get2();
