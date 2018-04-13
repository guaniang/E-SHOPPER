$(function(){
             $.getJSON("card.json",function(data){
                // console.log(data);


                 $.each(data,function(i,item){

                    var b="<li>"+item.title+"</li>";
                    var c= "<dd><div class='product_right_two'><div class='product_right_div'><img src='"+item.imgSrc.one+"'/><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div><div class='product_right_two'><div class='product_right_div'><img src='"+item.imgSrc.two+"'/><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div><div class='product_right_two'><div class='product_right_div'><img src='"+item.imgSrc.three+"'/><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div><div class='product_right_two'><div class='product_right_div'><img src='"+item.imgSrc.four+"'/><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div></dd>"

                    $(b).appendTo(".product_right .product_right_middle ul ")
                    $(c).appendTo(".product_right .product_right_middle dl ")

                })
           $(".product_right_middle ul li").click(function(){
           $(this).addClass("getColor").siblings().removeClass('getColor')
$(" .product_right_middle dl dd").eq($(this).index()).fadeIn().siblings().fadeOut();
 
             })
             });



             
             
        })