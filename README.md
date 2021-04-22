# README Generator
Homework for UC Berkeley Extension Coding Bootcamp

![Site](./public/assets/screenshot.png)

## Technologies Used
- Javascript - Backend coding
- Node - JavaScript runtime environment
- express - Node module to browse files
- fs - Node module to write files

## Summary 
This app allows you to take notes and save them.
The notes are persistant so you can come back to look a them at any time.

## How to install
You would need to download the project on your local machine, install node.js then run the command :

```
node install
```

## How to use it
run the commande 

```
node server.js
```

## Code Snippet 
```js
app.delete('/api/notes/:id', (req, res) => {
  var deletion = req.params.id
  for(var i = 0; i < notes.length; i++) {
      if(deletion == notes[i].id) {
        notes.splice(i, 1);
        break;
      }
      
  }
  fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), err => { });
  res.redirect('/notes');
});
```
In this example, I used the splice method to handle the deletion of the selected note.

## Result Example
[Example](https://dylancouzon.github.io/Team_Profile_Generator/dist/Dylan.html)

## Author Links
[LinkedIn](https://www.linkedin.com/in/dcouzon/)
[GitHub](https://github.com/Dylancouzon)

