import React, { useRef, useState } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';


  const editorRef = useRef<ReactCodeMirrorRef | null>(null);
  const [code, setCode] = useState<string>("// Write your code here\nconsole.log('Hello World');");
  const [previewSrc, setPreviewSrc] = useState<string>("");
  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const [code, setCode] = useState<string>("// Write your code here\nconsole.log('Hello World');");
  const [previewSrc, setPreviewSrc] = useState<string>("");
  const handleRunCode = (): void => {
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
      const blob: Blob = new Blob([fullHtml], { type: 'text/html' });
      const url: string = URL.createObjectURL(blob);
    try {
    } catch (error: any) {w Blob([fullHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setPreviewSrc(url);
    } catch (error) {
      console.error("Error creating blob:", error);
    }
  };
  const handleSaveTextbundle = async (): Promise<void> => {
    const zip: JSZip = new JSZip();e" is clicked, package the code into a zip archive
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
  return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
  
      </div>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          onChange={(value: string) => {', padding: '10px' }}>
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
        <iframe
          title="Live Preview"
          src={previewSrc}
          style={{ width: '100%', height: '100%' }}
        ></iframe>{ flex: '1 1 0', border: '1px solid #ccc' }}>
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