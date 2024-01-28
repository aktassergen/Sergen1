// const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/";

// function makeRequest(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`${jsonPlaceholderURL}posts/${id}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(`Istek tamamlandi - ID: ${id}`);
//         resolve(`Istek tamamlandi - ID: ${id}`);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

// const request5 = makeRequest(5);
// const request9 = makeRequest(9);
// const request3 = makeRequest(3);

// Promise.all([request5, request9])
//   .then(results => {
//     console.log("5 ve 9 numaralı istekler tamamlandı");
//     console.log(results[0]);
//     console.log(results[1]);

   
//     return request3;
//   })
//   .then(result => {
//     console.log("3 numaralı istek tamamlandı");
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// script.js

const apiUrl = "https://dummyjson.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

function filterProducts() {
    const filterInput = document.getElementById('filterInput');
    const keyword = filterInput.value.toLowerCase();

    fetchProducts().then(products => {
        const filteredProducts = products.filter(product => product.title.includes(keyword));

        const sortedProducts = filteredProducts.sort((a, b) => {
            // Kategoriye göre alfabetik sıralama
            const categoryComparison = a.category.localeCompare(b.category);

            if (categoryComparison === 0) {
                // Aynı kategoriye sahip ürünler varsa rating değerine göre sıralama
                return b.rating - a.rating;
            }

            return categoryComparison;
        });

        displayProducts(sortedProducts);
    });
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${product.title}, Category: ${product.category}, Rating: ${product.rating}`;
        productList.appendChild(listItem);
    });
}
