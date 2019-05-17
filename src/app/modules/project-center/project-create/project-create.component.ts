import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectDataService } from 'src/app/project-data.service';
import { Type } from 'src/app/type';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})

export class ProjectCreateComponent implements OnInit {

  types: any;
  id: string;
  newProject: any;
  imgurl: any;
  tags: any;
  newtypename: any;
  picturename: any;
  placeholder_for_dropdown: any;
  fieldreq: string = "Dieses Feld ist notwendig.";
  mtitle: boolean = false;
  minit: boolean = false;
  mend: boolean = false;
  mmanager: boolean = false;
  mtype: boolean = false;
  mmessage: boolean = false;
  filesToUpload: Array<File> = [];

  constructor(private projectDataService: ProjectDataService, private router: Router) {
    this.tags = new Array();
    this.newProject = { tags: {} };
  }

  ngOnInit() {
    this.projectDataService.getTypes().subscribe((data: Type) => this.types = data);
  }

  createProject() {
    /* Rote Farbe für Labels */
    if (this.newProject.title === undefined || this.newProject.title === "") { this.mtitle = true; } else { this.mtitle = false }
    if (this.newProject.init_date === undefined || this.newProject.init_date === "") { this.minit = true; } else { this.minit = false }
    if (this.newProject.end_date === undefined || this.newProject.end_date === "") { this.mend = true; } else { this.mend = false }
    if (this.newProject.manager === undefined || this.newProject.manager === "") { this.mmanager = true; } else { this.mmanager = false }
    if (this.newProject.type_id === undefined || this.newProject.type_id === "") { this.mtype = true; } else { this.mtype = false }

    if (this.newProject.title != undefined && this.newProject.init_date != undefined && this.newProject.end_date != undefined
      && this.newProject.manager != undefined && this.newProject.type_id != undefined && this.newProject.init_date != ""
      && this.newProject.end_date != "" && this.newProject.manager != "" && this.newProject.type_id != "" && this.newProject.title != "") {
      this.mmessage = false;
      // Tags-Logik
      if ($('.bootstrap-tagsinput').find('.label-info').length !== 0) {

        this.tags = new Array();
        let temporaryTags = this.tags;

        $('.bootstrap-tagsinput .label-info').each(function () {
          temporaryTags.push($(this).text());
        });

        var fields = {};

        for (var i = 0; i < this.tags.length; i++) {

          var tag = this.tags[i];
          if (tag) {
            fields[i] = tag;
          }
        }
        this.newProject.tags = fields;
      }
      // Bestehender Typ oder neuer Typ

      if (this.newProject.type_id === "---Neuen Projekt-Typen anlegen---") {
        this.newtypename = (this.newtypename.substring(0, 1).toUpperCase() + this.newtypename.substring(1, this.newtypename.length).toLowerCase());
        for (let type of this.types) {
          if (type.name === this.newtypename) {
            this.newProject.type_id = type.id;
            break;
          } else {
            this.newProject.type_id = 2000000000; //2 Millarden --> Typ ist noch nicht vorhanden, Laravel weis --> neuen Typen anlegen
            this.newProject.newtype = this.newtypename;
          }
        }
      }
      this.newProject.picture = this.picturename;
      // Projekt absenden
      this.projectDataService.createProject(this.newProject).subscribe(result => {
        console.log(result['Projekt-ID:']);
        this.id = String(result['Projekt-ID:']);
        console.log(this.id);
        // Projekt-Bild uploaden
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUpload;
        console.log(files);
        for (let i = 0; i < files.length; i++) {
          console.log(files[i]);

          formData.append("pic", files[i]);
          formData.append("name", files[i]['name']);
          console.log(this.id);

          formData.append("id", this.id);
        }
        this.projectDataService.uploadPic(formData).subscribe(
          (response) => { console.log(response); },
          error => {
            console.log("Picture could not be uploaded");
          }
        );
       this.router.navigate(['/project/project-single/' + result['Projekt-ID:']]);
      },
        error => {
          console.log("Project could not be created");
        }
      );


    } else {
      console.log("field is missing");
      this.mmessage = true;
    }

  }
  /* 
    uploadFile(event) {
      let elem = event.target;
  
      if (elem.files.length > 0) {
        this.formData.append('pic', elem.files[0]);
        this.formData.append('name', elem.files[0].name);
        this.picturename = elem.files[0].name;
        console.log();
      }
    } */

  uploadFile(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  closetype() {
    this.newProject.type_id = "";
  }
  deletepic() {
    this.newProject.type_id = "";
  }

}
