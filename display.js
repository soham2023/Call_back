const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// User the Fetch method to make a GET request to the API

fetch(apiUrl)
  .then(response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  })
  .then(data => {

    console.log('Data retrieved from the API')
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error)
  });