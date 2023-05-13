import { NgModule } from "@angular/core";
import { CounterComponent } from "./modules/counter/counter.component";


@NgModule({
    declarations: [CounterComponent],
    exports: [CounterComponent]
})
export class counterModules{

}