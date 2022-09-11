import { Component } from '@angular/core';
import studentsData from './students.json';
import 'datatables.net-dt'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  students: any;
  student: any;
  studentData: any = [];
  dtOptions: DataTables.Settings = {};
  filterOption: any;
  selectedDevice: any;
  selectedDemo: any;
  selectedAssign: any;
  allItems: any;
  constructor() {

    this.students = studentsData
    this.selectedDemo = "Demo";
    this.selectedAssign = "teams";
    this.selectedDevice = "all";
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full',
      pageLength: 10,
      processing: true,

    };
    this.students = studentsData
    this.filterOption = new Set(studentsData.map(v => v.status))
    console.log(this.filterOption)

  }

  onChange() {
    console.log(this.selectedDevice);
    if (this.selectedDevice !== "all") {
      var stud = studentsData.filter(t => t.status === this.selectedDevice);
      console.log("value of filter", stud)
      this.students = stud;
    }
    else {
      this.students = studentsData;
      console.log("data", this.selectedDevice, this.students);
    }
  }
  onChangeAssign() {
    console.log(this.selectedAssign);
    if (this.selectedAssign === "teams") {
      var stud = studentsData.filter(t => t.status === this.selectedDevice);
      console.log("value of filter", stud)
      this.students = stud;
    }
    else
      (this.selectedAssign === "others")
    {
      var stud = studentsData.filter(t => t.assigned === this.selectedAssign);
      console.log("value of filter", stud)
      this.students = stud;
    }
  }
  onChangeDemo() {
    console.log(this.selectedDemo);
    if (this.selectedDemo === "Demo") {
      var stud = studentsData.filter(t => t.project === this.selectedDemo);
      console.log("value of filter", stud)
      this.students = stud;
    }
    else
      (this.selectedDemo === "live")
    {
      var stud = studentsData.filter(t => t.project === this.selectedDemo);
      console.log("value of filter", stud)
      this.students = stud;
    }
  }
}
