import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

import { data } from '../../data'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  programData : any = data.programDataObject
  listData = data;

  Progress = {
    initialSlide: 0,
    slidesPerView: 3,
    navigation: true,
    scrollbar: true,
  };
  
  
  NavAndPaginatoion = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  submitted = false;

  _albums: Array<any> = [];




  constructor(private modalService: NgbModal,
    private router : Router,
    private lightbox: Lightbox) { }

  ngOnInit(): void {

    console.log(this.programData.team)
    this.getGallery()
  }

  getGallery() {
    for (let i = 1; i <= 6; i++) {
      const src = '/assets/images/small/image-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const album = {
         src: src,
         caption: caption,
      };

      this._albums.push(album);
    }

  }

  navigateBack() {
    this.router.navigateByUrl('/ec-setup')
  }

  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }



  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
