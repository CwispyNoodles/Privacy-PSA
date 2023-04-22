import { Progress } from 'antd'
import React, { useState, useEffect } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

function TrainingProgress () {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            increase()
        }, 100)
        return () => clearInterval(interval)
    }, []);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 3;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

    return <div>
        <p className='main' style={{width:"1000px", position:"absolute", left:"50%", transform: "translate(-50%,200%)"}}>
            <h1>Training AI</h1>
            <Progress percent={percent} size={[1000, 20]} />
        </p>
        
    </div>
    
}

export default TrainingProgress