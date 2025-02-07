CodeEditor.tsx


import React, { useRef, useState } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import JSZip from 'jszip';

const CodeEditor: React.FC = () => {
  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const [code, setCode] = useState<string>("// Write your code here\nconsole.log('Hello World');");
  const [previewSrc, setPreviewSrc] = useState<string>("");

  // When the "Run Code" button is clicked, create a full HTML document
  // and load it into the preview iframe.
  const handleRunCode = () => {
    if (typeof code !== 'string') {
      console.error("Code is not a valid string");
      return;
    }
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Live Preview</title>
      </head>
      <body>
        ${code}
      </body>
      </html>
    `;
    try {
      const blob = new Blob([fullHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setPreviewSrc(url);
    } catch (error) {
      console.error("Error creating blob:", error);
    }
  };

  // When "Save as Textbundle" is clicked, package the code into a zip archive
  // (with a text.txt file and an empty assets folder) and trigger its download.
  const handleSaveTextbundle = async () => {
    const zip = new JSZip();
    zip.file("text.txt", code);
    zip.folder("assets");
    try {
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "MyDocument.textbundle";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating zip file:", error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: '1 1 0', padding: '10px' }}>
        <CodeMirror
          value={code}
          height="300px"
          extensions={[javascript()]}
          onChange={(value) => {
            setCode(value);
          }}
          ref={editorRef}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <button onClick={handleRunCode}>Run Code</button>
        <button onClick={handleSaveTextbundle} style={{ marginLeft: '10px' }}>
          Save as Textbundle
        </button>
      </div>
      <div style={{ flex: '1 1 0', border: '1px solid #ccc' }}>
        <iframe
          title="Live Preview"
          src={previewSrc}
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  );
};

export default CodeEditor;