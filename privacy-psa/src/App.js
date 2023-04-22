import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import {Link, Routes, Route, Router, BrowserRouter, useRoutes,} from "react-router-dom"
import './App.css'
import Drop from './Drop';
import TrainingProgress from './TrainingProgress';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Privacy-PSA' element={<Drop/>}/>
        <Route path='/TrainingProgress' element={<TrainingProgress/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
