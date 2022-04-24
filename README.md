# passionfruit

Web app that allows people to explore passions. For PioneerHacks III. :/

## Dev Notes
- /src contains files for frontend in the react-app
- /pydata contains scripts for web scrapping and data analysis (supposedly)
- /scratch folder is ignored in .gitignore so can be used for testing without destroying the commit history

### Data/Backend
- using BeautifulSoup, pytrends (sorta), Firebase Hosting
- all the links stored in hobbies.json in a list
- probably not very efficient but hey, I'm in a rush
- go one by one and create components for every hobby

### UI/Frontend
- using two.js, list.js (maybe?), Bootstrap, React
- two.js for map of nodes...
- list.js for searching nodes...
- Boostrap for all general UI things
- React to messily glue everything together

## TODOs
- [x] web scraping Wikipedia for list of hobbies
- [x] manipulate data into a readable format for js
- [x] display any random hobbies to try out
- [ ] ability to search nodes for certain hobbies
- [ ] add data on firebase for js to request
- [x] deploy site on firebase
- [ ] add animations, icons, colors, styling, about page