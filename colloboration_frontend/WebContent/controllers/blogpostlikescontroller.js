/**
 * 
 */

app.controller('BlogPostLikesController',function($scope,$routeParams,$location,BlogService,$sce,$rootScope){
	var id=$routeParams.id;
	$scope.isRejected=false;
	alert('blogpost id is ' + id)
	BlogService.getBlog(id).then(function(response){
		$scope.blogPost=response.data //select * from blogpost where id=?
		$scope.title=$sce.trustAsHtml($scope.blogPost.blogTitle)
		$scope.content=$sce.trustAsHtml($scope.blogPost.blogContent);//blogContent HTML tags
	},function(response){
		$rootScope.error=response.data;
		if(response.status==401)
			$location.path('/login')
	})

	BlogService.hasUserLikedBlogPost(id).then(function(response) {
		if (response.data == '') {
			$scope.isLiked = false
		} else {
			$scope.isLiked = true 
		}
	}, function(response) {
		$rootScope.error = response.data;
		if (response.status == 401)
			$location.path('/login')
	})
	

	$scope.updateLikes=function(id){
		BlogService.updateLikes(id).then(
				function(response){
					$scope.blogPost=response.data
					$scope.isLiked=!$scope.isLiked
				},
				function(response){
					$rootScope.error = response.data;
					if (response.status == 401)
						$location.path('/login')
				})
	}
	
	$scope.showRejectionTxt=function(){
		$scope.isRejected=true;
	}
	
	$scope.approveBlogPost=function(blogPost){
		BlogService.approveBlogPost(blogPost).then(
				function(response){
					$location.path('/getblogs')
				},function(response){
					$rootScope.error=response.data;
					if(response.status == 401)
						$location.path('/login')
				})
		}
	$scope.rejectBlogPost=function(id,rejectionReason){
	 BlogService.rejectBlogPost(blogPost).then(function(response){
		 $location.path('/blogswaitingforapproval')
	 },function(response){
		 $rootScope.error = response.data;
		 if (response.status == 401)
			 $location.path('/login')
	 
	 })
	 
	}
	
	 
    $scope.updateLikes=function(id){
 	   BlogPostService.updateLikes(id).then(
 		function(response){
 			$scope.isLiked=!$scope.isLiked
 			$scope.blogPost=response.data//response.data is blogPost object which has updated likes
 		},	   
 	    function(response){
 			if(response.status==401)
					   $location.path('/login')
 		}
 	   )
    }
    
    $scope.addBlogComment=function(commentTxt,blogPost){//when user clicks button POST COMMENT
 	   //CREATE A BLOGCOMMENT OBJECT AND SET THE VALUE FOR THESE TWO PROPERTIES
 	   $scope.blogComment={}
 	   $scope.blogComment.commentTxt=commentTxt
 	   $scope.blogComment.blogPost=blogPost
 	   console.log($scope.blogComment)
 	   BlogPostService.addBlogComment($scope.blogComment).then(
 			   function(response){
 				   $scope.commentTxt=''  //clear the textarea after posting the comment
 				   $scope.blogComment=response.data //values for all properties
 			   },
 			   function(response){
 				   if(response.status==401)
 					   $location.path('/login')
 			   })
    }
    
    $scope.getAllBlogComments=function(blogPostId){//when user clicks 'show comments'
 	   BlogPostService.getAllBlogComments(blogPostId).then(
 			   function(response){
 				   $scope.blogComments=response.data //Array of blogcomments
 			   },
 			   function(response){
 				   if(response.status==401)
 					   $location.path('/login')
 			   })
    }
})

	
	
	
	
	/*
	$scope.addComment=function(commentTxt,blogPost){
		blogComment={}
		blogComment.commentTxt=commentTxt
		blogComment.blogPost=blogPost;
		BlogService.addComment(blogComment).then(
				function(response){
					getAllBlogComments(id)
				},
				function(response){
					$rootScope.error=response.data;
					if(response.status == 401)
						$location.path('/login')
						else
							console.log(response.data)
				})
	}
	function getAllBlogComments(id){
		BlogService.getAllBlogComments(id).then(
				function(response){
					$scope.blogComments=response.data
				},function(response){
			       $rootScope.error=response.data;
			       if(response.status == 401)
			    	   $location.path('/login')
		})
		
		}	
	getAllBlogComments(id)
})*/
