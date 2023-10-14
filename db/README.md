# DB

## Events

A record of activity on a list.

| Field      | Type    | Description                |
| ---------- | ------- | -------------------------- |
| activity   | "visit" | The type of event          |
| date       | Date    | The date of event          |
| ip_address | String  | The ip address of the user |
| list_id    | String  | The id of the list         |

- RE `ip_address`: we want some simple method for determining the number of
  unique visitors for a list, but there might be a better option for this

## Lists

A collection of words that are associated with a user.

| Field        | Type     | Description                                 |
| ------------ | -------- | ------------------------------------------- |
| id           | String\* | The id of the list                          |
| archived     | Boolean  | Whether the list is archived (i.e. deleted) |
| created_date | Date     | The date the list was created               |
| user_id      | String   | The id of the user                          |
| words        | String   | A comma-separated list of words             |

- Ids are preferably short and memorable, e.g. `abc123`, like Bitly
- Lists are archived (and not deleted), so that we can notify visitors that the
  link is correct but is no longer available

## Users

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| id    | String\* | The id of the user |

- These fields are in addition to whatever is required for authentication
- In general: save as little information as possible
