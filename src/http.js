

    export default function api (url) {
      return fetch(url).then(response => response.json());
    }
