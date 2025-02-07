import React, { useRef, useState } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import { javascript } from '@codemirror/lang-javascript';
import JSZip from 'jszip';

const CodeEditor: React.FC = () => {
  // Declare variables only once:
  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const [code, setCode] = useState<string>("// Write your code here\nconsole.log('Hello World');");
  const [previewSrc, setPreviewSrc] = useState<string>("");

  // Function to run the code and update the live preview
  const handleRunCode = (): void => {
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
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setPreviewSrc(url);
  };

  // Function to package the code as a Textbundle (zip) and trigger download
  const handleSaveTextbundle = async (): Promise<void> => {
    const zip = new JSZip();
    zip.file("text.txt", code);
    zip.folder("assets");
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "MyDocument.textbundle";
    a.click();
    URL.revokeObjectURL(url);
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
