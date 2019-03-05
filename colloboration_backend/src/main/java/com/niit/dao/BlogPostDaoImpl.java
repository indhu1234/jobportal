package com.niit.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.BlogComment;
import com.niit.model.BlogPost;
import com.niit.model.Notification;

@Repository
@Transactional
public class BlogPostDaoImpl implements BlogPostDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	public void addBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.save(blogPost);
		

	}

	public BlogPost getBlog(int blogPostId) {
		Session session=sessionFactory.getCurrentSession();
		BlogPost blogPost=(BlogPost)session.get(BlogPost.class, blogPostId);
		return blogPost;
	}
	
	public List<BlogPost> getBlogsApproved() {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogPost where approved=true");
		List<BlogPost> blogsApproved=query.list();
		return blogsApproved;
	}
	public List<BlogPost> getBlogsWaitingForApproval() {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogPost where approved=false");
		List<BlogPost> blogsWaitingForApproval=query.list();
		return blogsWaitingForApproval;
	}
	
	public void approveBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.update(blogPost);
	}
	public void rejectBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.delete(blogPost);
	}

	/*
	
	public void updateLikes(int id)
	{
		Session session=sessionFactory.getCurrentSession();
		BlogPost blogPost=(BlogPost)session.get(BlogPost.class,id);
		blogPost.setLikes(id);
		session.update(blogPost);
		Notification notification=new Notification();
		notification.setBlogTitle(blogPost.getBlogTitle());
		notification.setEmail(blogPost.getPostedBy().getEmail());
		notification.setApprovalStatus("Approved");
		session.save(notification);

		
	}
	
	/*
	
	public void blogApproved(int id) {
		Session session=sessionFactory.getCurrentSession();
		BlogPost blogPost=(BlogPost)session.get(BlogPost.class,id);
		blogPost.setApproved(true);
		session.update(blogPost);
		Notification notification=new Notification();
		notification.setBlogTitle(blogPost.getBlogTitle());
		notification.setEmail(blogPost.getPostedBy().getEmail());
		notification.setApprovalStatus("Approved");
		session.save(notification);
	}

	public void blogRejected(int id, String rejectionReason) {
		Session session=sessionFactory.getCurrentSession();
		BlogPost blogPost=(BlogPost)session.get(BlogPost.class,id);
		Notification notification=new Notification();
		notification.setBlogTitle(blogPost.getBlogTitle());
		notification.setEmail(blogPost.getPostedBy().getEmail());
		notification.setApprovalStatus("Rejected");
		notification.setRejectionReason(rejectionReason);
		session.save(notification);
		session.delete(blogPost);
	}

	public void addBlogComment(BlogComment blogComment) {
		Session session=sessionFactory.getCurrentSession();
		session.save(blogComment);
		
	}

	public List<BlogComment> getAllBlogComments(int blogPostId) {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogComment where blogPostId=?");
		query.setInteger(0, blogPostId);
		List<BlogComment> blogComments=query.list();
		return blogComments;
	}

	@Override
	public List<BlogPost> getBlogsApproved() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<BlogPost> getBlogsWaitingForApproval() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BlogPost getBlog(int blogPostId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void approveBlogPost(BlogPost blogPost) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void rejectBlogPost(BlogPost blogPost) {
		// TODO Auto-generated method stub
		
	}
	
	
	/*
	public void addBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.save(blogPost);

	}
	public List<BlogPost> getBlogsApproved() {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogPost where approved=true");
		List<BlogPost> blogsApproved=query.list();
		return blogsApproved;
	}
	public List<BlogPost> getBlogsWaitingForApproval() {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogPost where approved=false");
		List<BlogPost> blogsWaitingForApproval=query.list();
		return blogsWaitingForApproval;
	}
	
	public List<BlogPost> getBlogs() {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogPost");
		List<BlogPost> blogs=query.list();
		return blogs;
	}
	
	
	public BlogPost getBlog(int blogPostId) {
		Session session=sessionFactory.getCurrentSession();
		BlogPost blogPost=(BlogPost)session.get(BlogPost.class, blogPostId);
		return blogPost;
	}
	public void approveBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.update(blogPost);
	}
	public void rejectBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.delete(blogPost);
	} */

	
	

}
