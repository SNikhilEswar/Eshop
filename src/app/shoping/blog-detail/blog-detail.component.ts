import { ActivatedRoute, Params } from '@angular/router';
import { Blog } from './../blog/blog-in';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {


  blogList = [];
  seletedItems;
  id;

  constructor(private blog:Blog, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.blogList = this.blog.BlogItems;
    this.route.params.subscribe((parms: Params) => {
      this.id = parms['id'];
      this.seletedItems = this.blog.BlogItems[this.id -1];
      console.log(this.id);
      console.log(this.seletedItems)
    })
  }

}
