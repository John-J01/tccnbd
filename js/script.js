window.addEventListener('scroll', function scroll() {
    const scrolled = window.scrollY;


    if (scrolled < 50) {
        document.getElementById('scroll-to-top').style.bottom = " -100px";
    }
    else {
/*         menu.style.background = "white"; */
        document.getElementById('scroll-to-top').style.bottom = "0px"
    }
    if (scrolled > 1200 & scrolled < 2000 ) {
        document.getElementById('social-contact').style.left = "0px";
    } else {
        document.getElementById('social-contact').style.left = "-100px";
    }
});


var pictures = Array.from(document.querySelectorAll('#home-content-left img'));
var modal = document.getElementById('modalPicture');
var ContentModal = document.getElementById('contentModal');
modal.onclick = function () {
    modal.style.display = " none";
}
pictures.forEach(img => {
    img.onclick = function () {
        modal.style.display = "flex";
        contentModal.src = this.src;
    }
});

/*
function openForm() {
    document.getElementById('blog-form-contact').style.display="none";
    document.getElementById('blog-form').style.display="block";
} */


/* slide show */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2300); // Change image every 2 seconds
}


/* open form search */
function openSearchForm() {
    document.getElementById('open-form-contact').style.display ="none";
    document.getElementById('close-form-contact').style.display ="block";
    document.getElementById('form-contact').style.display ="flex";
    setTimeout(() => {
        document.getElementById('form-contact').style.maxHeight ="600px";
    }, 5);
}
function closeSearchForm() {
    document.getElementById('open-form-contact').style.display ="block";
    document.getElementById('close-form-contact').style.display ="none";
    document.getElementById('form-contact').style.display ="none";
    document.getElementById('form-contact').style.maxHeight ="0";
}

/* responsive menu */
function openResponsiveMenu() {
   var ul=  Array.from(document.querySelectorAll('#menu ul'));
    ul[0].style.right = "0px";

   var header =  Array.from(document.getElementsByTagName('header'));
   header[0].style.display="none";
   document.getElementById('close').style.display="inline-block";
   document.getElementById('bars').style.display="none";
   document.getElementById('logo').style.display="none";
}
function closeResponsiveMenu() {
   var ul=  Array.from(document.querySelectorAll('#menu ul'));
    ul[0].style.right = "-100%";
   var header =  Array.from(document.getElementsByTagName('header'));
   header[0].style.display="block";
   document.getElementById('close').style.display="none";
    document.getElementById('bars').style.display ="inline-block";
    document.getElementById('logo').style.display = "block";
}
/* reset form */
/* function resetForm(formName) {
        var form = document.getElementById(formName);
        form.reset();
} */


function validateEmail(email) {
    const valMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valMail.test(email);
}
function validateDate(date) {
    const valDate = /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/;
    return valDate.test(date);
}
function validatePhoneNumber(phoneNumber) {
    const valPhoneNumber = /^\+?(\d.*){3,}$/;
    return valPhoneNumber.test(phoneNumber);
}
function validateNumber(Number) {
    const valNumber = /^\d+$/ ;
    return valNumber.test(Number);
}

