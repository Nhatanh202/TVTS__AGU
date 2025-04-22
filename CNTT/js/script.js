$(document).ready(function(){
    // Kiểm tra nếu jQuery đã tải
    if (typeof jQuery === "undefined") {
        console.error("jQuery chưa được tải.");
        return;
    }
    // Khởi tạo Slick Carousel nếu phần tử tồn tại
    if ($(".footer-carousel").length) {
        $(".footer-carousel").slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 4000,
            centerMode: true,
            dots: false,
            arrows: false
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navbarMobile = document.querySelector('.navbar__mobile'); // Lấy menu mobile
    const overlay = document.querySelector('.overlay'); // Lấy phần overlay
    const section2 = document.getElementById("about"); // Lấy phần tử có id="about"
  
    // Hàm mở sidebar
    function openSidebar() {
      navbarMobile.classList.add('show'); // Thêm class 'show' vào navbar__mobile
      overlay.style.display = "block"; // Hiển thị overlay
    }
  
    // Hàm đóng sidebar
    function closeSidebar() {
      navbarMobile.classList.remove('show'); // Xóa class 'show'
      overlay.style.display = "none"; // Ẩn overlay
    }
  
    // Hàm kiểm tra vị trí cuộn và tự động đóng sidebar
    function checkScroll() {
      const section2Position = section2.getBoundingClientRect().top;
  
      // Nếu phần tử "about" xuất hiện trong viewport
      if (section2Position <= 0) {
        closeSidebar(); // Đóng sidebar
      }
    }
  
    // Thêm sự kiện click cho nút mở sidebar
    document.querySelector(".navbar__mobile-open").addEventListener("click", openSidebar);
  
    // Thêm sự kiện click cho nút đóng sidebar
    document.querySelector(".navbar__mobile-close").addEventListener("click", closeSidebar);
  
    // Thêm sự kiện click cho overlay để đóng sidebar
    overlay.addEventListener("click", closeSidebar);

  });
