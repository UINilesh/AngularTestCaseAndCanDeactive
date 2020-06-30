import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { DirtyCheckGuard } from '../guards/dirty-check.guard'
import { GuardsCheckEnd } from '@angular/router';

describe('DirtyCheckGuard', () => {
    let registerFormComponent: RegisterFormComponent;
    let service: DirtyCheckGuard;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          DirtyCheckGuard,
          RegisterFormComponent
        ],
        imports: [ReactiveFormsModule,FormsModule],
      });
      
    });
  
    it('expect service to instantiate', () => {
      expect(GuardsCheckEnd).toBeTruthy();
    });
  
    // more tests
  });