import './sass/style1.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
 $(document).ready(function () {
    $(function () {
        $("body").tooltip({ selector: '[data-toggle=tooltip]', placement: 'bottom' });

        $('.add-to-cart-btn').click(function () {
            alert('اضيف المنتج الى عربة الشراء');
        });
        $('#copyright').text("جميع الحقوق محفوظة للمتجر لسنة" + new Date().getFullYear());
        $('.product-option input[type="radio"]').change(function () {
            $(this).parents('.product-option').siblings().removeClass('active');
            $(this).parents('.product-option').addClass('active');
        });
       
        
        

    });
    
});