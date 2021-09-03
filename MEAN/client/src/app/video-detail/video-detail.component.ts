import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit {

  @Input() video
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();

  editTitle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }

}
