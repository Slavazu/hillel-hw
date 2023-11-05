const arr = [
  1, 2, 3, 4, {},
  [1, 2, 3],
  [1, 2, 3],
  [3, 4,
    [5, 6, 7],
  ],
];

function outerFlat() {
  const res = [];

  function flat(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  }

  flat(arr);
  return res;
}

const flat = outerFlat();
console.log(flat);
