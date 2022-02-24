import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<ul>
				<li *ngFor="let item of childListChecked">{{item}}</li>
			  </ul>`
})
export class ItemComponent{ 
	@Input() childListChecked: string[] = [];
}