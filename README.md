
[![GitHub](https://img.shields.io/badge/GitHub-ReactPlayground-blue?style=flat&logo=github)](https://github.com/yourusername/ReactPlayground)

# ReactPlayground
 
README.md

# Live Code Playground

This repository contains a simple live code playground that lets you:

- **Edit HTML code** using a CodeMirror-powered editor.
- **View a live preview** of your code in an iframe.
- **Save your code as a Textbundle**, a zipped package (with a `.textbundle` extension) containing your code and assets.

## Features

- **Live Preview:** Update the preview pane by clicking the "Run Code" button.
- **Textbundle Export:** Save your current code in a portable format.

## Technologies Used

- [CodeMirror](https://codemirror.net/) for code editing.
- [JSZip](https://stuk.github.io/jszip/) for creating zip archives.

## File Structure

live-code-playground/
├── index.html
├── README.md
├── .gitignore
├── package.json       (optional)
├── css/
│   └── main.css
└── js/
└── main.js

## How to Run

1. Clone the repository.
2. Open `index.html` in your web browser.
3. Edit the code in the editor, click **Run Code** for a live preview, or **Save as Textbundle** to export your code.

## License

This project is licensed under the MIT License.