const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");



const client_id = "Iv1.f31cc8f9b2d65eed";

const client_secret = "051782808038d3d46977a6ebb24fe2b5a4f0620c";

const fectchUsers = async(user) => {
const api_call =await fetch('https://api.github.com/users/'+user+'?client_id='+client_id+'&client_secret='+client_secret);

  const data = await api_call.json();
  return{data};
};

const showData =() => {
  fectchUsers(inputValue.value).then((res)=>{
    console.log(res);
    // var name = res.data.login;
    // console.log(name);
    // document.getElementById("Name").innerHTML = name;
    // getElementByClassName('nameContainer').innerHTML ='Name:<span class = "main__profile-value">+ res.data.name + <span>'
    // nameContainer.innerHTML='Name:<span class = "main__profile-value" id="Name">  </span>';
    urlContainer.innerHTML = 'URL:<span class ="main__profile-value">'+res.data.url+' </span>';
     reposContainer.innerHTML = 'Public Repositories:<span class ="main__profile-value">'+res.data.public_repos+' </span>';
     unContainer.innerHTML = 'Followers:<span class ="main__profile-value">'+res.data.followers+' </span>';
     nameContainer.innerHTML = 'Name:<span class ="main__profile-value">'+res.data.name+' </span>';
    //  urlContainer.innerHTML = 'URL:${res.data.login}';
   // nameContainer.innerHTML ='Name:<span class = "main__profile-value"> res.data.login]  <span>;
  //  nameContainer.innerHTML = res.data.name ;
  })
};

 searchButton.addEventListener("click",()=>{
   console.log("Hello");
   showData();
 })
