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
  })
};

 searchButton.addEventListener("click",()=>{
   showData();
 })
