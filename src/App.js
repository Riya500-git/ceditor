import React from 'react';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <FileExplorer />
        <CodeEditor />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
