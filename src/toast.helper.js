import $ from 'jquery';
import {
  Toast
} from 'bootstrap';

const toastr = new Toast($('.toast'), {
  delay: 1000
});
toastr.show();