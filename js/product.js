$(function(){
             $.getJSON("json/product.json",function(data){
                // console.log(data)


                 $.each(data,function(i,item){
            var a=" <div class='product_right_one'><div class='product_right_div'><img src='"+item.imgsrc+"' class='img'/><img src='"+item.S+"' class='img_o'/><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a><h5><i class='"+item.i+"'></i>"+item.join+"</h5></a></div><ul><li><i class='"+item.add+"'></i>"+item.wishlist+"</li><li><i class='"+item.add+"'></i>"+item.compare+"</li></ul><div class='product_right_one_rgb'><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div> </div></div>"
                    $(a).appendTo(".product_right_top")

                })
           
             });



             
             
        })