//*Dropzone.js*//

import {useDropzone} from 'react-dropzone'
import './dropzone.css'

function Dropzone({ open }) {
  const { getRootProps, isDragActive, getInputProps,acceptedFiles } = useDropzone({});
  const files = acceptedFiles.map((file) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>));
        console.log(files)
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
      {isDragActive ? (
          <p className="dropzone-content">
            Release to drop the files here
          </p>
        ) : (
          <p className="dropzone-content">
            Drag’n’drop some files here, or click to select files
          </p>
        )}
      </div>
      <button type="button" onClick={open} className="btn">
      Click to select files
      </button>
      {files}
     
    </div>
  );
}

export default Dropzone;