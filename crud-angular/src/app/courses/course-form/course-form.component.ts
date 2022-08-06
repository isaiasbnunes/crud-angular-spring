import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
    ) {
    this.form = this.formBuider.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(),
     error => {
      this.onError();
    });
  }

  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso!', ' ', {duration: 3000} );
    this.location.back();
  }

  onCancel(){
     this.location.back();
  }

  private onError(){
    this.snackBar.open( ' Error ao tentar salvar ', ' ', {duration: 3000} );
  }

  ngOnInit(): void {
  }

}
