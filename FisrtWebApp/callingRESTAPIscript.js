const userAction = async () => {
    const response = await fetch('http://api.plos.org/search?q=title:DNA');
    
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }