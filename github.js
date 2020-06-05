//Creating a GitHub class.
class Github {
    //Creating a constructor to get the client_id and the client_secret.
    constructor() {
      this.client_id = '495e236254aba335a231';
      this.client_secret = 'f62159eb502d3037e0e35c33be86241bd3534ff2';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    //Creating a getUser asyn method.
    async getUser(user) {
      //Creating a asynchronous request for the user's profile.
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      //Creating a asynchronous request for the user's repositories.
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      //Getting the JSON version of the requests.
      const profile = await profileResponse.json();
      const repo = await repoResponse.json();
  
      //Returning the profile.
      return {
        profile,
        repo
      }
    }
}