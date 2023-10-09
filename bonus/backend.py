from fastapi import FastAPI, Request
from jose import JWTError, jwt
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import hashlib
import secrets
from datetime import timedelta
import time
import mongoSetup

db_connection = mongoSetup.main()
SECRET_KEY = 'some_secret_key'


def password_hashing(password):
    sha256 = hashlib.sha256()
    sha256 = hashlib.sha256()
    sha256.update(password.encode())
    return sha256.hexdigest()


def checkUser(gmail, password):
    password = password_hashing(password)
    mydb = db_connection['user_db']
    user_collection = mydb['user']
    result = user_collection.find_one({'gmail': gmail, 'password': password})
    return result


def deleteUser(gmail, password):
    password = password_hashing(password)
    mydb = db_connection['user_db']
    user_collection = mydb['user']
    user_collection.delete_one({'gmail': gmail, 'password': password})


def createUser(gmail, password):
    password = password_hashing(password)
    mydb = db_connection['user_db']
    user_collection = mydb['user']
    user_collection.insert_one(
        {'gmail': gmail, 'password': password})


def adminCreateUser():
    finish_creating = False
    while finish_creating == False:

        response = str(
            input('Press Y/y to create user and N/n to exit: ')).lower()
        if response == 'y':
            gmail = str(input('Enter the gmail: '))
            password = str(input('Enter the password: '))
            confirm = str(
                input(f'Gmail: {gmail}, Password: {password}. Press N/n to revoke: ')).lower()
            if confirm == 'n':
                continue
            else:
                createUser(gmail, password)

        else:
            finish_creating = True


# generate session token for repeated login
async def create_token(id, device):
    unique_token = secrets.token_hex(16)
    expiration_time = time.time() + timedelta(hours=1).total_seconds()
    payload = {'user_id': id, 'token_id': unique_token,
               'device': device, 'exp': expiration_time}
    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
    print(token)
    # check if token exists already
    return token


app = FastAPI()

exceptional_origins = ['http://127.0.0.1:5501']

app.add_middleware(
    CORSMiddleware,
    allow_origins=exceptional_origins,  # Replace with your origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# TODO: Setup rate limit and firewall


@app.middleware('http')
async def load_balancer_middleware(request: Request, call_next, device='web'):
    endpoint = str(request.url).split(request.headers['host'])[1]
    if endpoint == '/login':
        # check if passing enough data
        try:
            data = await request.json()
            gmail = data['gmail']
            password = data['password']
        except:
            response = JSONResponse(content={'response': 'Invalid input'})
            response.headers["Access-Control-Allow-Origin"] = exceptional_origins[0]
            response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            response.headers["Access-Control-Allow-Headers"] = "Content-Type"
            print('invalid input')
            return response

        print(gmail, password)
        # check if user exists in database
        result = checkUser(gmail, password)
        if result != None:
            token = await create_token(gmail, device)
            response = JSONResponse(
                content={'response': 'Login successfully', 'token': token})
        else:
            response = JSONResponse(content={'response': 'Login failed'})
        print(result)
        response.headers["Access-Control-Allow-Origin"] = exceptional_origins[0]
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"

        return response


def main():
    adminCreateUser()
    uvicorn.run(app, host='localhost', port=12345)


if __name__ == '__main__':
    main()
