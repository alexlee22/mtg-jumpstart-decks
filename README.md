# mtg-jumpstart-decks

## Overview

A MTG Jumpstart Collection Organiser created using Create-React-App, React hooks and Material-UI using scaped data from [the official Jumpstart Decklist (18/06/2020)](https://magic.wizards.com/en/articles/archive/feature/jumpstart-decklists-2020-06-18). [Click here to view the live version.](https://alexlee22.github.io/mtg-jumpstart-decks/)

### Features

- Save and load a list of decks you own to local storage,
- Send a link with parameters containing a list of decks,
- Search for card or deck names,
- Designed for mobile, tablet and PC (tba).

### Packages

- [create-react-app](https://github.com/facebook/create-react-app)
- [material-ui](https://material-ui.com/) - Google's Material Design in easy to use React components
- [react-router](https://www.styled-components.com/) - for query parameters
- [redux](https://redux.js.org/introduction/getting-started) - cross-component state management

## How to use (already online)

### Managing decklists

Press the Save button to

### Searching


## Running the project

Before running the site, ensure the following are installed and your terminal can run the following (developed on the following):

- `node v14.16.1`
- `npm v6.14.12`

To install the required packages:

1. Clone the git repo to your location of choice (or download the files directly from GitHub),
2. Navigate to the folder in terminal,
3. Run the command `npm install` in your terminal,
4. (OPTIONAL) Edit the default list at `src/data/user.json` for automatically assigned decks,
5. Run the command `npm run start` to run in development mode.

There are multiple commands to start the code, check `scripts` in the file `package.json` for the full list of commands to run. You can either run the app as ***local server** or **compile static** ready for deployment. See below for more information.

### Build Static Files

`npm run build`

This command will compile all the required files to run the site inside the folder `/build`. You can run the site using these files on a static hosting service. Below is a command for easy deploying to **GitHub Pages**.

### Deploy to GH Pages

`npm run deploy`

Inside your `package.json` file on the line starting with `"homepage"`, replace `<USERNAME>` with your GitHub username and `<GITHUB_REPO_NAME>` with the repo in which you want to host your site in.
```
...
"homepage": "http://<USERNAME>.github.io/<GITHUB_REPO_NAME>",
...
```

### Store

The application uses Reacts inbuilt state manger Context to manage the applications data. The store data consist of the following:
```
{
  popup:        // Manage the popup modal
  popupType:    // Popup modal type (delete/save)
  rawDecks:     // Default raw decks stripped from the MTG official site
  userLibrary:        // Default user library from `src/data/user.json` or from localstorage
  searchDictonary:    // Keyname index to search against (card, deck name, etc.)
  searchResults:      // Search results from deck searching
  userDeckFilter:     // Toggle for deck filtering
  favorite:           // Favorite/bookmarked decks
  filter:             // Filter type (tabs)
}
```

To automatically deploy your site to GitHub pages, run `npm run deploy`.

## Credits

- Intellectual Property of Magic the Gathering cards and decks from the Jumpstart collection belong to [Wizards of the Coast](https://company.wizards.com/en). This application was created to aid in personal sorting.



