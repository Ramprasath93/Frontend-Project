module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
   url:"https://c9de-2405-201-e02b-304d-3861-9f8b-dda7-4147.in.ngrok.io",
  app: {
    keys: env.array('APP_KEYS'),
  },
});
