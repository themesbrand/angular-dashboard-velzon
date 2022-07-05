import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

import { data } from '../data'

@Component({
  selector: 'app-view-programs-two',
  templateUrl: './view-programs-two.component.html',
  styleUrls: ['./view-programs-two.component.scss']
})
export class ViewProgramsTwoComponent implements OnInit {

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
  breadCrumbItems!: Array<{}>;

  _albums: Array<any> = [];


  selectedCommittee : {
    name : any, data: any
  } = {
    name: undefined,
    data: undefined
  };

  constructor(private modalService: NgbModal,
    private router : Router,
    private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "EC Setup", link: '/ec-setup'},
      { label: "View Program", active : true }
    ];
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

  onSelectCommittee(committee : any) {
    this.selectedCommittee.name = committee
    if(committee === 'Education Committee') {
      this.selectedCommittee.data = this.listData.teamObject.educationCommittee
    }
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
