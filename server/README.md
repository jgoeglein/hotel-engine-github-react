## Available Scripts

In the project directory, you can run:

### `npm start`

By default, this will start a new node server listening on port 3001.

You can override this by setting your `PORT` environment variable.

### Notes

I didn't write any unit tests for the server since this is an example app for a React position. I also didn't deal with pagination with the API.

I used an in-memory cache - it would be much better architecture to use a distributed system independent of this service so that the caches can be shared, but doing so would make the startup of this example app require a running (redis, memcache, etc) and I decided not to add that dependency.