function validateForm() {
    var name = document.forms['register-form']['hoten'].value;
    var birthDate = document.forms['register-form']['ngaysinh'].value;
    var address = document.forms['register-form']['noisinh'].value;
    var identity = document.forms['register-form']['cmnd'].value;
    var phone = document.forms['register-form']['dienthoai'].value;
    var email = document.forms['register-form']['email'].value;
    var degree = document.forms['register-form']['totnghiep'].value;
    var school = document.forms['register-form']['truong'].value;
    var educationalSystem = document.forms['register-form']['hexettuyen'].value;
    var majors = document.forms['register-form']['chuyennganh'].value;
    var accommodation = document.forms['register-form']['noicutru'].value;
    if(name.length < 5 ){
        alertify
            .alert("Vui lòng nhập tên đầy đủ.", function () {
                alertify.message('Vui lòng nhập tên đầy đủ');
            });
        return false;
    } else if (!validateDate(birthDate)) {
        alertify
            .alert("Vui lòng nhập đúng ngày sinh dd/mm/yyyy.", function () {
                alertify.message('Vui lòng nhập đúng ngày sinh dd/mm/yyyy.');
            });
        return false;
    }
    else if (address.length < 15 ) {
        alertify
            .alert("Vui lòng nhập địa chỉ đầy đủ hơn 15 kí tự.", function () {
                alertify.message('Vui lòng nhập địa chỉ đầy đủ hơn 15 kí tự.');
            });
        return false;
    }
    else if (!validateNumber(identity)) {
        alertify
            .alert("Vui lòng nhập đúng số CMND.", function () {
                alertify.message('Vui lòng chỉ nhập số.');
            });
        return false;
    }
    else if (!validatePhoneNumber(phone)) {
        alertify
            .alert("Vui lòng nhập đúng số điện thoại.", function () {
                alertify.message('Vui lòng nhập đúng số điện thoại.');
            });
        return false;
    }
    else if (!validateEmail(email)) {
        alertify
            .alert("Vui lòng nhập đúng địa chỉ email.", function () {
                alertify.message('Vui lòng nhập đúng địa chỉ email.');
            });
        return false;
    }
    else if (degree == 0) {
        alertify
            .alert("Vui lòng chọn trình độ học vấn.", function () {
                alertify.message('Vui lòng chọn trình độ học vấn.');
            });
        return false;
    }
    else if (school.length < 5) {
        console.log(degree);
        console.log(degree.value);
        alertify
            .alert("Vui lòng nhập đầy đủ tên Trường.", function () {
                alertify.message('Vui lòng nhập đầy đủ tên Trường hơn 5 kí tự.');
            });
        return false;
    }
    
    else if (educationalSystem == 0) {
        alertify
            .alert("Vui lòng chọn hệ đào tạo.", function () {
                alertify.message('Vui lòng chọn hệ đào tạo.');
            });
        return false;
    }
    else if (majors == 0) {
        alertify
            .alert("Vui lòng chọn chuyên ngành học.", function () {
                alertify.message('Vui lòng chọn chuyên ngành học.');
            });
        return false;
    }
    
    else if (accommodation.length < 5) {
        alertify
            .alert("Vui lòng nhập đầy đủ nơi cư trú.", function () {
                alertify.message('Vui lòng nhập hơn 5 kí tự.');
            });
        return false;
    } else{
        
            alertify.minimalDialog || alertify.dialog('minimalDialog', function () {
                return {
                    main: function (content) {
                        this.setContent(content);
                    }
                };
            });
            alertify.minimalDialog("Cảm ơn bạn đã đăng ký.Chúng tôi sẽ cố gắng liên hệ với bạn sớm nhất có thể. NẾU CÓ VẤN ĐỀ VỀ SỰ CỐ DẪN TỚI VIỆC LIÊN LẠC CHO BẠN BỊ CHẬM TRỄ, BẠN CÓ THỂ LIÊN HỆ TRỰC TIẾP VỚI CHÚNG TÔI QUA SỐ HOTLINE (0274) 6280176 HOẶC BẠN CÓ THỂ LIÊN HỆ QUA FACEBOOK HOẶC ĐẾN TRỰC TIẾP TRUNG TÂM TRƯỜNG ĐỂ CÓ THỂ NGHE TƯ VẤN VÀ BIẾT THÊM VỀ CHƯƠNG TRÌNH HỌC. THÂN ÁI");
            
            return true;
        
    }

    
}

function validateFormContact(){
    var title = document.forms['contact-form']['ftitle'].value;
    var name = document.forms['contact-form']['fname'].value;
    var email = document.forms['contact-form']['femail_iavim'].value;
    var phone = document.forms['contact-form']['fphone'].value;
    var fpart = document.forms['contact-form']['fpart'].value;
    var fcon = document.forms['contact-form']['fcon'].value;
    
    if (title.length < 5) {
        alertify
            .alert("Vui lòng nhập tiêu đề đầy đủ.", function () {
                alertify.message('Vui lòng nhập tiêu đề dài hơn 5 kí tự');
            });
        return false;
    } else if (name.length < 5) {
        alertify
            .alert("Vui lòng nhập tên đầy đủ.", function () {
                alertify.message('Vui lòng nhập tên dài hơn 5 kí tự');
            });
        return false;
    }else if (!validateEmail(email)) {
        alertify
            .alert("Vui lòng nhập đúng địa chỉ email.", function () {
                alertify.message('Vui lòng nhập đúng địa chỉ email.');
            });
        return false;
    } else if (!validatePhoneNumber(phone)) {
        alertify
            .alert("Vui lòng nhập đúng số điện thoại.", function () {
                alertify.message('Vui lòng nhập đúng số điện thoại.');
            });
        return false;
    }
    else if (fpart == 0) {
        alertify
            .alert("Vui lòng chọn chuyên ngành học.", function () {
                alertify.message('Vui lòng chọn chuyên ngành học.');
            });
        return false;
    } else if (fcon.length < 15) {
        alertify
            .alert("Vui lòng nhập nội dung đầy đủ.", function () {
                alertify.message('Vui lòng nhập nội dung dài hơn 15 kí tự');
            });
        return false;
    }


}