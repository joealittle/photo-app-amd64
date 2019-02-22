const loadFlickr = (key = "photosdata") => {
  // console.log('loadStateFromServer');
  return fetch('/bbc-box-photo-app/ui/loadflickr', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ key }),
  })
    .then(response => {
      if (response.status !== 200) throw new Error('Status code was not a 200');
      return response.json();
    })
    .then(json => {
      if (json.read) {
        return json.result.value;
      }
    })
    .catch(err => {
      console.error(err);
    });
};

const loadInsta = (key = "meta") => {
  // console.log('loadStateFromServer');
  return fetch('/bbc-box-photo-app/ui/loadinsta', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ key }),
  })
    .then(response => {
      if (response.status !== 200) throw new Error('Status code was not a 200');
      return response.json();
    })
    .then(json => {
      if (json.read) {
        return json.result;
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export {
  loadFlickr,
  loadInsta
}
