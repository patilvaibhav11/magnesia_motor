const urlParms = new URLSearchParams(window.location.search);
console.log(urlParms);
const blogId = urlParms.get("id");
console.log(blogId);

const blogData = {
  c4ca4238a0b923820dcc509a6f75849b : `<div class="col-md-8 col-sm-7"> 
    <!-- single-blog start -->
    <article class="blog-post-wrapper">
      <div class="blog-banner"> <a href="javascript:void(0)" class="blog-images"> <img src="images/blog1.jpg" alt=""> </a>
        <div class="blog-content">
          <div class="blog-meta"> <span class="date-type"> 19 july, 2017 </span> <span class="comments-type"> <i class="fa fa-comment-o"></i> 13 </span> </div>
          <a href="javascript:void(0)">
          <h4>The standard chunk of Lorem Ipsum used since</h4>
          </a>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <blockquote>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          </blockquote>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
      </div>
    </article>
    <div class="clear"></div>
    <div class="single-post-comments">
      <div class="comment-respond">
        <h3 class="comment-reply-title">Leave a Reply </h3>
        <span class="email-notes">Your email address will not be published. Required fields are marked *</span>
        <form action="javascript:void(0)">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <p>Name *</p>
              <input type="text">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <p>Email *</p>
              <input type="email">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <p>Phone</p>
              <input type="text">
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 comment-form-comment">
              <p>Message</p>
              <textarea id="message-box" cols="30" rows="10"></textarea>
              <input class="add-btn contact-btn" value="Post Comment" type="submit">
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- single-blog end --> 
  </div>`,
  c81e728d9d4c2f636f067f89cc14862c : `<div class="col-md-8 col-sm-7"> 
  <!-- single-blog start -->
  <article class="blog-post-wrapper">
    <div class="blog-banner">
      <div class="blog-content">
        <blockquote>
          <p>This Blog is currently not available : Blog 2</p>
        </blockquote>
      </div>
    </div>
  </article>
  <div class="clear"></div>
  <!-- single-blog end --> 
</div>`,
  eccbc87e4b5ce2fe28308fd9f2a7baf3 : `<div class="col-md-8 col-sm-7"> 
  <!-- single-blog start -->
  <article class="blog-post-wrapper">
    <div class="blog-banner">
      <div class="blog-content">
        <blockquote>
          <p>This Blog is currently not available : Blog 3</p>
        </blockquote>
      </div>
    </div>
  </article>
  <div class="clear"></div>
  <!-- single-blog end --> 
</div>`,
  a87ff679a2f3e71d9181a67b7542122c : '4'
};

const blogElement = document.getElementById('blogDetail')
if(blogData[blogId]){
    blogElement.innerHTML = blogData[blogId]
}else{
    blogElement.innerHTML = `<div class="col-md-8 col-sm-7"> 
    <!-- single-blog start -->
    <article class="blog-post-wrapper">
      <div class="blog-banner">
        <div class="blog-content">
          <blockquote>
            <p>This Blog is currently not available</p>
          </blockquote>
        </div>
      </div>
    </article>
    <div class="clear"></div>
    <!-- single-blog end --> 
  </div>`;
}