$(document).ready(function () {
  fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0], data.length);
      let html = "";
      for (let i = 0; i < data.length; i++) {
        html += `<div class="card" style="width: 18rem;">
        <img src=${data[i].image} class="card-img-top w-50" alt="...">
        <div class="card-body mt-auto">
            <h5 class="card-title">Title</h5>
            <p class="card-text ">lorem loremlorem loremlorem loremlorem lorem</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
    </div>`;
        $("#products").html(html);
      }
    });
});
