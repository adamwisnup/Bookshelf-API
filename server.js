// Import Hapi.js
const Hapi = require("@hapi/hapi");
const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

// Inisialisasi server
const server = Hapi.server({
  port: 9000,
  host: "localhost",
});

// Definisikan rute
server.route([
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
]);

// Start server
const init = async () => {
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

// Panggil fungsi init untuk menjalankan server
init();
