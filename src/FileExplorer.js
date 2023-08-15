import React, { useState } from 'react';
import { Box, Text, Button, Input, Stack } from '@chakra-ui/react';

function FileExplorer() {
  const [files, setFiles] = useState(['example.py', 'script.js']);
  const [fileName, setFileName] = useState('');

  const handleFileCreate  = async () => {
  //   if (fileName && !files.includes(fileName)) {
  //     setFiles([...files, fileName]);
  //     setFileName('');
  //   } else {
  //     alert('File already exists or file name is empty.');
  //   }
  // };

  if (fileName && !files.includes(fileName)) {
    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName }),
      });
    } catch (error) {
    }
  } else {
    alert('File already exists or file name is empty.');
  }
};

  return (
    <Box w="20%" p={4} borderRight="1px solid gray">
      <Text fontSize="xl" mb={4} fontWeight="bold">
        File Explorer
      </Text>
      <Stack spacing={2}>
        <Input
          placeholder="Enter file name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleFileCreate}>
          Create File
        </Button>
      </Stack>
      <Box mt={4}>
        {files.map((file, index) => (
          <FileItem key={index} fileName={file} />
        ))}
      </Box>
    </Box>
  );
}

function FileItem({ fileName }) {
  return (
    <Box p={2} border="1px solid gray" borderRadius="md">
      {fileName}
    </Box>
  );
}

export default FileExplorer;
