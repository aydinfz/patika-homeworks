import axios from "axios";

async function getData(userID) {
  try {
    const users = await axios(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    const posts = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
    );

    console.log("Users:", users.data);
    console.log("Posts", posts.data);
  } catch (error) {
    console.error(error);
  }
}
//getData(1);

// all data w/ async await
async function allData() {
  const users = await axios(`https://jsonplaceholder.typicode.com/users`);
  users.data.forEach(async (item) => {
    const posts = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${item.id}`
    );
    console.log(item);
    console.log(posts.data);
  });
}
//allData()

// names and post titles of all users w/ promise
const allDataP = () => {
  const users = axios(`https://jsonplaceholder.typicode.com/users`);
  users.then((user) => {
    user.data.forEach((item) => {
      const posts = axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${item.id}`
      );
      posts.then((post) => {
        console.log(
          `************************************${item.name}************************************`
        );
        post.data.forEach((i) => console.log(i.title));
        console.log(" ");
      });
    });
  });
};
//allDataP()

export { getData }