
    const products = [
        {
            name : "product 1",
            description : "Description produit 1",
            price : 150,
            fav : false,
        },
        {
            name : "product 2",
            description : "Description produit 2",
            price : 230,
            fav : true,
        },
        {
            name : "product 3",
            description : "Description produit 3",
            price : 499,
            fav : false,
        },
        {
            name : "product 4",
            description : "Description produit 4",
            price : 2,
            fav : false,
        }
    ];
  
listProducts(products);
let cart = []
let vat = 0.19;


//fin de start



//template product list
function templateListProduct(product,i){
    let template = '<div class="products">' + 
        '<div productid="'+i+'" class="product">' + 
        '<h3 class="prod-title">'+product.name+'</h3>' + 
            '<p class="description">'+product.description+'</p>' + 
            '<span class="price">'+product.price+'</span>' + 
            '<button oncart="false" productid="'+i+'"  class="add" onclick="toCart(products, this)">Add to cart</button>' + 
            '<span class="fav fav'+product.fav+'" ><i class="fa fa-heart"></i></span>' + 
            '</div>' + 
        '</div>';
        return template;
}



//template product CART list
function templateCartProduct(product,i){
  //let qte = document.getElementById("qte"+i).val;
  let template = '<div class="cart-products" productid="'+i+'">' + 
      '<div class="product">' + 
      '<button productid="'+i+'" class="delete" onclick="delCart(this)" class="delete" ><i class="fa fa-close" aria-hidden="true"></i></button>'+
      '<div class="prod-details">'+
          '<h3 class="prod-title">'+product.name+'</h3>' + 
          '<p class="description">'+product.description+'</p>' + 
          '</div>' + 
       '<span class="price">'+product.price+'</span>' + 
      '<div class="quant"><input id="qte'+i+'" class="qte" type="number" name="quantite" min="1" value="1"></div>'+
      '<div class="total-prod">'+product.price +'</div>'+
       '</div>' + 
      '</div>';
      
      return template;
}

//supprimer le produit cliqué a la carte
function delCart(el){
  let id = el.getAttribute('productid');

  let addbutt = document.querySelector('.products button[productid="'+id+'"]');
  addbutt.setAttribute("oncart", false);
  
  const product = document.querySelector('.cart-products[productid="'+id+'"]');
  product.remove();

  console.log(id);
}

//ajouter le produit cliqué a la carte
function toCart(products, el){
  let id = el.getAttribute('productid');
  let oncart = el.getAttribute('oncart');
  
  console.log(oncart);
  if(oncart == 'false'){
  document.getElementById("cart").innerHTML += templateCartProduct(products[id],id);
  el.setAttribute("oncart", true);
} else if (oncart == 'true') {
  alert('product already on cart');
}
 
 }


//lister produits sur la page html
function listProducts(products){
  for (let i = 0; i < products.length; i++) {
    document.getElementById("produits").innerHTML += templateListProduct(products[i],i);
    //console.log(products[i]);
    //console.log(templateListProduct(products[i]));
  }
}


//ajouter produit aux favoris
function addFav(id){

}

//calculer le total des produits avec tva
function totalCart(){

}