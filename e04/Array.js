const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function foo(arr) {
  var a = [],
    b = [],
    prev;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  return [a, b];
}

var result = foo(arr);
console.log('[' + result[0] + ']','[' + result[1] + ']')