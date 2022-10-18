import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  acceptedFileExtensions:any
  
  constructor() { }

  ngOnInit(): void {
  }
  myUploader(event: any)  {
    console.log(event.target.file)
    const formData = new FormData();
    formData.append('file', event.target.file[0]);
    
  }
      
        
};
    
  









// uploading(){
  //   console.log('attaching')
  //  } 