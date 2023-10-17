$(document).ready(function(){
    $.ajax({
        url:'data/products.json',
        type:'GET',
        cache: false,
        success: function(result){
            $.each(result,function (key,value) {  
                var product_list=""            
                product_list=product_list+'<div class="product-card">'+
                                            '<div class="product-image" style="grid-row: span 3;"><img src="' +value.image+ '" alt="'+value.name+'"></div>'+                         
                                           '<div class="product-name" style="grid-column: span 2;"><h3>' +value.name+ '</h3></div>'+
                                           '<div class="product-price" style="grid-column: span 2;" ><h3>Price: ' +value.price+ '</h3></div>'+
                                            '<div><button class="view-details" data-id="' +key+ '">View Details</button></div>'+                                                   
                                        '</div>';
                $('.product-list').append(product_list);
              });

            $('.view-details').on('click', function () {
                var productIndex = $(this).data('id');
                var productDetails = result[productIndex];
                localStorage.setItem('productdetails',JSON.stringify(productDetails));
                window.location.href='product_details.html';                              
            });
            var abc=JSON.parse(localStorage.getItem('productdetails'));
            var productDescription=abc.description.replace(/\n/g,'<br>');
            $('.product-details').append('<div class="name"><h2>'+abc.name+'</h2></div>'+
            '<img src="'+abc.image+'" alt="'+abc.name+'">'+
            '<div class="description"><h3>Price:- '+ abc.price +'</h3><h3>Product Description:</h3>'+
             '<p>'+productDescription+'</p></div>'+
             '<div class="home-button"><a href="index.html" style="text-decoration:none"><button class="back">Back To Home</button></a></div>'); 
        }
    });
});




