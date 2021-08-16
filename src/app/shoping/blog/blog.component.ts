import { Blog } from './blog-in';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blog:Blog, private router:Router) { }

  blogList = [];
  blogList2 = [];


  ngOnInit(): void {
    this.blogList = this.blog.BlogItems;
    this.blogList2 = this.blog.BlogItems2;
  }


}
