//Bai 2

function tinhGiaTri(x, y, z) {
  const giaTri = 3 * x ** 2 - 5 * x * y + z ** 4;
  return giaTri;
}

const x = 5;
const y = 1;
const z = 2;

const ketQua = tinhGiaTri(x, y, z);
console.log("Giá trị của biểu thức là:", ketQua);


//Bai 3

const arr = [5, 1, 4, 2, 7];
const length = arr.length;

for (let i = 0; i < length; i++) {
  console.log(arr[i]);}