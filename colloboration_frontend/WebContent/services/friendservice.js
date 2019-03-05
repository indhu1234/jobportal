/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	var BASE_URL = "http://localhost:8084/colloboration_middleware"
	
		friendService.getSuggestedUsersList=function(){
		return $http.get(BASE_URL+ "/suggestedusers")
	}
	

	friendService.addFriendRequest=function(user){
		return $http.post(BASE_URL + "/addfriend",user)
	}
	
	friendService.getAllPendingRequests=function(){
		return $http.get(BASE_URL + "/pendingrequests")
	}
	

	friendService.updatePendingRequest=function(friendRequest){
		return $http.put(BASE_URL + "/updatependingrequest",friendRequest)
		
	}
	

	friendService.listOfFriends=function(){
		return $http.get(BASE_URL + "/friends")
	}
	

	return friendService;
})
