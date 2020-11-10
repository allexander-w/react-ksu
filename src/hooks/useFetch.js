import { useEffect, useState } from "react";

export default (url) => {
  const baseURL = "http://oreshek.000webhostapp.com/api/";

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const doFetch = (options) => {
    setOptions(options);
    setIsLoading(true);
  };

  const asyncFetch = async  () => {
    const data = await (await fetch(baseURL + url, options)).json();
    console.log(options);
    setResponse(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    asyncFetch()
  }, [isLoading, setResponse, setIsLoading]);

  return [{ isLoading, response, error }, doFetch];
};
