// async function getproduct() {

//     var response = await fetch('https://dummyjson.com/products');
//     console.log(response);
//     data = await response.json();
//     console.log(data);
// }



var products= []

var x=new XMLHttpRequest();

x.open("GET","https://dummyjson.com/products")

x.send();


x.addEventListener("load",function(){
    if(x.status>=200 && x.status<300){
        result=JSON.parse(x.response);
        
    }
    console.log(result);

products=result.products;

displayProducts();
}


)


function displayProducts(productList = products) {

    cartona = "";

    for (var i = 0; i < productList.length; i++) {
cartona += `
<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="card">
        <img src="${productList[i].images[0]}" class="card-img-top" alt="...">

        <div class="card-body">
            <h5 class="card-title fs-5">${productList[i].title}</h5>

            <p class="fs-5 category">${productList[i].category}</p>

            <p class="card-text brand">
                Brand: ${productList[i].brand || "No Brand"}
            </p>

            <div class="d-flex">
                <p class="price fs-3 fw-semibold text-primary">
                    ${productList[i].price}
                </p>
                <i class="fa-solid fa-dollar-sign fs-3 pt-2 text-primary"></i>
            </div>

            <div class="d-flex">
                <p class="precentag fs-4">
                    ${productList[i].discountPercentage}% OFF
                </p>
            </div>

            <div class="d-flex rating">
                <i class="fa-solid fa-star pt-1 fs-5 text-warning"></i>
                <p class="ms-1 fs-5">${productList[i].rating}</p>
            </div>

            <p class="stock">Stock: ${productList[i].stock}</p>

            <a href="#" class="btn btn-primary w-100">
                View Details
            </a>
        </div>
    </div>
</div>`;
    }

 document.getElementById("rowData").innerHTML=cartona;
}



function searchProducts(searchValue) {

    var filteredProducts = [];

    for (var i = 0; i < products.length; i++) {

        if (products[i].title.toLowerCase().includes(searchValue.toLowerCase())) {
            filteredProducts.push(products[i]);
        }

    }

    displayProducts(filteredProducts);
}
    




