import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // you can have jquery on init, it is messy but doable
    $(document).ready(function() {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
          } else {
            $('#back-to-top').fadeOut();
          }
      });
      $('#back-to-top').click(function () {
          $('body,html').animate({ scrollTop: 0 }, 3400);
          return false;
      });
      $('.or-scroll-down').css('opacity', 0).delay(1500).animate({opacity: 1.0});
    });
  }

}
