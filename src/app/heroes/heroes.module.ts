import { NgModule } from "@angular/core";
import { HeroComponent } from "./modules/hero/hero.component";
import { ListComponent } from "./modules/list/list.component";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [HeroComponent, ListComponent],
    exports: [HeroComponent, ListComponent],
    imports: [BrowserModule]
})
export class HeroesModules{

}