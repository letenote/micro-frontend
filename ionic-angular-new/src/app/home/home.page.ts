import { Component } from "@angular/core";
import { IonicSlides } from "@ionic/angular";
import { register } from "swiper/element/bundle";

register();
@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  swiperModules = [IonicSlides];
  ngOnInit() {}
}
