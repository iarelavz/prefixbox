const data = [
  {
    id: '[data-identifier="1"]',
    product: "Komód",
    price: 23000,
    oldPrice: 0,
  },
  {
    id: '[data-identifier="2"]',
    product: "Beton - szárazbeton",
    price: 8000,
    oldPrice: 10000,
  },
  {
    id: '[data-identifier="3"]',
    product: "Konyhabútor",
    price: 99000,
    oldPrice: 120000,
  },
  {
    id: '[data-identifier="4"]',
    product: "Kanapé",
    price: 10000,
    oldPrice: 0,
  },
  {
    id: '[data-identifier="5"]',
    product: "Faszenes BBQ grill",
    price: 50000,
    oldPrice: 80000,
  },
  {
    id: '[data-identifier="6"]',
    product: "Fali csempe",
    price: 2000,
    oldPrice: 0,
  },
];

const container = document.querySelector(".products");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.justifyItems = "center";

//Checkbox eventlistener for sorting in prices
const checkbox = document.querySelector(".sale");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    data.forEach(function (arrayItem) {
      let element = document.querySelector(arrayItem.id);
      arrayItem.oldPrice > 0
        ? (element.parentNode.style.display = "inline-block")
        : (element.parentNode.style.display = "none");
    });
  } else {
    data.forEach(function (arrayItem) {
      let element = document.querySelector(arrayItem.id);
      element.parentNode.style.display = "inline-block";
    });
  }
});

data.forEach(function (arrayItem) {
  let element = document.querySelector(arrayItem.id);
  element.parentNode.style.display = "inline-block";
});

//Select eventlistener for order the products
const selectElement = document.querySelector(".order");
selectElement.addEventListener("change", (event) => {
  if (event.target.value == "0") {
    numSortAscent();
  } else if (event.target.value == "1") {
    numSortDescent();
  } else if (event.target.value == "2") {
    abcSortAscent();
  } else if (event.target.value == "3") {
    abcSortDescent();
  }
});

// Function for sort product prices in descending order
function numSortDescent() {
  let sortedArray = data.sort((a, b) =>
    a.price < b.price ? 1 : a.price > b.price ? -1 : 0
  );
  sortedArray.forEach(function (arrayItem, index) {
    let element = document.querySelector(arrayItem.id);
    element.parentNode.style.order = index + 1;
  });
};

// Function for sort product prices in ascending order
function numSortAscent() {
  let sortedArray = data.sort((a, b) =>
    a.price > b.price ? 1 : a.price < b.price ? -1 : 0
  );
  sortedArray.forEach(function (arrayItem, index) {
    let element = document.querySelector(arrayItem.id);
    element.parentNode.style.order = index + 1;
  });
};

// Function for sort product names in descenting order
function abcSortDescent() {
  let sortedArray = data.sort((a, b) => {
    let nameA = a.product.toLowerCase(),
      nameB = b.product.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  sortedArray.forEach(function (arrayItem, index) {
    let element = document.querySelector(arrayItem.id);
    element.parentNode.style.order = index + 1;
  });
};

// Function for sort product names in ascending order
function abcSortAscent() {
  const sortedArray = data.sort((a, b) => {
    let nameA = a.product.toLowerCase(),
      nameB = b.product.toLowerCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }

    return 0;
  });
  sortedArray.forEach(function (arrayItem, index) {
    let element = document.querySelector(arrayItem.id);
    element.parentNode.style.order = index + 1;
  });
};
