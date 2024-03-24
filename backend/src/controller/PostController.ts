import { Request, Response } from "express";

export const post_create = (req: Request, res: Response, ) => {

}

/*

GET /post?lastID=...
AUTH -> UserID
<< = neusten 10 Beiträge ab lastID (letzten 100 Zeichen des Textes)

GET /post/:id
AUTH -> UserID
<< = vollständiger Post

POST /post
AUTH -> Creator = UserID
{
    "ImageIDs": [ ... ]
    "Title": "...",
    "Text": "..."
}

PUT /post/:id
AUTH -> Creator = UserID
{
    "ImageIDs": [ ... ]
    "Title": "...",
    "Text": "..."
}

DELETE /post/:id
AUTH -> Creator = UserID

*/