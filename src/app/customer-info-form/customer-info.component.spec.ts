import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerServiceComponent } from "./customer-info.component";

describe('CustomerServiceComponent', () => {
    let component: CustomerServiceComponent;
    let fixture: ComponentFixture<CustomerServiceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CustomerServiceComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});