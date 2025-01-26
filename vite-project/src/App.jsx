import { useState } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

function App() {
  const [value, setValue] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [selection, setSelection] = useState(null);
  const [previewMode, setPreviewMode] = useState('desktop');

  const handleTextSelect = () => {
    const selectedText = window.getSelection();
    if (selectedText && selectedText.toString().length > 0) {
      setTooltipVisible(true);
      setSelection(selectedText);
    } else {
      setTooltipVisible(false);
    }
  };

  const applyUnderline = () => {
    if (selection) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.textDecoration = 'underline';
      span.textContent = selection.toString();
      range.deleteContents();
      range.insertNode(span);
      setTooltipVisible(false);
    }
  };

  const handleAddHeadline = () => {
    setValue((prev) => `${prev}<h1>New Headline</h1>`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="editor" onMouseUp={handleTextSelect}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            className="editor-input"
            modules={modules}
          />
          {tooltipVisible && (
            <div className="tooltip">
              <button onClick={applyUnderline}>Underline</button>
              <button onClick={() => setTooltipVisible(false)}>
                <AiOutlineClose />
              </button>
            </div>
          )}
          <div className="add-headline" onClick={handleAddHeadline}>
            <FiPlus />
          </div>
        </div>
        <div className="preview">
          <div className="preview-controls">
            <button onClick={() => setPreviewMode('mobile')}>Mobile</button>
            <button onClick={() => setPreviewMode('tablet')}>Tablet</button>
            <button onClick={() => setPreviewMode('desktop')}>Desktop</button>
          </div>
          <div
            className={`preview-content ${previewMode}`}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
