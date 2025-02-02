export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e9985984camsh37e77c975897415p18820cjsnefc52523f435',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};