/**
 * Angular module
 */
var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/editprofile',{
		templateUrl:'views/updateform.html',
		controller:'UserController'
	})
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'NotificationController'
	})
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
	
	.when('/getalljobs',{
		templateUrl:'views/jobslist.html', 
		controller:'JobController'
	})
	
	.when('/getjob/:id',{// C to V
		templateUrl:'views/jobdetail.html',
		controller:'JobController'
	})
	
		.when('/addblogpost',{
			templateUrl:'views/blogform.html',
			controller:'BlogPostController'
		})
		
		.when('/getblogs',{
			templateUrl:'views/bloglist.html',
			controller:'BlogPostController'
		})
		
	.when('/getblog/:blogPostId',{
		templateUrl:'views/approvalform.html',
		controller:'BlogPostController'
	})
	
	
	
	.when('/blogsapproved',{
		templateUrl:'views/bloglist.html',
		controller:'BlogPostController'
	})
	
	.when('/blogswaitingforapproval',{
		templateUrl:'views/blogswaitingforapproval.html',
		controller:'BlogPostController'
	})
	
	.when('/getnotification/:id',{
		templateUrl:'views/notificationdetails.html',
		controller:'NotificationController'
	})

	/*
	.when('/blogrejected/:id',{
		templateUrl:'views/approvalform.html',
		controller:'BlogPostController'
	})*/
	
//	.when('/addBlog/:id',{
//	templateUrl:'views/bloglist.html',
	//	controller:'BlogPostController'
	//})
	
	.when('/hasuserlikedblogpost/:id',{
		templateUrl:'views/blogpostdetail.html',
		controller:'BlogPostLikesController'
	})
	
	.when('/updatelikes/:id',{
		templateUrl:'views/blogpostdetail.html',
		controller:'BlogPostLikesController'
	})
	
	
	.when('/addfriend/:id',{
	templateUrl:'views/friendlist.html',
	  controller:'FriendController'
	})
		.when('/updatependingrequest',{
		templateUrl:'views/updateform.html',
		controller:'FriendController'
	})
	
	
	.when('/pendingrequests',{
		templateUrl:'views/pendingrequests.html',
		controller:'FriendController'
	})
	
	.when('/suggestedusers',{
		templateUrl:'views/suggestedusers.html',
		controller:'FriendController'
	})

	
	
	.when('/friends',{
		templateUrl:'views/friendlist.html',
		controller:'FriendController'
	})

	/*
	.when('/getnotification/:id',{
		templateUrl:'views/notificationdetails.html',
		controller:'NotificationController'
	})   */
	.when('/uploadprofilepic',{
		templateUrl:'views/uploadprofilepic.html'
	})
	
	
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatController'
	})

	
	.otherwise({
		templateUrl:'views/login.html',
		controller:'UserController'

	})
	
})
app.run(function($rootScope,$cookieStore,UserService,$location){

	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('loggedInUser')
	
		$rootScope.logout=function(){
		UserService.logout().then(function(response){
			$rootScope.successMessage="Loggedout Successfully.."
			delete $rootScope.loggedInUser
			$cookieStore.remove("loggedInUser")
				$location.path('/login')
		},function(response){
			$rootScope.errorMessage="Please login.."
				$location.path('/login')
		})
		
	}
})