
### TEST SINGLE BACKEND WALLEX MID 2019

---

## Getting Started



1.  git clone https://github.com/abdurhasan/wallex_backend_test.git
    
2.  cd wallex_backend_test && npm install
 
2.  npm run seed

3.  npm run dev    or   npm start
   


## API example as User


1.  POST : http://localhost:3000/api/user/sign_in
            ```
            "email": "user123@mail.com"
            "password": "user123"
            
            OR

            ```
            API_KEY = 
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxMjNAbWFpbC5jb20iLCJwYXNzd29yZCI6InVzZXIxMjMiLCJpYXQiOjE1NjExMzQ5NDR9.2btH6vy3fb4HvOyVdE1y5Oua3UTB0ds-Ur1ycP2GM-o
            
            ```


    
2.  GET : http://localhost:3000/api/user/user_info
 
## API example as Admin


1.  POST : http://localhost:3000/api/admin/sign_in
            ```
            "email": "admin@mail.com"
            "password": "admin"
            
            OR

            ```
            API_KEY = 
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU2MTEzODUzMn0.eElvjrbN4FvENcmHQPtWghEqJj1WAawH4g6Ge37hBrM
            
            ```


    
2.  GET : http://localhost:3000/api/users
        : http://localhost:3000/api/users?API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU2MTEzNTExN30.P-Rupi4d8HpF-p-HQUxkTZM3VkBxmHnJlCafA0crmCY

        
3.  GET : http://localhost:3000/api/banks
        : http://localhost:3000/api/banks?API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU2MTEzNTExN30.P-Rupi4d8HpF-p-HQUxkTZM3VkBxmHnJlCafA0crmCY

4.  GET : http://localhost:3000/api/accounts
        : http://localhost:3000/api/accounts?API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU2MTEzNTExN30.P-Rupi4d8HpF-p-HQUxkTZM3VkBxmHnJlCafA0crmCY
 