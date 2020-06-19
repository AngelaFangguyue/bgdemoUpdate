let listId = parseInt(window.localStorage.getItem("listId") || "20");
let productionId = parseInt(window.localStorage.getItem("productionId") || "20");
function createdListId() {
  listId += 1;
  window.localStorage.setItem("listId", listId.toString());
  return listId;
}
function createdProductId() {
  productionId += 1;
  window.localStorage.setItem("productionId", productionId.toString());
  return listId;
}

export {listId, productionId, createdListId, createdProductId};

////使用类的方式
// let tagId1 = parseInt(window.localStorage.getItem('tagId')||'0');
// class CreateId1 {
//   constructor(la) {
//     this.value = la + 1;
//   }
// }
// console.log((new CreateId1(tagId1)).value);
////使用类的方式
