import path from "path";
import { WorkspaceEventType, processJSImports } from "workershub-sync";

const myEventType: WorkspaceEventType = {
  key: 'myEventType',
  name: 'My Event Type',
  description: 'My Event Type',
  dataSchema: {
    type: 'object',
    properties: {
      // Your output schema here
    }
  },
  subscribers: [
    {
      name: 'Subscriber 1',
      handlerScript: processJSImports(path.join(__dirname, 'subscriber1Handler.js')),
    }
  ]
}

export default myEventType;