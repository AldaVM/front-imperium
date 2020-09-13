import { URL_API } from "../constants";

const fetchAPI = (endpoint) => (service) => {
  const url = `${endpoint}/${service}`;

  return {
    getAPI: async (
      config = {
        token: "anytoken",
      }
    ) => {
      try {
        const data = await fetch(url, {
          method: "GET",
          mode: "cors",
          ...config,
        });
        return await data.json();
      } catch (error) {
        return {
          status: 500,
          message: "Algo anda mal",
          error,
        };
      }
    },

    postAPI: async (
      values,
      config = {
        token: "anytoken",
      }
    ) => {
      try {
        const data = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          ...config,
        });
        return await data.json();
      } catch (error) {
        return {
          status: 500,
          message: "Algo anda mal",
          error,
        };
      }
    },

    updateAPI: async (
      values,
      config = {
        token: "anytoken",
      }
    ) => {
      try {
        const data = await fetch(url, {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          ...config,
        });
        return await data.json();
      } catch (error) {
        return {
          status: 500,
          message: "Algo anda mal",
          error,
        };
      }
    },
  };
};

export default fetchAPI(URL_API);
