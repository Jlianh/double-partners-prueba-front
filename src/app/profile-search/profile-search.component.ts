import { Component } from '@angular/core';
import { GifServicesService } from './services/profile-search-services.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './profile-search.component.html',
})
export class ProfileSearchComponent {

  filteredProfiles: any[] = []

  constructor(private profileService: GifServicesService){

  }

  searchProfileByName(event: any){
    this.profileService.searchGif(event.target.value).subscribe((data: any)=>{
      this.filteredProfiles = data.items;
    })
  }

}
