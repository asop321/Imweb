/* 다크모드 */
const btn = document.querySelector(".btn_toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

/* 모달창 */
    $(".modal").click(function () {
    
        $(".modal_box").fadeIn();
        $("#toTop ").fadeOut();
    }); 


    $(".modal_box").click(function () {
     
        $(".modal_box").fadeOut();
        $(".content_box_inner").fadeIn();
        $("#toTop ").fadeIn();

    });

/* 모바일 햄버거 메뉴 */
const navtab = {
    init: function () { this.motab(); }, motab: function () {
        let mBtn = $(".m_btn"); 
        let closeBtn = $(".close_btn");
        // 모바일 버튼 클릭 
        $(mBtn).click(function () {
            $(".m_nav").addClass("on");
            $(".bg_shadow").css("display", "block");
            $("#toTop ").fadeOut();
        });
        // 화면 클릭 
        $(".bg_shadow").click(function () {
            $(".m_nav").removeClass("on");
            $(".bg_shadow").css("display", "none");
        });
        // 닫기 버튼 클릭 
        $(closeBtn).click(function () {
            $(".m_nav").removeClass("on");
            $(".bg_shadow").css("display", "none");
            $("#toTop ").fadeIn();
        });
    }
}
$(document).ready(function () { navtab.init(); })



/* 탑버튼 */

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();            
            
        } 
    });
    
    $("#toTop").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 300);
        return false;
    });
});