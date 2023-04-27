
// domain/.netlify/functions/hello
const items = [
    {id: 1, name: 'kostya'},
    {id: 2, name: 'valya'}

]

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        // body: JSON.stringify(items),
        body: 'hello world',
    }
}