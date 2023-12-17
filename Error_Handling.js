const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789' 
const errorDisplay = document.getElementById('error-message')



fetch(apiUrl)
  .then(response => {
  
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Failed to fetch data')
    }
  })
  .then(data => {

    console.log(('Data retrieved from the API:', data))
  })
  .catch(error => {
 
    console.log('Error', error)
    errorDisplay.textContent =
      'Error: Failed to retrieve data retrieve data from the API'
  })