# API Usage

These are the different ways to interact with the express server

# Get All Students

**URL** : `/api/students`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": 1,
        "firstname": "Joe",
        "lastname": "Shmo",
        "email": "test@gmail.com",
        "imageUrl": "https://image.flaticon.com/icons/png/512/2886/2886011.png",
        "gpa": 0.4,
        "createdAt": "2021-05-07T16:02:57.737Z",
        "updatedAt": "2021-05-07T16:02:57.739Z",
        "campusId": 1,
        "campus": {
            "id": 1,
            "name": "Hunter College",
            "description": "This is a school in NYC.",
            "imageUrl": "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
            "address": "1",
            "createdAt": "2021-05-07T16:02:57.728Z",
            "updatedAt": "2021-05-07T16:02:57.728Z"
        }
    }, //...
]
```

# Get All Campuses

**URL** : `/api/campuses/`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "name": "Hunter College",
    "description": "This is a school in NYC.",
    "imageUrl": "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
    "address": "1",
    "createdAt": "2021-05-07T16:02:57.728Z",
    "updatedAt": "2021-05-07T16:02:57.728Z",
    "students": [...]
  }, // ...
]
```

# Get Student by ID

**URL** : `/api/students/:id`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 1,
    "firstname": "Joe",
    "lastname": "Shmo",
    "email": "test@gmail.com",
    "imageUrl": "https://image.flaticon.com/icons/png/512/2886/2886011.png",
    "gpa": 0.4,
    "createdAt": "2021-05-07T16:02:57.737Z",
    "updatedAt": "2021-05-07T16:02:57.739Z",
    "campusId": 1,
    "campus": {
        "id": 1,
        "name": "Hunter College",
        "description": "This is a school in NYC.",
        "imageUrl": "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
        "address": "1",
        "createdAt": "2021-05-07T16:02:57.728Z",
        "updatedAt": "2021-05-07T16:02:57.728Z"
    }
}
```

# Get Campus by ID

**URL** : `/api/campuses/:id`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 2,
  "name": "Harvard",
  "description": "This is a school in MA.",
  "imageUrl": "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
  "address": "12",
  "createdAt": "2021-05-07T16:02:57.734Z",
  "updatedAt": "2021-05-07T16:02:57.734Z",
  "students": [...]
}
```

# Add Student

**URL** : `/api/students/`

**Method** : `POST`

**Data constraints**

```json
{
    "firstname": "[Non Null/Empty name]",
    "lastname": "[Non Null/Empty name]",
    "email": "[Valid Email address]",
    "gpa": [0.0 - 4.0], // Optional
    "campusId": "[ID matching Valid Campus]" // Optional
}
```

**Data example**

```json
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "joe@gmail.com",
    "gpa": 2.0
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "imageUrl": "https://image.flaticon.com/icons/png/512/2886/2886011.png",
    "id": 3,
    "firstname": "John",
    "lastname": "Doe",
    "email": "joe@gmail.com",
    "gpa": 2,
    "updatedAt": "2021-05-07T16:18:23.556Z",
    "createdAt": "2021-05-07T16:18:23.556Z",
    "campusId": null
}
```

# Add Campus

**URL** : `/api/campuses/`

**Method** : `POST`

**Data constraints**

```json
{
    "name": "[Non Null/Empty name]",
    "description": "[Description of Campus]",
    "address": "[Non Null/Empty address]",
    "imageUrl": "[Valid URL to Image]" // Optional
}
```

**Data example**

```json
{
    "name": "Baruch College",
    "description": "School in NYC",
    "address": "1234 road"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "imageUrl": "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
    "id": 3,
    "name": "Baruch College",
    "description": "School in NYC",
    "address": "1234 road",
    "updatedAt": "2021-05-07T16:13:40.347Z",
    "createdAt": "2021-05-07T16:13:40.347Z"
}
```

# Delete Student or Campus by ID

**URL** : `/api/students/:id` OR `/api/campuses/:id`

**Method** : `DELETE`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "Deleted a student!"
},
{
    "Deleted a Campus!"
}
```

# Edit Student by ID

**URL** : `/api/students/:id`

**Method** : `PUT`

**Data constraints**: Include as many values as you'd like to update

```json
{
    "firstname": "[Non Null/Empty name]",
    "lastname": "[Non Null/Empty name]",
    "email": "[Valid Email address]",
    "gpa": [0.0 - 4.0],
    "campusId": "[ID matching Valid Campus]"
}
```

**Data example**

URL: http://localhost:5000/api/students/2

```json
{
    "gpa": 4.0
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 2,
    "firstname": "Jane",
    "lastname": "Shmo",
    "email": "test2@gmail.com",
    "imageUrl": "https://image.flaticon.com/icons/png/512/2886/2886011.png",
    "gpa": 4,
    "createdAt": "2021-05-07T16:32:36.126Z",
    "updatedAt": "2021-05-07T17:08:20.535Z",
    "campusId": 2
}
```

# Edit Campus by ID

**URL** : `/api/campuses/:id`

**Method** : `PUT`

**Data constraints**: Include as many values as you'd like to update

```json
{
    "name": "[Non Null/Empty name]",
    "description": "[Description of Campus]",
    "address": "[Non Null/Empty address]",
    "imageUrl": "[Valid URL to Image]"
}
```

**Data example**

URL: http://localhost:5000/api/campuses/2

```json
{
    "address": "Antartica",
    "description": "Cold"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 2,
    "name": "Harvard",
    "description": "Cold",
    "imageUrl": "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
    "address": "Antartica",
    "createdAt": "2021-05-07T16:32:36.119Z",
    "updatedAt": "2021-05-07T17:13:07.609Z"
}
```
