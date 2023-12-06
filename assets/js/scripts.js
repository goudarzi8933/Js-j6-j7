 
//  *********** modal 1 ***************
 let showModal = function () {
            document.getElementById('modal').style.display = 'block';
        }
        let hideModal = function () {
            document.getElementById('modal').style.display = 'none';
            document.getElementsByClassName('btnclose').style.backgroundColor = 'transparent';
        }

        let fullName = document.getElementById('name');
        let password = document.getElementById('password');
        let confrim = document.getElementById('confrim');

        let register = document.getElementById('register');

        register.addEventListener('click', validation);

        function validation() {
            if (fullName.value.length < 6) {
                alert('نام و نام خانوادگی حداقل باید 6 حروف باشد');
                return false;
            }
            if (password.value.length < 8) {
                alert('گذرواژه حداقل باید 6 حروف باشد');
                return false;
            }
            if (password.value != confrim.value) {
                alert('گذرواژه های وارد شده همخوانی نداند');
                return false;
            }
            alert('ثبت نام شما با موفقیت انجام شد');
        }

        // ************** modal 2 *******************

        
        let showModalSec = function () {
            document.getElementById('modal').style.display = 'block';
        }
        let hideModalSec = function () {
            document.getElementById('modal').style.display = 'none';
            document.getElementsByClassName('btnclose').style.backgroundColor = 'transparent';
        }

        function eventHandler() {
            let fname = document.getElementById('fname').value;
            if (fname.length <= 6) {
                document.getElementById('fnameError').style.display = 'inline';
            } else {
                document.getElementById('fnameError').style.display = 'none';
            }
        }

        function highlightInput() {
            let password = document.getElementById('password').value;
            document.getElementById('password').style.background = "#333";
        }

        // ********** mouse *************
         function mouseenter() {
                document.getElementById("imgchange").src = 'assets/img/Screenshot (239).png'
            }
            function mouseleave() {
                document.getElementById("imgchange").src = 'assets/img/Screenshot (248).png'
            }

