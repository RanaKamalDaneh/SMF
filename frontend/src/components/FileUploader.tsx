import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, CheckCircle } from 'lucide-react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    },
    maxFiles: 1
  });

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="bg-white dark:bg-banking-800 rounded-xl p-6 shadow-banking border border-banking-200 dark:border-banking-700">
      <h3 className="text-lg font-semibold text-banking-900 dark:text-white mb-4">Upload Transaction File</h3>
      
      {!uploadedFile ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
              : 'border-banking-300 dark:border-banking-600 hover:border-primary-400 hover:bg-banking-50 dark:hover:bg-banking-700'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 text-banking-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-banking-900 dark:text-white mb-2">
            {isDragActive ? 'Drop your file here' : 'Drag & drop your file here'}
          </p>
          <p className="text-sm text-banking-500 dark:text-banking-400 mb-4">
            or click to browse files
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Choose File
          </button>
          <p className="text-xs text-banking-500 dark:text-banking-400 mt-4">
            Supports CSV, XLS, XLSX files up to 10MB
          </p>
        </div>
      ) : (
        <div className="border rounded-lg p-4 bg-banking-50 dark:bg-banking-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success-100 dark:bg-success-900/20 rounded-lg flex items-center justify-center">
                <File className="w-5 h-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <p className="font-medium text-banking-900 dark:text-white">{uploadedFile.name}</p>
                <p className="text-sm text-banking-500 dark:text-banking-400">
                  {(uploadedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success-600" />
              <button
                onClick={removeFile}
                className="p-1 text-banking-400 hover:text-danger-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;