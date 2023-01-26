# Contact List Chanllenge

This folder contained a project with 2 parts:
**REST API with TypeScript** using [Express](https://expressjs.com/) and [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client). 
**React With Typescript** using [React](https://reactjs.org/) and [React Query](https://tanstack.com/query/latest)
The example uses an SQLite database file with some initial dummy data which you can find at [`./prisma/dev.db`](./prisma/dev.db).

## Getting started

### 1. Clone example and install dependencies

Clone this repository:

```
git clone https://github.com/nidou-bt/contact-list-challenge
cd contact-list-challenge
```

Install npm dependencies:

```
cd client
npm install
cd ../server
npm install
```

### 2. Generate Prisma Client
Run the following command to create your Prisma Client in server folder.

npx prisma generate

### 3. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `Contact`  table that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.


### 4. Start the REST API server

Please don't forget to add .env file with "PORT"="3001". You can find an example of the file with name .env.example.

```
npm run dev
```

The server is now running on `http://localhost:3001`. You can now run the API requests, e.g. [`http://localhost:3001/api/contact`].

Now, You can access the REST API of the server using the endpoint: localhost:3001

## Next steps
To Start the react client you need to follow this steps:
First add .env file with "REACT_APP_BASE_URL"="3001". You can find an example of the file with name .env.example.
After that you can run the following script
### `npm start`
