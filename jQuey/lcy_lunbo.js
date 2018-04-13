$(function(){
             $.getJSON("json/lcy_lunbo_json.json",function(data){
                console.log(data)
                 $.each(data,function(i,item){
            var a= "<div class='product_right_three'> <div class='product_right_div'><img src='"+item.imgSrc.one+"' /><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a href=''><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div> <div class='product_right_three'><div class='product_right_div'><img src='"+item.imgSrc.two+"'   /><h3>"+item.money+"</h3><h4>"+item.recommend+"</h4><a href=''><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div><div class='product_right_three'><div class='product_right_div'><img src='"+item.imgSrc.three+"'   /><h3>"+item.money+"</h3> <h4>"+item.recommend+"</h4><a href=''><h5><i class='fa fa-shopping-cart'></i>"+item.join+"</h5></a></div></div>"
                    $(a).appendTo(".lunbo_imgs li")
                })
             });
             
        })