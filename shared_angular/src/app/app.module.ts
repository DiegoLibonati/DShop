import { ApplicationRef, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "@src/app/components/composed/headers/header/header.component";
import { AppTestComponent } from "@src/app/components/composed/app-test/app-test.component";
import { ReviewCustomerComponent } from "@src/app/components/composed/reviews/review-customer/review-customer.component";
import { NotificationBarComponent } from "@src/app/components/composed/notifications/notification-bar/notification-bar.component";

import { FormSearchComponent } from "@src/app/components/core/forms/form-search/form-search.component";
import { RateStarsComponent } from "@src/app/components/core/ratings/rate-stars/rate-stars.component";
import { SvgSearchComponent } from "@src/app/components/core/svgs/svg-search/svg-search.component";
import { SvgCartShoppingComponent } from "@src/app/components/core/svgs/svg-cart-shopping/svg-cart-shopping.component";
import { SvgHamburgerMenuComponent } from "@src/app/components/core/svgs/svg-hamburger-menu/svg-hamburger-menu.component";
import { SvgChevronDownComponent } from "@src/app/components/core/svgs/svg-chevron-down/svg-chevron-down.component";
import { SvgChevronUpComponent } from "@src/app/components/core/svgs/svg-chevron-up/svg-chevron-up.component";
import { SvgCloseComponent } from "./components/core/svgs/svg-close/svg-close.component";

@NgModule({
  declarations: [
    HeaderComponent,
    AppTestComponent,
    ReviewCustomerComponent,
    NotificationBarComponent,
    SvgSearchComponent,
    SvgCartShoppingComponent,
    SvgHamburgerMenuComponent,
    SvgChevronDownComponent,
    SvgChevronUpComponent,
    SvgCloseComponent,
    RateStarsComponent,
    FormSearchComponent,
  ],
  imports: [BrowserModule],
  exports: [
    HeaderComponent,
    AppTestComponent,
    ReviewCustomerComponent,
    NotificationBarComponent,
    SvgSearchComponent,
    SvgCartShoppingComponent,
    SvgHamburgerMenuComponent,
    SvgChevronDownComponent,
    SvgChevronUpComponent,
    SvgCloseComponent,
    RateStarsComponent,
    FormSearchComponent,
  ],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    // No hace nada: Angular no bootstrapea ningún componente automáticamente.
    // Los componentes se montan manualmente desde mountComponent().
  }
}
