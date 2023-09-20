import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEdgeComponent } from './delete-edge.component';

describe('DeleteEdgeComponent', () => {
  let component: DeleteEdgeComponent;
  let fixture: ComponentFixture<DeleteEdgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEdgeComponent]
    });
    fixture = TestBed.createComponent(DeleteEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
