import path from "path";
import { WorkspaceAgentConversationChannel, processJSImports } from "workershub-sync";

const myConversationChannel: WorkspaceAgentConversationChannel = {
  name: 'My Conversation Channel',
  conversationSettings: {
    type: 'gpt-conversation',
    setup: {
      authToken: '...',
      instructions: '...',
      model: 'gpt-...',
      functions: [
        {
          key: 'myFunction',
          description: 'My Function',
          inputSchema: {
            type: 'object',
            properties: {
              // Your input schema here
            }
          },
          handlerScript: processJSImports(path.join(__dirname, 'myFunctionHandler.js')),
        }
      ]
    }
  },
}

export default myConversationChannel;