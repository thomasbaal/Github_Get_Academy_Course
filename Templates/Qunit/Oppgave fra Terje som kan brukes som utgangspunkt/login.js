  // Model
  let screen = 'login';
  let errorMessage = null;
  let username = null;
  let password = null;




  // view
  show();
  function show() {
      if (screen === 'login') showLoginForm();
      else if (screen === 'main') showMainAppScreen();
  }

  showLoginForm();
  function showLoginForm() {
      document.getElementById("app").innerHTML = `
          <div id="error" style="color: red">${errorMessage || ''}</div>
          <input placeholder="brukernavn"
                  id="username" 
                  type="txt" 
                  oninput="username = this.value"
                  value="${username || ''}" /><br/> 
          <input placeholder="passord" 
                  oninput="password = this.value"
                  id="passord" 
                  type="password" 
                  value="${password || ''}" /> <br/>
          <button onclick="logIn()">Logg inn</button>

`;
  }

  function showMainAppScreen() {
      document.getElementById("app").innerHTML = `
      <small>Du er logget in som Terje.${username} </small>
      <h1>Velkommen til Terjes Super duper mega app</h1>

      `
  }




  // Controller
  function logIn() {
      if (username === 'terje' && password === 'hemmelig') {
          // alert('yei');
          show();
      } else {
          errorMessage = 'Feil brukernavn og/eller passord. Prøv igjen.'
          showLoginForm();
      }
  }

