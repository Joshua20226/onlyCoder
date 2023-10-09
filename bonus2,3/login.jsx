let logined
let setLogined
var passwordMatched = false
var url = 'http://127.0.0.1:12345'

$(document).ready(function(){
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitForm);
    var confirmPasswordInput = document.getElementById('confirmPasswordInput');
    confirmPasswordInput.addEventListener('input', handleInputChanges)
})

// get value from input fields then send request to backend
function submitForm(){
    if (passwordMatched){
        var gmail = document.getElementById('emailInput').value
        var password = document.getElementById('passwordInput').value

        fetch(url + '/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json',}, 
            body: JSON.stringify({
                gmail: gmail, 
                password: password
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText)
            }
            return response.json()
        })
        .then(data => {
            // return error message or login token
            if (data.response){
                console.log('Message:', data.response)
            }
            if (data.token){
                alert('Login successfully')
                sessionStorage.setItem('token', data.token)

                // TODO: change url to dashboard
                // window.location.href = '/user'
                
                // for now, change the display on the same page
                setLogined(true)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error:', error)
        })
    }
}

// allow to fetch data if both input fields are the same
// TODO: input validation and sanitization
function handleInputChanges(){
    var confirmPasswordInput = document.getElementById('confirmPasswordInput');
    var passwordInput = document.getElementById('passwordInput');
    var value = confirmPasswordInput.value
    var passwordValue = passwordInput.value
    if (passwordValue != null && value != null && value != passwordValue){
        passwordMatched = false
        $('#confirmPasswordInput').css('border-color', 'red')
    }
    else if (value == ""){
        passwordMatched = false
        $('#confirmPasswordInput').css('border-color', 'black')
    }
    else if (value != "" && value != passwordValue){
        passwordMatched = false
        $('#confirmPasswordInput').css('border-color', 'red')
    }
    else {
        passwordMatched = true
        $('#confirmPasswordInput').css('border-color', 'black')
    }
}


// login form
function Main(){
    [logined, setLogined] = React.useState(false)
    if (!logined){
        return (
            <div id = 'loginFormContainer'>
                <h1 id = 'loginText'>Login</h1>
                <div id = 'loginForm'>
                    <label>Gmail</label><br />
                    <input type="text" id="emailInput" /><br />
                    <label>Password</label><br />
                    <input type="text" id="passwordInput" /><br />
                    <label>Confirm your password</label><br />
                    <input type="text" id="confirmPasswordInput" /><br />
                    <input type="submit" id="submitButton" />
                </div>
            </div>
        );
    }   
    else{
        return (
            <div>
                <h1>Welcome to dashboard</h1>
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById('root'))