# real-time-chat

npm install express mongoose socket.io bcrypt jsonwebtoken multer multer-gridfs-storage dotenv crypto-js redis socket.io-redis


## To start your app 

1. Create a `.env` file in the workspace root containing `MONGO_URI`,`JWT_SECRET`, `SECRET_KEY` and `PORT` env vars.

2. You need to replace the placeholder `your_mongodb_atlas_uri_here` in the `.env` file with the actual URI of your MongoDB Atlas cluster.
    - This URI is necessary for connecting your application to the MongoDB database hosted on Atlas.

3. You can find the URI in your MongoDB Atlas dashboard under the "Connect" tab of your cluster. It typically looks like this:
    - `mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority`

    - Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your actual MongoDB Atlas credentials.

4. This project utilizes two secret keys for security purposes:

- **JWT_SECRET**: Used for generating and verifying JSON Web Tokens (JWT) for authentication.
- **SECRET_KEY**: Employed for encryption and decryption of sensitive data, such as user passwords and other confidential information.

These keys are essential for ensuring secure authentication and data protection within the application.


4. Once you've replaced the placeholder with your MongoDB Atlas URI,SECRET_KEY and JWT_SECRET, you can start your app by running:
    - npm start


## Architecture Overview:

The real-time chat application follows a structured approach called Model-View-Controller (MVC) to organize its code. Here’s a simple breakdown of each part:

1. `Models`

    Think of models as the blueprints that define how our data is structured. In our chat app, we have models for users and messages, which help us manage user information and chat messages.

2. `Controllers` 

    Controllers are like the traffic managers of our app. They handle the logic behind user actions and interact with both models and views. For example, controllers manage tasks like user login, message encryption, and sending images.

3. `Utils`

    Utilities are like handy tools we use throughout the app. In our case, we have utilities for encrypting data and managing file storage.

4. `Routes`

    Routes act as the paths that users take to navigate through our app. They define the URLs users can access and connect them to specific controller functions. For instance, we have routes for user login and chat features.

5. `Configuration`

    Configuration files help set up our app’s environment and settings. For instance, we have a configuration file for connecting to the database.

6. `Server`

    The server is the heart of our app. It’s where everything comes together. In our main server file, we set up the server itself, connect to the database, define routes, and enable real-time messaging using technologies like Socket.IO.

## Security Considerations and Solutions:

1. `User Authentication`

    We ensure that only authorized users can access certain parts of the app by implementing a secure authentication system using JWT tokens. These tokens are signed with a secret key, making them difficult to tamper with.

2. `Message Encryption`

    To protect user privacy, we encrypt chat messages using a strong encryption method and a secret key. This way, even if someone intercepts the messages, they won’t be able to understand them without the decryption key.

3. `Data Validation and Sanitization`

    We carefully check and clean user input to prevent common security issues like SQL injection or cross-site scripting attacks. This helps keep our app safe from malicious data.

4. `File Upload Security`

    We validate and sanitize file uploads to prevent potential security threats. By checking file types and sizes and storing them securely, we reduce the risk of uploading harmful files.

5. `Database Security`

    We follow best practices to secure our database, such as using strong passwords, encrypting sensitive data, and limiting access to authorized users only.

6. `Session Management`

    Instead of traditional session management, we use JWT tokens for authentication. This eliminates the need for server-side session storage and reduces the risk of session-related attacks like session hijacking.






