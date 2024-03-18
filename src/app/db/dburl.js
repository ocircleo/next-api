const { DB_USER_NAME, DB_USER_PASSWORD } = process.env;
export const dbUrl = `mongodb+srv://${DB_USER_NAME}:${DB_USER_PASSWORD}@ocircleo.zgezjlp.mongodb.net/emmajhonDB?retryWrites=true&w=majority&appName=ocircleo`
