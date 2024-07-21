import { Component } from "@angular/core";
import { IonicSlides, NavController } from "@ionic/angular";
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
  protected username: string | null = "";
  constructor(private navCtrl: NavController) {
    localStorage.setItem("name", "123");
  }
  ngOnInit() {
    console.log("XXX", environment.host);
    this.username = localStorage.getItem("username");
    console.log("GET:STORRAGE:username:1", { val: this.username });
    // const x = localStorage.getItem("redirect");
    // console.log("GET:STORRAGE:APPCOMPO:1", { val: x });
    // this.navCtrl.navigateRoot("folder/inbox");
  }
}
