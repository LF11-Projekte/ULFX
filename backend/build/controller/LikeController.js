/*

GET /post/:postId/like

<< = { has_liked, like_count }

GET /post/:postId/dislike

<< = { has_disliked, dislike_count }

POST /post/:postId/dislike
AUTH -> UserID

DELETE /post/:postId/dislike
AUTH -> UserID

POST /post/:postId/like
AUTH -> UserID

DELETE /post/:postId/like
AUTH -> UserID

*/ 
