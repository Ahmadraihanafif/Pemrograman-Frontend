/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */

const users = [
  {
    name: "ahmad",
    age: 21,
    major: "UI/UX",
  },
  {
    name: "raihan",
    age: 20,
    major: "backend",
  },
  {
    name: "afif",
    age: 15,
    major: "frontend",
  },
  {
    name: "fahri",
    age: 28,
    major: "Desain Grafis",
  },
  {
    name: "sugeng",
    age: 40,
    major: "Tataboga",
  },
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
function all() {
  for (const user of users) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
function store(user) {
  const newUser = { user };
  users.push(user);
  console.log(`berhasil ditambahkan.`);
  all();
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */

const update = (index,user) => {
 if(index < users.length){
  users[index] = user
 } 
 else{
  console.log(`User dengan index: ${index} tidak ditemukan`)
 }
 all();
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
function destroy(index) {
  users.splice(index, 1);
  console.log(`berhasil ditambahkan.`);
  all();
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
