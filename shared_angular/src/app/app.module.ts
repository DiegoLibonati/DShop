import { ApplicationRef, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "@src/app/components/header/header.component";
import { AppTestComponent } from "@src/app/components/app-test/app-test.component";

@NgModule({
  declarations: [HeaderComponent, AppTestComponent],
  imports: [BrowserModule],
  exports: [HeaderComponent, AppTestComponent],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    // No hace nada: Angular no bootstrapea ningún componente automáticamente.
    // Los componentes se montan manualmente desde mountComponent().
  }
}
