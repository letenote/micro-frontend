import { Component } from "@angular/core";
import { IonicSlides } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { register } from "swiper/element/bundle";

register();
@Component({
  selector: "home-page",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  swiperModules = [IonicSlides];
  protected env = environment;
  ngOnInit() {
    console.log("XXX", environment.host);
  }
}
