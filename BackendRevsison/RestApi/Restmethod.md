# REST API — Beginner Guide

## What is an API?

API stands for **Application Programming Interface**. It's a way for two programs to talk to each other. For example, a mobile app talks to a server using an API to get data like weather, user info, or product lists.

## What is REST?

REST stands for **Representational State Transfer**. It's a set of rules (a style) for designing APIs so they are simple, predictable, and easy to use.

A **REST API** is an API that follows these rules.

## Key Ideas (Simple Definitions)

| Term | Meaning |
|------|---------|
| **Resource** | Any piece of data you can access, like a "user" or a "product". Each resource has its own URL. |
| **Endpoint** | A specific URL where a resource lives, e.g. `/users` or `/products/5`. |
| **HTTP Method** | The action you want to perform on a resource (see table below). |
| **Request** | The message your app sends to the server (asking for or sending data). |
| **Response** | The message the server sends back (usually data or a status). |
| **JSON** | A simple text format used to send data back and forth, e.g. `{"name": "Alex"}`. |
| **Status Code** | A number telling you if the request worked, e.g. `200` (success) or `404` (not found). |

## The 4 Main HTTP Methods

| Method | What it does | Example |
|--------|---------------|---------|
| **GET** | Read/fetch data | Get a list of users |
| **POST** | Create new data | Add a new user |
| **PUT** | Update existing data | Edit a user's info |
| **DELETE** | Remove data | Delete a user |

## A Simple Example

**Request** (asking for a user):
```
GET /users/1
```

**Response** (the server replies with):
```json
{
  "id": 1,
  "name": "Alex",
  "email": "alex@example.com"
}
```

## Common Status Codes to Know

| Code | Meaning |
|------|---------|
| 200 | OK — it worked |
| 201 | Created — new item was made |
| 400 | Bad Request — you sent something wrong |
| 401 | Unauthorized — you need to log in |
| 404 | Not Found — that item doesn't exist |
| 500 | Server Error — something broke on the server |


