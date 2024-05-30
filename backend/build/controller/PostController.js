"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post_create = void 0;
const post_create = (req, res) => {
};
exports.post_create = post_create;
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
