const validateStatusAPI = (response) => {
  switch (response.status) {
    case 200:
      return {
        data: response.data,
      };
    case 201:
      return {
        data: response.data,
      };
    case 404:
      return {
        data: [],
      };
    case 500: {
      return {
        data: response.data,
      };
    }
    default:
      return {
        status: 500,
        message: "Algo anda mal",
      };
  }
};

export default validateStatusAPI;
