import { ApplicationRef, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "@src/app/components/headers/header/header.component";
import { AppTestComponent } from "@src/app/components/app-test/app-test.component";
import { ButtonWhiteComponent } from "@src/app/components/buttons/button-white/button-white.component";
import { ReviewCustomerComponent } from "@src/app/components/reviews/review-customer/review-customer.component";

import { RateStarsComponent } from "@src/app/components/ratings/rate-stars/rate-stars.component";
import { SvgSearchComponent } from "@src/app/components/svgs/svg-search/svg-search.component";
import { SvgCartShoppingComponent } from "@src/app/components/svgs/svg-cart-shopping/svg-cart-shopping.component";
import { SvgHamburgerMenuComponent } from "@src/app/components/svgs/svg-hamburger-menu/svg-hamburger-menu.component";
import { SvgChevronDownComponent } from "@src/app/components/svgs/svg-chevron-down/svg-chevron-down.component";
import { SvgChevronUpComponent } from "@src/app/components/svgs/svg-chevron-up/svg-chevron-up.component";

@NgModule({
  declarations: [
    HeaderComponent,
    AppTestComponent,
    ButtonWhiteComponent,
    ReviewCustomerComponent,
    SvgSearchComponent,
    SvgCartShoppingComponent,
    SvgHamburgerMenuComponent,
    SvgChevronDownComponent,
    SvgChevronUpComponent,
    RateStarsComponent,
  ],
  imports: [BrowserModule],
  exports: [
    HeaderComponent,
    AppTestComponent,
    ButtonWhiteComponent,
    ReviewCustomerComponent,
    SvgSearchComponent,
    SvgCartShoppingComponent,
    SvgHamburgerMenuComponent,
    SvgChevronDownComponent,
    SvgChevronUpComponent,
    RateStarsComponent,
  ],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    // No hace nada: Angular no bootstrapea ningún componente automáticamente.
    // Los componentes se montan manualmente desde mountComponent().
  }
}
