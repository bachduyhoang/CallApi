const url = "https://5fa3d0d9f10026001618df85.mockapi.io/users";

const getUsers = async (link = url, userName = "") => {
  try {
    const response = await fetch(link);
    const data = await response.json();
    await filterAndRenderUser(data, userName);
  } catch (error) {
    console.log(error);
  }
};

const filterAndRenderUser = (data, userName) => {
  const newUser = data.filter((user) => {
    let name = String(user.name).toLowerCase();
    let nameToFind = String(userName).toLowerCase();
    console.log(name, nameToFind);
    if (name.includes(nameToFind)) {
      console.log(user.name);
      return true;
    }
  });

  console.log(newUser);
  let _data = newUser.map((user) => {
    return `
                <div class="col-lg-4 mb-3" data-id="1">
                    <div class="card" style="margin-top: 16px;">
                        <img class="card-img-top"
                            src="${user.avatar}"
                            alt="${user.name}">
                        <div class="card-body">
                            <h5 class="card-title">Name : ${user.name}</h5>
                            <p class="card-text">Website :${user.website}</p>
                            <p class="card-text">Company : ${user.company.name}</p>
                        </div>
                    </div>
                </div>
        `;
  });

  const userHtml = document.querySelector("#list-user");
  userHtml.innerHTML = _data.join(" ");
};

const addEventSubmit = () => {
  const name = document.querySelector("#name");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name && btn) {
      console.log("Click");
      getUsers(url, name.value);
    }
  });
};
getUsers();
addEventSubmit();
