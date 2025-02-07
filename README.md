
[![GitHub](https://img.shields.io/badge/GitHub-ReactPlayground-blue?style=flat&logo=github)](https://github.com/Sagelyf/ReactPlayground)

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


react-live-code-playground/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── CodeEditor.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md

## How to Run

1. Clone the repository.
2. Open `index.html` in your web browser.
3. Edit the code in the editor, click **Run Code** for a live preview, or **Save as Textbundle** to export your code.

## License

This project is licensed under the MIT License.

2.	Clone the Repository Locally:

### Open your terminal and run:

```
git clone https://example.com/user/cursor-library.git
```

This creates a local copy in a folder (usually named after the repository).

3.	Create a New Repository on GitHub:

- Log in to your GitHub account.
- Click the “New repository” button.
- Give your repository a name and (optionally) a description.
- Do not initialize with a README (since you’re going to push an existing repository).

4.	Push the Cloned Repository to GitHub:
    
Change to the repository’s directory:

```
cd cursor-library
```

Then remove the existing remote (if it’s not GitHub) and add your GitHub remote:

```
git remote remove origin
git remote add origin https://github.com/yourusername/your-repo-name.git
```
Finally, push all branches and tags:

git push -u origin --all
git push origin --tags



References:
- GitHub Docs on cloning a repository
- GitHub Docs on pushing to a remote repository