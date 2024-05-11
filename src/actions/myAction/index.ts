import { WorkspaceAction, processJSImports } from "workershub-sync";
import path from 'path';

const myAction: WorkspaceAction = {
  key: 'myAction',
  name: 'My Action',
  description: 'My Action',
  handlerScript: processJSImports(path.join(__dirname, 'handler.js'), {
    variableKey: 123
  }),
  inputSchema: {
    type: 'object',
    properties: {
      // Your input schema here
    }
  },
  outputSchema: {
    type: 'object',
    properties: {
      // Your output schema here
    }
  }
}

export default myAction;