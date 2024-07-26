import { Component } from "@angular/core";
import { RoutesProvider } from "./provider/RoutesProvider";
import MenuSidebarInterface from "./sidebar/sidebar.interrface";
import DummySidebarMenu from "./sidebar/sidebar.dummy";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  sidebarMenu: Array<MenuSidebarInterface> = DummySidebarMenu;
  constructor(private routesProvider: RoutesProvider) {}

  async ngOnInit() {
    console.log("DEBUG:ROUTES:BEFORE", this.routesProvider.getRoutes());
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await this.routesProvider.setRoutes({
      data: [
        {
          path: "home",
          loadChildren: () =>
            import("./home/home.module").then((m) => m["HomePageModule"]),
        },
      ],
    });

    await this.updateSidebar({
      data: { title: "Home", url: "/home", icon: "warning", child: [] },
    });
    console.log("DEBUG:ROUTES:AFTER", this.routesProvider.getRoutes());
  }

  async updateSidebar({
    data,
  }: {
    data: MenuSidebarInterface;
  }): Promise<{ message: string }> {
    this.sidebarMenu.push(data);
    return Promise.resolve({ message: "_SUCCESS" });
  }
}
