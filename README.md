# Server Side Routing Module Project

## Introduction

Use `Node.js` and `Express` to build an API that performs _CRUD_ operations on `blog posts`.

## Instructions

### Task 1: Project Setup

<<<<<<< HEAD
- import this repository into your account
- clone **your copy** of this repository.
- **CD into the folder** where you cloned the repository.
- Type `npm install` to download all dependencies.
- To start the server, type `npm run server` from the root folder (where the _package.json_ file is). The server is configured to restart automatically as you make changes.

### Task 2: Minimum Viable Product

- Add the code necessary to implement the endpoints listed below.
- Separate the endpoints that begin with `/api/posts` into a separate `Express Router`.

#### Endpoints

Configure the API to handle to the following routes:

| Method | Endpoint                | Description                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/posts              | Creates a post using the information sent inside the `request body`.                                                                                                        |
| POST   | /api/posts/:id/comments | Creates a comment for the post with the specified id using information sent inside of the `request body`.                                                                   |
| GET    | /api/posts              | Returns an array of all the post objects contained in the database.                                                                                                         |
| GET    | /api/posts/:id          | Returns the post object with the specified id.                                                                                                                              |
| GET    | /api/posts/:id/comments | Returns an array of all the comment objects associated with the post with the specified id.                                                                                 |
| DELETE | /api/posts/:id          | Removes the post with the specified id and returns the **deleted post object**. You may need to make additional calls to the database in order to satisfy this requirement. |
| PUT    | /api/posts/:id          | Updates the post with the specified `id` using data from the `request body`. Returns the modified document, **NOT the original**.                                           |

#### Endpoint Specifications

When the client makes a `POST` request to `/api/posts`:

- If the request body is missing the `title` or `contents` property:

  - cancel the request.
  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide title and contents for the post." }`.
=======
There are two possible ways to submit your project. Your instructor should have communicated which method to use for this project during the Guided Project and in your cohort's Slack channel. If you are still unsure, reach out to Lambda Staff.

#### Option A - Codegrade

- [ ] Fork and clone the repository.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submssion.

#### Option B - Pull Request

- [ ] Fork and clone the repository.
- [ ] Implement your project in a `firstname-lastname` branch.
- [ ] Create a pull request of `firstname-lastname` against your `main` branch.
- [ ] Open the assignment in Canvas and submit your pull request.

### Task 2: Minimum Viable Product

- Add the code necessary to `index.js`, `api/server.js` and `api/posts/posts-router.js` to implement the endpoints listed below.
- Separate the endpoints that begin with `/api/posts` into a separate Express Router inside `api/posts/posts-router.js`.
- Configure the API to handle to the following routes. Some of these endpoints might require more than one call to the provided database helpers inside `api/posts/posts-model.js`.

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    | /api/posts              | Returns **an array of all the post objects** contained in the database                                                                   |
| 2 | GET    | /api/posts/:id          | Returns **the post object with the specified id**                                                                                        |
| 3 | POST   | /api/posts              | Creates a post using the information sent inside the request body and returns **the newly created post object**                          |
| 4 | PUT    | /api/posts/:id          | Updates the post with the specified id using data from the request body and **returns the modified document**, not the original          |
| 5 | DELETE | /api/posts/:id          | Removes the post with the specified id and returns the **deleted post object**                                                           |
| 6 | GET    | /api/posts/:id/comments | Returns an **array of all the comment objects** associated with the post with the specified id                                           |

#### 1 [GET] /api/posts

- If there's an error in retrieving the _posts_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The posts information could not be retrieved" }`.

#### 2 [GET] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _post_ from the database:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post information could not be retrieved" }`.

#### 3 [POST] /api/posts

- If the request body is missing the `title` or `contents` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide title and contents for the post" }`.
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1

- If the information about the _post_ is valid:

  - save the new _post_ the the database.
  - return HTTP status code `201` (Created).
  - return the newly created _post_.

- If there's an error while saving the _post_:
<<<<<<< HEAD
  - cancel the request.
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON object: `{ error: "There was an error while saving the post to the database" }`.

When the client makes a `POST` request to `/api/posts/:id/comments`:
=======
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON: `{ message: "There was an error while saving the post to the database" }`.

#### 4 [PUT] /api/posts/:id
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
<<<<<<< HEAD
  - return the following JSON object: `{ message: "The post with the specified ID does not exist." }`.

- If the request body is missing the `text` property:

  - cancel the request.
  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide text for the comment." }`.

- If the information about the _comment_ is valid:

  - save the new _comment_ the the database.
  - return HTTP status code `201` (Created).
  - return the newly created _comment_.

- If there's an error while saving the _comment_:
  - cancel the request.
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON object: `{ error: "There was an error while saving the comment to the database" }`.

When the client makes a `GET` request to `/api/posts`:

- If there's an error in retrieving the _posts_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The posts information could not be retrieved." }`.

