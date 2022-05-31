import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/Actor';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  constructor(private service: AdminService,private router: Router) { }

  num:number=0;
  actor:Actor=null!;
  actors:Actor[]=null!;

  ngOnInit(): void {
    this.num = 0;
    this.actor = {
      id: 0,
      actorPicture: '',
      actorName: ''
    }
    this.actors = [];
    this.getActors();
  }

  AddActor() {
    this.router.navigate(['addactor']);
  }

  EditActor(id: number) {
    if (id) {
      this.router.navigate(['/editactor', id]);
    }
  }

  IsDelete() {
    var checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(":checked")) {
          return true;
        }
      }
    }
    return false;
  }

  DeleteConfirm() {
    var checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
       let ids=[""];
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(":checked")) {
          let id = $(checkboxes[i]).val()?.toString();
          ids.push(id!);
        }
      }

      this.service.DeleteAllActors(ids).subscribe(s => {
        this.getActors();
        $("#btnClose").trigger("click");
      });
    }
  }

  getActors() {
    this.service.GetAllActors().subscribe(list => {
      this.actors = list;
    })
  }

  SelectAll() {
    var tbl = $('#tbl');
    var header = tbl.find('thead .ckheader');
    var item = tbl.find('tbody .ckitem');

    $(function () {
      item.on('change', function () {
        if ($(this).is(':checked')) {
          $(this).closest('tr').addClass('NewRowColor');
        }
        else {
          $(this).closest('tr').removeClass('NewRowColor');
        }
      });

      header.on('change',function () {
        var c = this;
        item.prop("checked", c);
        item.trigger('check');
        if ($(this).is(':checked')) {
          $(item).closest('tr').addClass('NewRowColor');
        }
        else {
          $(item).closest('tr').removeClass('NewRowColor');
        }
      });
    });
  }

  DeleteCount() {
    var count = $(".ckitem:checked").length;
    this.num = count;
  }

}
