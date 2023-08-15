import React, { useState } from 'react';
import { Box, Textarea, Button, Divider, Text, Stack } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [logs, setLogs] = useState([]);

  const handleRunClick  = async () => {
    setLogs([...logs, 'Running the code...']);

    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
    }
  };

  return (
    <Box w="80%" p={4}>
      <Text fontSize="xl" mb={4} fontWeight="bold">
        Code Editor
      </Text>
      <Stack spacing={2}>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          size="lg"
          resize="vertical"
          height="500px"
        />
        <Button colorScheme="teal" onClick={handleRunClick}>
          Run Code
        </Button>
      </Stack>
      <Divider my={4} />
      <SyntaxHighlighter language="python" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
      <Logs logs={logs} />
    </Box>
  );
}

function Logs({ logs }) {
  return (
    <Box mt={4}>
      <Text fontSize="xl" fontWeight="bold">
        Logs
      </Text>
      {logs.map((log, index) => (
        <Text key={index} mt={1}>
          {log}
        </Text>
      ))}
    </Box>
  );
}

export default CodeEditor;
