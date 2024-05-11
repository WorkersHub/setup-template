import { WorkspaceAgent } from "workershub-sync";
import myAction from "../actions/myAction";
import myEventType from "../eventTypes/myEventType";
import myConversationChannel from "../conversationChannels/myConversationChannel";

const myAgent: WorkspaceAgent = {
  name: 'My Agent',
  description: 'My Agent',
  settings: {},
  actions: [
    myAction,
  ],
  eventTypes: [
    myEventType,
  ],
  conversationChannels: [
    myConversationChannel
  ]
}

export default myAgent;