# onlyCoder

## Environment Setup(for windows)

### Visual Studio Code Setup
1. Search 'live server' in extension
2. Install it ![image](https://github.com/Joshua20226/onlyCoder/assets/93542302/ed261455-c691-4aa6-acfc-2d258ce9973e)
3. Verify the installation by checking bottom right corner of Visual Studio Code, you would see a button saying Go live. 

### Python Setup
1. Download and install Python 3.10.4 from [here](https://www.python.org/downloads/release/python-3104/).
2. Verify the installation by running `python --version` in your terminal.
3. Install necessary Python packages using pip:
   ```cmd
   pip install -r bonus/requirements.txt
   ```

### JavaScript Setup

1. Download and Install Node.js:
   - Download Node.js v18.18.0 from [here](https://nodejs.org/).
   - Run the installer and follow the on-screen instructions to complete the installation.

2. Verify Installation:
   - Open a terminal and run the following command to verify that Node.js and npm (Node Package Manager, which comes with Node.js) are installed correctly:
     ```cmd
     node -v && npm -v
     ```
     
## Running (level 1)
1. git clone https://github.com/Joshua20226/onlyCoder.git to visual studio code
2. Expand the folder 'level1'
3. Click 'go live' at the bottom right corner
4. A browser should pop up

## Running (level 2, 3)
1. Expand the folder 'bonus'
2. Run 'backend.py' after Python 3.10.4 and libraries are installed on the machine (make sure port: 12345 is available):
   ```terminal
   python bonus/backend.py
   ```
3. I am using an online mongodb and created some custom database and collections as demonstration purpose which i have specific in line 5 in 'mongoSetup.py'. If you want to use your own Mongodb, you could change the url.
4. Follow the instructions in terminal to create another user or use the users I've already created ('gmail': 'joshua2@gmail.com', 'password': 'joshua2pw')
5. Close the 'live server' from level 1 if you haven't and click on login.html inside the folder bonus. Start the 'live server' and a browser should pop up (if doesn't, go to '127.0.0.1:5501/bonus/login.html' on any browser)

Overview: (level 1)
Simple page which uses React to render every component. For demonstration purposes, I have only input some testing data for the UI. 
I could make better fetching and sorting logic for getting users' information from the backend. Also as I don't have the exact image, I've used some random pictures. 
For resizing for different devices and resolutions, I've only used % for styling size and font. If there are any specific requests on size for different resolutions, I could do:
    'if (window.innerHeight < 1080) {$(.element).css('font-size', '80%')'
I structured my css as 'leftContainer', 'rightContainer', 'middleContainer', as I applied the same styling for the 'leftContainer' and 'rightContainer' and just changed the content inside. 

Overview: (level 2,3)
I created a basic strucutre for the login page then add eventlistener to the submit button. If the passwords don't match or empty, the button will not work. 
It checks every time the password field is changed and compares it with the 'Confirm Password'. Then it will send a request to the backend Python server and fetch the information in Mongodb. 
If login information exists in the database, the server will return an unique token which can be stored in the cookie to send along requests lateron to identify user's identity without logging in again. 