When the client makes a `GET` request to `/api/posts/:id`:

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The post with the specified ID does not exist." }`.

- If there's an error in retrieving the _post_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The post information could not be retrieved." }`.

When the client makes a `GET` request to `/api/posts/:id/comments`:

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The post with the specified ID does not exist." }`.

- If there's an error in retrieving the _comments_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The comments information could not be retrieved." }`.

When the client makes a `DELETE` request to `/api/posts/:id`:
=======
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If the request body is missing the `title` or `contents` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If there's an error when updating the _post_:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post information could not be modified" }`.

- If the post is found and the new information is valid:

  - update the post document in the database using the new information sent in the `request body`.
  - return HTTP status code `200` (OK).
  - return the newly updated _post_.

#### 5 [DELETE] /api/posts/:id
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
<<<<<<< HEAD
  - return the following JSON object: `{ message: "The post with the specified ID does not exist." }`.

- If there's an error in removing the _post_ from the database:
  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The post could not be removed" }`.

When the client makes a `PUT` request to `/api/posts/:id`:
=======
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in removing the _post_ from the database:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post could not be removed" }`.

#### 6 [GET] /api/posts/:id/comments
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
<<<<<<< HEAD
  - return the following JSON object: `{ message: "The post with the specified ID does not exist." }`.

- If the request body is missing the `title` or `contents` property:

  - cancel the request.
  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ errorMessage: "Please provide title and contents for the post." }`.

- If there's an error when updating the _post_:

  - cancel the request.
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ error: "The post information could not be modified." }`.

- If the post is found and the new information is valid:

  - update the post document in the database using the new information sent in the `request body`.
  - return HTTP status code `200` (OK).
  - return the newly updated _post_.
  
=======
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _comments_ from the database:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The comments information could not be retrieved" }`.

>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1
### Database Persistence Helpers

The `data` folder contains a database populated with test `posts`.

<<<<<<< HEAD
Database access will be done using the `db.js` file included inside the `data` folder.

The `db.js` publishes the following methods.

- `find()`: calling find returns a promise that resolves to an array of all the `posts` contained in the database.
- `findById()`: this method expects an `id` as it's only parameter and returns a promise that resolves to the post corresponding to the `id` provided or an empty array if no post with that `id` is found.
=======
Database access will be done using the `posts-model.js` file included inside the `api/posts` folder:

- `find()`: calling find returns a promise that resolves to an array of all the `posts` contained in the database.
- `findById()`: this method expects an `id` as it's only parameter and returns a promise that resolves to the post corresponding to the `id` provided or `undefined` if no post with that `id` is found.
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1
- `insert()`: calling insert passing it a `post` object will add it to the database and return a promise that resolves to an object with the `id` of the inserted post. The object looks like this: `{ id: 123 }`.
- `update()`: accepts two arguments, the first is the `id` of the post to update and the second is an object with the `changes` to apply. It returns a promise that resolves to the count of updated records. If the count is 1 it means the record was updated correctly.
- `remove()`: the remove method accepts an `id` as its first parameter and upon successfully deleting the post from the database it returns a promise that resolves to the number of records deleted.
- `findPostComments()`: the findPostComments accepts a `postId` as its first parameter and returns a promise that resolves to an array of all comments on the post associated with the post id.
<<<<<<< HEAD
- `findCommentById()`: accepts an `id` and returns a promise that resolves to the comment associated with that id.
- `insertComment()`: calling insertComment while passing it a `comment` object will add it to the database and return a promise that resolves to an object with the `id` of the inserted comment. The object looks like this: `{ id: 123 }`. This method will throw an error if the `post_id` field in the `comment` object does not match a valid post id in the database.

Now that we have a way to add, update, remove and retrieve data from the provided database, it is time to work on the API.
=======
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1

### Blog Post Schema

A Blog Post in the database has the following structure:

```js
{
  title: "The post title", // String, required
  contents: "The post contents", // String, required
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Comment Schema

A Comment in the database has the following structure:

```js
{
  text: "The text of the comment", // String, required
  post_id: "The id of the associated post", // Integer, required, must match the id of a post entry in the database
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

<<<<<<< HEAD
=======
#### Notes

- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install additional libraries or add additional scripts.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work.
- Perform basic professional polishing including spell-checking and grammar-checking on your work.

>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1
### Task 3: Stretch Problems

To work on the stretch problems you'll need to enable the `cors` middleware. Follow these steps:

- add the `cors` npm module: `npm i cors`.
- add `server.use(cors())` after `server.use(express.json())`.

Create a new React application and connect it to your server:

- Use `create-react-app` to create an application inside the root folder, name it `client`.
- From the React application connect to the `/api/posts` endpoint in the API and show the list of posts.
- Style the list of posts however you see fit.
<<<<<<< HEAD

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
=======
>>>>>>> 9ea4a6237b59bf08b5dde111e7a9de0cf5a3ebf1
