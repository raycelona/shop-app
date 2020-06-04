import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ListComponent } from '../list/list.component';
import { ShoppingListEditComponent } from '../list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
    declarations: [
        ListComponent,
        ShoppingListEditComponent
    ],
    imports: [CommonModule, FormsModule],
})

export class ListModule {}