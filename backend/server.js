import express from 'express';
const app = express();

// app.get('/',(req,res) =>{
//     res.send('Server is ready');
// });

//get a list of 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {id: 1, text: 'What do you call a fish with no eyes?'},
        {id: 2, text: 'What do you call a cow with no legs?'},
        {id: 3, text: 'What do you call a cow with no legs?'},
        {id: 4, text: 'What do you call a cow with no legs?'},
        {id: 5, text: 'What do you call a cow with no legs?'},
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});