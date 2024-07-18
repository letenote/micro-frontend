import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "button-ng",
  templateUrl: "./button-ng.component.html",
  styleUrls: ["./button-ng.component.scss"],
  standalone: true,
  imports: [IonicModule],
})
export class ButtonNgComponent {
  title = "left-sidebar";

  onClickHandler() {
    console.log("Clicked from ionic-angular");
  }
}