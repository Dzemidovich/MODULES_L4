const axios = require('axios');

async function loadData(url) {
  let data = [];
  let isLoading = true;
  let error = null;

  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (err) {
    error = err;
  } finally {
    isLoading = false;
  }

  return { data, isLoading, error };
}

module.exports = loadData;
