var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
let GlobalService = class GlobalService {
    constructor() {
        this.previousStateSubject = new Subject();
        this.existPreviousState = this.previousStateSubject.asObservable();
    }
    updateState(states) {
        if (states && states.length > 1) {
            this.previousState = states[0];
            this.previousStateSubject.next(states[0]);
        }
    }
};
GlobalService = __decorate([
    Injectable()
], GlobalService);
export { GlobalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUdyQyxJQUFhLGFBQWEsR0FBMUI7SUFEQTtRQUVZLHlCQUFvQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFJOUMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBUXpFLENBQUM7SUFOVSxXQUFXLENBQUMsTUFBTTtRQUNyQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBYlksYUFBYTtJQUR6QixVQUFVLEVBQUU7R0FDQSxhQUFhLENBYXpCO1NBYlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7TmF2aWdhdGlvbkVuZH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcHJldmlvdXNTdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7XHJcblxyXG4gICAgcHVibGljIHByZXZpb3VzU3RhdGU6TmF2aWdhdGlvbkVuZDtcclxuXHJcbiAgICBwdWJsaWMgZXhpc3RQcmV2aW91c1N0YXRlID0gdGhpcy5wcmV2aW91c1N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTsvLy5zdWJzY3JpYmU7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVN0YXRlKHN0YXRlcykge1xyXG4gICAgICAgIGlmIChzdGF0ZXMgJiYgc3RhdGVzLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBzdGF0ZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZVN1YmplY3QubmV4dChzdGF0ZXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==