function tat() {
    document.getElementById('thong').innerHTML = null;
    document.getElementById('thong').style.backgroundColor = 'white';
}
var thu = true;
window.addEventListener("scroll", function () {
    var nav = document.getElementById('nav');
    if (thu == true) {
        setTimeout(() => {
            var trong = `
            <div class="contact">
                <div class="thongbao">
                    <div class="title">Chút gì cùng Giêsu</div>
                    <label class="nhap">Nhập tài khoản</label>
                    <input type="text" required name="" id="user" placeholder="Nhập tài khoản">
                    <br>
                    <label class="nhap">Nhập mật khẩu</label>
                    <input type="password" required name="" id="mk" placeholder="Nhập mật khẩu">
                    <br>
                    <button class="buton" type="button">Đăng nhập</button>
                    <hr>
                    <button class="buton" type="button">Đăng kí</button>
                    <button class="tatdi" type="button" onclick="tat()">x</button>
                </div>
            </div>`;
            document.getElementById('thong').innerHTML = trong;
            document.getElementById('thong').style.zIndex = '1';
        }, 3000);
        thu = false;
    }
});