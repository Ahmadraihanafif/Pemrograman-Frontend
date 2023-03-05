// const hewan = ["Ayam", "Anak Ayam", "Emak Ayam", "Nenek Ayam"];

// for (let i = 0; i < hewan.length; i++) {
//   console.log(hewan[i]);
// }

// const user = ["ahmad", 21, 172];

const user = {
  name: "ahmad",
  umur: 21,
  tinggi: 172,
};

for (const label in user) {
  console.log(user[label]);
}
