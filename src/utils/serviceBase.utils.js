import { BASE_URL } from "../constants/url";

export const getApiCall = ({ url, dispatch }) => {
  let finalUrl = `${BASE_URL}/${url}`;
  return fetch(finalUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("error here", error);
    });
};

// export const genericApiCall = ({ url, method, data, isFormData }) => {
//   let finalUrl = `${BASE_URL}api/${url}`;
//   return fetch(finalUrl, {
//     method: method,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("aioToken")}`,
//       Accept: "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: data,
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.log("error here", error);
//     });
// };
