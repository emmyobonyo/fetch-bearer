fetch(`https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students?filterByFormula=FIND('Joe'%2C+Name)`, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + 'keyMFJeWyl6wrVGG8',
        'Content-Type': 'application/json'
    }
  })
     .then(resp => resp.json())
     .then(json => console.log(json))