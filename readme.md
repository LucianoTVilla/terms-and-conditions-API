# Endpoints

## Disclaimers

#### GET /api/v1/disclaimers
Lists all disclaimers. You can filter disclaimers by text using the text query parameter.
Example: GET /api/v1/disclaimers?text=terms

#### GET /api/v1/disclaimers/:id
Retrieves a single disclaimer by ID.

#### POST /api/v1/disclaimers
Creates a new disclaimer. The body should include name, text, and version fields.

#### PUT /api/v1/disclaimers/:id
Updates an existing disclaimer. The body can include name, text, and version fields.

#### DELETE /api/v1/disclaimers/:id
Deletes a disclaimer by ID.


------------------------

## Acceptances

### GET /api/v1/acceptances
Lists all acceptances. You can filter acceptances by user ID using the user_id query parameter.
Example: GET /api/v1/acceptances?user_id=60d5ecb8b3584c3494e2753f

### POST /api/v1/acceptances
Records a new acceptance. The body should include disclaimer_id and user_id fields.
