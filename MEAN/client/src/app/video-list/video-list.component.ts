import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../shared/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {

  @Input() videos
  @Output() SelectVideo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
