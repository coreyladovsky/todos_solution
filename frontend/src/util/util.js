export const apiURL = () => {
   return window.location.hostname === "localhost"
      ? "http://localhost:3005"
      : "https://todo-app-cl-720.herokuapp.com";
}