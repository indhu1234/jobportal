/**
 * BlogController
 */
app.controller('BlogPostController',function($scope,$location,BlogService,$rootScope,$sce){


		$scope.addBlogPost=function(blog){
		BlogService.addBlogPost(blog).then(function(response){
			alert('Blog is added successfully and it is waiting for approval')
			$location.path('/home')
		},function(response){
			$rootScope.error=response.data;
			if(response.status==401)
				$location.path('/login')					
		})
	}
		

		//List of blogs waiting for approval
		if($rootScope.loggedInUser.email=='admin@gmail.com'){
		BlogService.getBlogsWaitingForApproval().then(
				function(response){
					$scope.blogswaitingforapproval=response.data //select * from blogpost where approved=false
				},
				function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
		}
		

		//List of blogs approved
		BlogService.getBlogsApproved().then(function(response){
	
			$scope.approvedblogpost=response.data //select * from blogpost where approved=true
			
			},
			function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
		

		$scope.addBold=function(blog){
			if(blog.blogContent==undefined)
				blog.blogContent=""
				blog.blogContent=blog.blogContent + "<b></b>"
		}
		
		$scope.addParagraph=function(blog){
			if(blog.blogContent==undefined)
				blog.blogContent=""
			blog.blogContent=blog.blogContent + "<p></p>"
		}
		$scope.addBreak=function(blog){
			if(blog.blogContent==undefined)
				blog.blogContent=""
			blog.blogContent=blog.blogContent + "<br>"
		}
		$scope.addHeading=function(blog){
			if(blog.blogContent==undefined)
				blog.blogContent=""
			blog.blogContent=blog.blogContent + $scope.heading
		}   
		

})