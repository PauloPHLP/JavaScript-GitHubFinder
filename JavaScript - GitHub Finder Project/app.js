//Initializing classes.
const github = new Github;
const ui = new UI;

//Getting elements.
const searchUser = document.getElementById('searchUser');

//Litening the key up event.
searchUser.addEventListener('keyup', (e) => {
  //Getting input text.
  const userText = e.target.value;

  //Checking if the input is empty.
  if(userText !== '') {
   //Making the http call
   github.getUser(userText).then(data => {
      if(data.profile.message === 'Not Found') {
        //Showing error alert.
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Showing the profile.
        ui.showProfile(data.profile);
        ui.showRepos(data.repo);
      }
    })
  } else {
    //Clearing the profile.
    ui.clearProfile();
  }
}); 