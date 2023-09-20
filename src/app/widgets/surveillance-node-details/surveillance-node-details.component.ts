import {Input, Component, OnInit} from '@angular/core';
import {NgForOf, DatePipe, NgIf} from "@angular/common";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";



@Component({
  standalone: true,
  selector: 'node-details',
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label nzRequired [nzSm]="6" [nzXs]="15">Product ID</nz-form-label>
        <nz-form-control nzErrorTip="ID" [nzSm]="20" [nzXs]="30">
          <nz-input-group nzPrefixIcon="idcard">
            <input formControlName="id" nz-input [value]="node.id" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzRequired [nzSm]="6" [nzXs]="15">Product Name</nz-form-label>
        <nz-form-control nzErrorTip="Name" [nzSm]="20" [nzXs]="30">
          <nz-input-group nzPrefixIcon="user">
            <input formControlName="name" nz-input [value]="node.name" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzRequired [nzSm]="6" [nzXs]="15">Date Created</nz-form-label>
        <nz-form-control nzErrorTip="DateCreated">
          <nz-form-control [nzSm]="20" [nzXs]="30">
            <nz-date-picker nzShowTime formControlName="dateCreated"></nz-date-picker>
          </nz-form-control>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzRequired [nzSm]="6" [nzXs]="15">Date Updated</nz-form-label>
        <nz-form-control [nzSm]="20" [nzXs]="30">
          <nz-date-picker nzShowTime formControlName="dateUpdated"></nz-date-picker>
        </nz-form-control>
      </nz-form-item>
    </form>

    <nz-list class="demo-loadmore-list" [nzLoading]="initLoading">
      <nz-list-item *ngFor="let partner of node.partners">
        <ng-container *ngIf="partner">
          <nz-list-item-meta nzAvatar="../../../assets/bullet-point.png" nzDescription={{partner.to_person_id.name}}>
            <nz-list-item-meta-title>
              <a>{{partner.to_person_id.name}}</a>
            </nz-list-item-meta-title>
          </nz-list-item-meta>
          Coverage: {{ partner.angle_start }}&deg;C to {{ partner.angle_end }}&deg;C
          <ul nz-list-item-actions>
            <nz-list-item-action>
              <button nz-button (click)="delete(partner)" nzType="link">
                <span nz-icon nzType="edit"></span>
              </button>
            </nz-list-item-action>
            <nz-list-item-action>
              <button nz-button (click)="delete(partner)" nzType="link">
                <span nz-icon nzType="delete"></span>
              </button>
            </nz-list-item-action>
          </ul>
        </ng-container>
        <nz-skeleton
          *ngIf="!partner"
          [nzAvatar]="true"
          [nzActive]="true"
          [nzTitle]="false"
          [nzLoading]="true"
        ></nz-skeleton>
      </nz-list-item>
      <!--Load More button implementation (below)-->
      <!--<div class="loadmore" nz-list-load-more>
        <button nz-button *ngIf="!loadingMore" (click)="onLoadMore()">loading more</button>
      </div>-->
    </nz-list>
  `,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzDatePickerModule,
    NzListModule,
    DatePipe,
    NzSkeletonModule,
    NgIf,
    NzButtonModule,
    NzIconModule
  ],
  styles: []
})

export class SurveillanceNodeDetailsComponent implements OnInit {
  @Input() node = {} as any
  validateForm!: UntypedFormGroup;
  initLoading = false;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: UntypedFormBuilder) {}


  edit(item: any) {

  }

  delete(item: any) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [this.node.id, [Validators.required]],
      name: [this.node.name, [Validators.required]],
      dateCreated: [new Date(this.node.date_created * 1000), [Validators.required]],
      dateUpdated: [new Date(this.node.date_updated * 1000), [Validators.required]],
    });
  }
}
