import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  url='';
  constructor(){}

  ngOnInit()
  {
    
  }

  onselect(e:any)
  {
    if(e.target.files)
    {
      // show image in image box at updated time
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }

      // save image on server side (in api)
      const file =e.target.files[0];
      let formdata=new FormData();
      formdata.append('file',file);
    }
  }
}
