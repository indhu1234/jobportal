package com.niit.dao;

import java.util.List;

import com.niit.model.BlogComment;
import com.niit.model.BlogPost;

public interface BlogPostDao {
	
	/*
	void addBlogPost(BlogPost blogPost);
	List<BlogPost> getBlogsApproved();
	List<BlogPost> getBlogsWaitingForApproval();
	List<BlogPost> getBlogs();
	BlogPost getBlog(int blogPostId);
	void approveBlogPost(BlogPost blogPost);
	void rejectBlogPost(BlogPost blogPost);

	*/
	/*
	
	
	 void addBlogPost(BlogPost blogPost);
	List<BlogPost> getBlogs(boolean approved);
	BlogPost getBlogById(int id);
	void hasUserLikedBlogPost(int id);
	void updateLikes(int id);
	void blogApproved(int id);
	void blogRejected(int id,String rejectionReason);
	void addBlogComment(BlogComment blogComment);
	List<BlogComment> getAllBlogComments(int blogPostId);  
	*/
	
	void addBlogPost(BlogPost blogPost);
	List<BlogPost> getBlogsApproved();
	List<BlogPost> getBlogsWaitingForApproval();
	BlogPost getBlog(int blogPostId);
	void approveBlogPost(BlogPost blogPost);
	void rejectBlogPost(BlogPost blogPost);

}
