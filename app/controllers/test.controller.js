const nextQuery = `
{
    __schema {
        types {
            name
        }
    }
}
`;

const allData = (data) => {
    let sendData = {
        all: data
    }
    return sendData;
}


exports.getAll = async (req, res) => {
    fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com'
        }, 
        body: JSON.stringify({query: nextQuery}),
    
    })
    .then(result => result.json())
    .then(data => {
      if(data.errors){
        res.send(data);
      } else {
        res.send(formatData(data.allData));
      }
    })
    .catch(err=>{
        console.error('Error', err);
        res.send(err);
    });
}