const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.posts', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('Request aborted:', err));

setTimeout(() => controller.abort(), 1000); // Cancels request after 1 sec
