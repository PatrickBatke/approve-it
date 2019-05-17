import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

import { ProjectDataService } from 'src/app/project-data.service';
import { Project } from 'src/app/project';


@Component({
  selector: 'app-commenter',
  templateUrl: './commenter.component.html',
  styleUrls: ['./commenter.component.css']
})
export class CommenterComponent implements OnInit, AfterViewInit {


  id: any;
  file_url: string = environment.apiUrl + '/api/project-data/files/';
  comments: {};
  comment: string;
  commentadded: boolean = false;
  commenttosend: { project_id: string, comment: string };

  constructor(private projectDataService: ProjectDataService, public sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute) {
    this.commenttosend = { project_id: "", comment: "" };
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.file_url = this.file_url + this.id;

    this.projectDataService.getCommentsForProject(this.id).subscribe((data: any) => {

      

      data.forEach(element => {
        setTimeout(() => {
          if (element.project_id == this.id) {
            var d = document.createElement("input");
            d.style.position = "absolute";
            d.style.left = element.xpos - 100 + 'px';
            d.style.top = element.ypos + 'px';
            d.className = 'form-control';
            d.id = "comment-input";
            d.name = 'comment';
            d.placeholder = "...";
            d.type = 'text';
            d.style.width = "150px";
            d.value = element.comment;      
            
            var btn = document.createElement("button");
            btn.innerHTML = "<i class='fa fa-trash-o'></i>";
            btn.style.position = "absolute";
            btn.style.left = element.xpos +70 + 'px';
            btn.style.top = element.ypos + 'px';
            btn.id = "delcomment";     
          
            $('#canv').append(d);
            $('#canv').append(btn);
          }
        }, 1000);


        
      });
    });

    
    


    /*     this.comments.forEach(element => {
          console.log(element);
        }); */


  }


  
  ngAfterViewInit() {
    $(document).ready(function() {
      //$('.canvasWrapper');
    });
    
  }

  addcomment() {
    this.commentadded = true;
    var id = this.id;
    if (this.commentadded === true) {
      document.body.style.cursor = "crosshair";


      $('#canv').on('click', function (e) { //Offset mouse Position
        var posX = $(this).offset().left,
          posY = $(this).offset().top;

        var d = document.createElement("input");
        d.style.position = "absolute";
        d.style.left = (e.pageX - posX + 150) + 'px';
        d.style.top = (e.pageY - posY + 150) + 'px';
        d.className = 'form-control';
        d.id = "comment-input";
        d.name = 'comment';
        d.placeholder = "...";
        d.type = 'text';
        d.style.width = "150px";
        $('#canv').append(d);

        var btn = document.createElement("button");
        btn.innerHTML = "<i class='fas fa-save'></i>";
        btn.style.position = "absolute";
        btn.style.left = ((e.pageX - posX) + 320) + 'px';
        btn.style.top = (e.pageY - posY + 150) + 'px';
        btn.id = "addcomment";


        var commenttosend = { project_id: "", comment: "", xpos: 0, ypos: 0 };

        btn.onclick = function () {
          commenttosend.project_id = id;
          commenttosend.comment = $("#comment-input").val().toString();
          commenttosend.xpos = (e.pageX - posX + 150);
          commenttosend.ypos = (e.pageY - posY + 150);
          $.ajax({
            type: 'POST',
            url: environment.apiUrl + '/api/commenter/create-comment',
            data: commenttosend,
            success: function () {
            }
          });
          $("#addcomment").remove();
          alert("Comment was succesfully inserted to the Database");
        }
        $('#canv').append(btn);
        document.getElementById('comment-input').onclick = function () {
          $('#canv').append(btn);
        };
        document.body.style.cursor = "default";

        $('#canv').off('click');
      });

    } else {
      $('#canv').click(function (e) {
        console.log("not");

      });
    }



    /*    this.commentadded = true;
       this.comments.push(this.comment); 
       this.commenttosend.project_id = this.id;
       this.commenttosend.comment = this.comment;
       this.projectDataService.createComment(this.commenttosend).subscribe(result => {
         console.log(result);
         this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => this.comments = data);
       },
         error => {
           console.log("Comment could not be created");
         }
       );
       this.comment = "";
       this.comments = []; */

  }

  /*   sendcomment() {
      this.commenttosend.project_id = this.id;
      this.commenttosend.comment = document.getElementById('addcomment').innerHTML;
      this.projectDataService.createComment(this.commenttosend).subscribe(result => {
        console.log(result);
        this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => this.comments = data);
      },
        error => {
          console.log("Comment could not be created");
        }
      );
      this.commenttosend.project_id = '';
      this.commenttosend.comment = '';
    } */

  deletecomment($id) {
    this.projectDataService.deleteComment($id).subscribe(result => {
      console.log(result);
      this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => this.comments = data);
    },
      error => {
        console.log("Comment could not be deleted");
      }
    );
  }

}
