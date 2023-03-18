import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  // Query list is optional. It make convient to code
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();



  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab=>tab.active
    )

    if(!activeTabs || activeTabs.length===0){
      this.selectTab(this.tabs.first)
    }
  }

  selectTab(tab:TabComponent){
    this.tabs.forEach(tab=> {
      tab.active = false;
    })

    tab.active = true;

    //to prevent default bahavior we returning false
    return false
  }
}
