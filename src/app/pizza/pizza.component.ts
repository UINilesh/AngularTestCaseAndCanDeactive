import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PostService } from "../shared/post.service";
@Component({
  selector: "pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  title = "I love pizza!";
  textdata: boolean = false;
  postsArray = [];
  constructor(private postservice: PostService) {}

  getPosts(): void {
    this.postservice.getPosts().subscribe(
      (resultArray) => (this.postsArray = resultArray),
      (error) => console.log("Error :: " + error)
    );
  }

  ngOnInit() {
    this.getPosts();
  }

  showdata() {
    this.textdata = !this.textdata;
  }

  outputtext: string = "This is content Test";
  
}
