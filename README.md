This is a next login demo with auth0<br/>
1. Create a account on https://manage.auth0.com/
2. On the left menu, "Applications"->"Applications", Create an application. Note down the domain, client id, and client secret.
3. Configure the allowed callback urls
    http://localhost:3000/api/auth/callback
4. Configure the allowed logout urls
    http://localhost:3000
5. In the connections tab, enable Username-Password-Authentication and Social (google) options (This means we can login with google account)    
6. On the left menu, "Authentication"->"Database", click "Username-Password-Authentication", then click "try connection" with registration account. (If you sign up (or add by administrator account) with other user account, you can test it as well)
7.  On the left menu, "User management"->"User", manage users.
8.  If you want to disable "sign up" function, check the "Disable Sign Ups" option located in the settings tab of the database you are using.