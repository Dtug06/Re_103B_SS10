const books = [
  {
    bookCode: "B01",
    title: "JavaScript cơ bản",
    category: "Lập trình",
    price: 120000,
    totalCopies: 5,
    availableCopies: 1,
    shelfLocation: "Kệ A1",
    status: "CÒN SÁCH TRÊN KỆ"
  },
  {
    bookCode: "B02",
    title: "Tin học văn phòng",
    category: "Tin học",
    price: 90000,
    totalCopies: 3,
    availableCopies: 3,
    shelfLocation: "Kệ B2",
    status: "CÒN SÁCH TRÊN KỆ"
  }
];

// nhap sach moi
books.push({
  bookCode: "B03",
  title: "Cấu trúc dữ liệu",
  category: "Lập trình",
  price: 150000,
  totalCopies: 4,
  availableCopies: 4,
  shelfLocation: "Kệ A2",
  status: "CÒN SÁCH TRÊN KỆ"
});

// cho muon sach B01
for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B01") {
    if (books[i].availableCopies > 0) {
      books[i].availableCopies--;
      console.log("Đã cho mượn 1 cuốn B01");

      if (books[i].availableCopies === 0) {
        books[i].status = "HẾT SÁCH TRÊN KỆ";
      }
    } else {
      console.log("B01 đã hết sách trên kệ, không thể cho mượn");
    }
    break;
  }
}

// chuyen sach B03 sang ke moi
for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B03") {
    books[i].shelfLocation = "Kệ A3";
    break;
  }
}

// thanh ly dau sach B02
for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B02") {
    books.splice(i, 1);
    break;
  }
}

// kiem ke kho sau khi cap nhat
let totalCopies = 0;
let availableCopies = 0;
let totalValue = 0;

for (let i = 0; i < books.length; i++) {
  totalCopies += books[i].totalCopies;
  availableCopies += books[i].availableCopies;
  totalValue += books[i].totalCopies * books[i].price;

  console.log("Sách:", books[i].bookCode, "-", books[i].title);
  console.log("Số lượng:", books[i].totalCopies);
  console.log("Còn trên kệ:", books[i].availableCopies);
  console.log("Vị trí:", books[i].shelfLocation);
  console.log("Trạng thái:", books[i].status);
  console.log("--------------------");
}

console.log("Tổng số sách trong kho:", totalCopies);
console.log("Số sách còn trên kệ:", availableCopies);
console.log("Tổng giá trị tài sản:", totalValue, "VNĐ");
