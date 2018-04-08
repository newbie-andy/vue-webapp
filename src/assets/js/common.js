let CommonPai = {
    'fetchData': function fetchData(url, method, params) {
        fetch(url, {
            method: method,
            body: JSON.stringify(params)
        }).then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data); 
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}
export default CommonPai;