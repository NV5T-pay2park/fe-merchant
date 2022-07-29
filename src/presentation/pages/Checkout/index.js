import { Box } from '@mui/system'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import QrReader from 'react-camera-qr'

const QrScanner = () => {

  const [facingMode, setFacingMode] = useState("user")
  const [data, setData] = useState()

  const handleErrorCam = (error) => {
    console.log(error);
  }

  const handleScanCam = (result) => {
    if (result) {
      setData(result)
    }
  }
  
  const handleSwitchCam = () => {
    setFacingMode(facingMode == 'environment' ? 'user' : 'environment')
  }

  return (
      <div style={{ backgroundColor: 'white', height: 'calc(100vh - 56px)', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
          <QrReader
            delay={300}
            onError={handleErrorCam}
            onScan={handleScanCam}
            style={{ width: '100%' }}
            facingMode={facingMode}
          />
          <Box textAlign='center' alignItems='center'>
            <Button onClick={handleSwitchCam}>Switch Cam</Button>
          </Box>
          <div>{JSON.stringify(data)}</div>
      </div>


  )
}

export default QrScanner