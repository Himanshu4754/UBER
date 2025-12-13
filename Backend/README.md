# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
- `token` (String): JWT Token

---

## `/users/login` Endpoint

### Description

Authenticates a user and returns a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.
- `token` (String): JWT Token

---

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user. This route is protected and requires a valid JWT.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.

---

## `/users/logout` Endpoint

### Description

Logs out the current user by invalidating the provided JWT token and adding it to the blacklist.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

### Example Response

- `message` (string): "Logged out successfully"

---

## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account and vehicle profile with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters).
  - `lastname` (string, optional): Captain's last name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle carrying capacity (minimum 1).
  - `vehicleType` (string, required): Must be 'car', 'motorcycle', or 'auto'.

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate.
    - `capacity` (number): Vehicle capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (String): JWT Token

---

## `/captains/login` Endpoint

### Description

Authenticates a captain and returns a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate.
    - `capacity` (number): Vehicle capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (String): JWT Token

---

## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated captain.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate.
    - `capacity` (number): Vehicle capacity.
    - `vehicleType` (string): Type of vehicle.

---

## `/captains/logout` Endpoint

### Description

Logs out the current captain by invalidating the provided JWT token and adding it to the blacklist.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the `Authorization` header as a Bearer token or in the `token` cookie.

### Example Response

- `message` (string): "Logged out successfully"

---