/**
 * Created by lenovo on 2017/5/2.
 */
$(function(){
    $('.con_top_right>li').on({
        mouseenter:function(){
            $(this).css({
                "color":"#FFAC40"
            })
        },
        mouseout:function(){
            $(this).css({
                "color":"#696763"
            })
        }
    })
})