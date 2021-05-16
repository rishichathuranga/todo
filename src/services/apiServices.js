const baseurl = 'http://localhost:5000/v1/todo/';

const getAll = () => {
    const insertURL = baseurl+"view" ;
    try {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        const insertData = fetch(insertURL,requestOptions)
        .then(result=>{ 
            return result.json();
        }).then(response => {
            // console.log(response);
            return response;
        })
        return insertData;

    } catch (error) {
        console.log(error);
        console.log('server error');
    }
};

const insert = data => {
    const insertURL = baseurl+"insert" ;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const insertData = fetch(insertURL,requestOptions)
        .then(result=>{ 
            return result.json();
        }).then(response => {
            return response;
        })
        return insertData;

    } catch (error) {
        console.log(error);
        console.log('server error');
    }

  };

  const search = data => {
    const searchURL = baseurl+"search" ;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        };

        const searchData = fetch(searchURL,requestOptions)
        .then(result=>{ 
            return result.json();
        }).then(response => {
            // console.log(response);
            return response;
        })
        return searchData;

    } catch (error) {
        console.log(error);
        console.log('server error');
    }
};

const update = (id, data) => {

    var qData = { id : id, query: data} ;

    const updateURL = baseurl+"update" ;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(qData)
        };

        const updateData = fetch(updateURL,requestOptions)
        .then(result=>{ 
            return result.json();
        }).then(response => {
            // console.log(response);
            return response;
        })
        return updateData;

    } catch (error) {
        console.log(error);
        console.log('server error');
    }
    
  };

  const remove = (id) => {

    const data = { id: id} ;
    const deleteURL = baseurl+"delete" ;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        };

        const deleteData = fetch(deleteURL,requestOptions)
        .then(result=>{ 
            return result.json();
        }).then(response => {
            // console.log(response);
            return response;
        })
        return deleteData;

    } catch (error) {
        console.log(error);
        console.log('server error');
    }
    
  };



const ApiService = {
    getAll,
    insert,
    search,
    update,
    remove
};
  
export default ApiService;