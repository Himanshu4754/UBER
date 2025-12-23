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
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.
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

## `/maps/get-coordinates` Endpoint

### Description

Retrieves the latitude and longitude for a given address string.

### HTTP Method

`GET`

### Request Query Parameters

- `address` (string, required): The address to geocode (minimum 3 characters).

### Example Response

- `ltd` (number): Latitude.
- `lng` (number): Longitude.

---

## `/maps/get-distance-time` Endpoint

### Description

Calculates the distance and estimated travel time between an origin and a destination.

### HTTP Method

`GET`

### Request Query Parameters

- `origin` (string, required): The starting location.
- `destination` (string, required): The ending location.

### Example Response

- `distance` (object):
    - `text` (string): e.g., "15 km"
    - `value` (number): Distance in meters.
- `duration` (object):
    - `text` (string): e.g., "30 mins"
    - `value` (number): Time in seconds.

---

## `/maps/get-suggestions` Endpoint

### Description

Provides autocomplete suggestions for a partial address input.

### HTTP Method

`GET`

### Request Query Parameters

- `input` (string, required): The partial address to search for (minimum 3 characters).

### Example Response

- `Array` of strings: List of suggested addresses.

---

## `/rides/create` Endpoint

### Description

Creates a new ride request from a user.

### HTTP Method

`POST`

### Authentication

Requires a valid User JWT token.

### Request Body

- `pickup` (string, required): The pickup address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).
- `vehicleType` (string, required): The type of vehicle requested (`auto`, `car`, or `moto`).

### Example Response

- `ride` (object): The created ride details containing status, fare, and pickup/drop locations.

---

## `/rides/get-fare` Endpoint

### Description

Calculates the fare estimate for a ride between two points for all vehicle types.

### HTTP Method

`GET`

### Authentication

Requires a valid User JWT token.

### Request Query Parameters

- `pickup` (string, required): The pickup address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).

### Example Response

- `auto` (number): Fare estimate for Auto.
- `car` (number): Fare estimate for Car.
- `moto` (number): Fare estimate for Moto.

---

## `/rides/confirm` Endpoint

### Description

Allows a Captain to accept/confirm a ride request.

### HTTP Method

`POST`

### Authentication

Requires a valid Captain JWT token.

### Request Body

- `rideId` (string, required): The MongoDB ID of the ride to confirm.

### Example Response

- `ride` (object): Updated ride object with status set to "accepted" and captain details assigned.

---

## `/rides/start-ride` Endpoint

### Description

Starts the ride after the captain verifies the OTP provided by the user.

### HTTP Method

`GET`

### Authentication

Requires a valid Captain JWT token.

### Request Query Parameters

- `rideId` (string, required): The MongoDB ID of the ride.
- `otp` (string, required): The 6-digit OTP provided by the user.

### Example Response

- `ride` (object): Updated ride object with status set to "ongoing".

---

## `/rides/end-ride` Endpoint

### Description

Completes the ride once the destination is reached.

### HTTP Method

`POST`

### Authentication

Requires a valid Captain JWT token.

### Request Body

- `rideId` (string, required): The MongoDB ID of the ride.

### Example Response

- `ride` (object): Updated ride object with status set to "completed".
