import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import {Navigate} from "react-router-dom"
import './App.css'
import React from "react"


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

function Drop () {
    const [goToContact, setGoToContact] = React.useState(false);

    if (goToContact) {
        return <Navigate to='/TrainingProgress'/>
    }
    return (
    <div>
        <p className='main' style={{width:"1000px", position:"absolute", left:"50%", transform: "translate(-50%,0%)"}}>
            <h1>AI Voice Generator</h1>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
            <button className='btn' onClick={() => {
                setGoToContact(true);
            }}>
                Begin Training
            </button>
            
        </p>
  </div>
    );
}

function OnBeginConversion() {
    alert('You clicked me!');
    <div>
        
    </div>
  }

export default Drop;