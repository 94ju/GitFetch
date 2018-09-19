const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const ReposButton = document.querySelector(".ReposButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const repos  =document.querySelector(".repos");



const client_id = "Iv1.f31cc8f9b2d65eed";
const client_secret = "051782808038d3d46977a6ebb24fe2b5a4f0620c";

const fectchUsers = async(user) => {
  const api_call =await fetch('https://api.github.com/users/'+user+'?client_id='+client_id+'&client_secret='+client_secret);
  const data = await api_call.json();
  return{data};
};
const fectchrepos = async(user) => {
  const api_call_repos =await fetch(' https://api.github.com/users/'+user+'/repos');
  const data_repos = await api_call_repos.json();
  return{data_repos};
};
const fectcommits = async(user) => {
  const api_call_commits = await fetch(' https://api.github.com/repos/'+user+'/GitFetch/commits');
  const data_repos = await api_call_commits.json();
  return{data_repos};
}
const showData =() => {
  fectchUsers(inputValue.value).then((res)=>{
      //console.log(res);
     urlContainer.innerHTML = 'URL:<span class ="main__profile-value">'+res.data.url+' </span>';
     reposContainer.innerHTML = 'Public Repositories:<span class ="main__profile-value">'+res.data.public_repos+' </span>';
     unContainer.innerHTML = 'Followers:<span class ="main__profile-value">'+res.data.followers+' </span>';
     nameContainer.innerHTML = 'Name:<span class ="main__profile-value">'+res.data.name+' </span>';

  })

  fectcommits(inputValue.value).then((com)=>{

    console.log(com);

    console.log("check");
  })
  // fectchrepos(inputValue.value).then((rep)=>{
  //
  //   var i=0;
  //   console.log(rep);
  //     for(i;i<20;i++){
  //       console.log(rep.data_repos[i].name);
  //     }
  //   console.log("check");
  // })
};
const showRepos =(user) =>{
  fectchrepos(inputValue.value).then((rep)=>{
    repos.innerHTML = 'Name:<span class ="main__profile-value">'+rep.data_repos[0].name+' </span>';
    var i=0;
    console.log(rep);
      for(i;i<20;i++){
        console.log(rep.data_repos[i].name);
      }
    console.log("check");
  })
}
searchButton.addEventListener("click",()=>{
   console.log("Hello");
   showData();
})
ReposButton.addEventListener("click",()=>{
   console.log("Hello");
    showRepos();
  window.location.replace("repos.html");

})
