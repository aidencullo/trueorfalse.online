# True or False? Online

A simple web app that generates random true-or-false trivia statements for you to guess! Built with React, this project fetches questions from the [Open Trivia DB](https://opentdb.com/) and provides an engaging, minimal interface for quick play.

## Features

- Random true-or-false questions on every load.
- Clean, responsive design.
- Powered by [Open Trivia DB](https://opentdb.com/).
- Simple structure for easy contribution and extension.

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aidencullo/trueorfalse.online.git
   cd trueorfalse.online
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```
Creates a production-ready build in the `build` folder.

## Usage

Just open the app and try to guess whether the displayed statement is true or false. Refresh for a new question!

## Project Structure

- `src/` – React source code and components
- `public/` – Static files
- `README.md` – Project documentation

## API

- Uses [Open Trivia DB](https://opentdb.com/) to fetch random true-or-false questions.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Trivia questions provided by [Open Trivia DB](https://opentdb.com/).