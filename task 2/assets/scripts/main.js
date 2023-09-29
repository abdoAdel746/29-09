let rowCounter = 0;
let button = document.querySelector("button");
const product_names = [];

button.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < localStorage.length; i++) {
    const v = localStorage.key(i);
    const k = JSON.parse(localStorage.getItem(v));
    product_names.push(k.product_name);
  }
  rowCounter++;
  create_row();
  button.textContent = "add product";
});

let create_row = () => {
  let obje = {
    product_name: document.getElementById("product_name").value,
    product_category: document.getElementById("product_category").value,
    product_price: document.getElementById("product_price").value,
    product_discount: document.getElementById("product_discount").value,
    product_quantity: document.getElementById("product_quantity").value,
    product_describtion: document.getElementById("product_describtion").value,
  };
  if (
    obje.product_name != "" &&
    product_names.includes(obje.product_name) == 0
  ) {
    localStorage.setItem(
      `${obje.product_name}_${rowCounter}`,
      JSON.stringify(obje)
    );
    console.log(product_names);
    create_td(0, JSON.parse(JSON.stringify(obje)));
  } else {
    alert("productt name excists");
  }
};

let create_td = (i, value) => {
  const key = localStorage.key(i);

  //const value = JSON.parse(localStorage.getItem(key));
  const table = document.querySelector("table");
  const row = document.createElement("tr");

  Object.values(value).forEach((e) => {
    const td = document.createElement("td");
    row.append(td);
    row.setAttribute("id", key);
    td.textContent = e;
    table.append(row);
  });

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  row.append(td1);
  row.append(td2);
  td1.innerHTML = `<i class="fas fa-up-right-from-square edit"></i>`;
  td2.innerHTML = `<i class="fas fa-delete-left remove"></i>`;
};

for (let i = 0; i < localStorage.length; i++) {
  create_td(i, JSON.parse(localStorage.getItem(localStorage.key(i))));

  let remove = document.querySelectorAll(".remove");
  remove.forEach((e) => {
    e.addEventListener("click", (i) => {
      let removeElem_id = e.parentElement.parentElement.getAttribute("id");
      console.log(removeElem_id);
      localStorage.removeItem(removeElem_id);
      e.parentElement.parentElement.remove();
    });
  });

  let edit = document.querySelectorAll(".edit");
  edit.forEach((e) => {
    e.addEventListener("click", (i) => {
      const edit_id = e.parentElement.parentElement.getAttribute("id");
      const value = JSON.parse(localStorage.getItem(edit_id));

      document.getElementById("product_name").value = value.product_name;
      document.getElementById("product_category").value =
        value.product_category;
      document.getElementById("product_price").value = value.product_price;
      document.getElementById("product_discount").value =
        value.product_discount;
      document.getElementById("product_quantity").value =
        value.product_quantity;
      document.getElementById("product_describtion").value =
        value.product_describtion;
      button.textContent = "update";

      let removeElem_id = e.parentElement.parentElement.getAttribute("id");
      console.log(removeElem_id);
      localStorage.removeItem(removeElem_id);
      e.parentElement.parentElement.remove();

      console.log(value);
    });
  });
}
