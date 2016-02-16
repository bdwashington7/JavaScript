$(document).ready(function(){

    $(".single-box.one").hover(function(){
        $("#show-image").attr("src","images/image%20(1).jpg");
        $(this).css("background-color", "#ddd");
        $(".single-box.two ,.single-box.three ,.single-box.four ,.single-box.five ,.single-box.six ").css("background-color", "#fff");
    });

    $(".single-box.two").hover(function(){
        $("#show-image").attr("src","images/image%20(2).jpg");
        $(this).css("background-color", "#ddd");
        $(".single-box.one ,.single-box.three ,.single-box.four ,.single-box.five ,.single-box.six ").css("background-color", "#fff");
    });

    $(".single-box.three").hover(function(){
        $("#show-image").attr("src","images/image%20(3).jpg");
        $(this).css("background-color", "#ddd");
        $(".single-box.one ,.single-box.two ,.single-box.four ,.single-box.five ,.single-box.six ").css("background-color", "#fff");
    });

    $(".single-box.four").hover(function(){
        $("#show-image").attr("src","images/image%20(4).jpg");
        $(this).css("background-color", "#ddd");
        $(".single-box.one ,.single-box.two ,.single-box.three ,.single-box.five ,.single-box.six ").css("background-color", "#fff");
    });

    $(".single-box.five").hover(function(){
        $("#show-image").attr("src","images/image%20(5).jpg");
        $(this).css("background-color", "#ddd");
        $(".single-box.one ,.single-box.two ,.single-box.three ,.single-box.four ,.single-box.six ").css("background-color", "#fff");
    });

    $(".single-box.six").hover(function(){
        $("#show-image").attr("src","images/image%20(6).jpg");
        $(this).css("background-color", "#ddd");
        $(".single-box.one ,.single-box.two ,.single-box.three ,.single-box.four ,.single-box.five ").css("background-color", "#fff");
    });

});


