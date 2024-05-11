import { WorkspaceAgentType } from "workershub-sync";
import myAgent from "../agents/myAgent";

const myAgentType: WorkspaceAgentType = {
  name: 'My Agent Type',
  description: 'My Agent Type',
  settings: {},
  actions: [],
  agents: [
    myAgent
  ],
  eventTypes: [],
}

export default myAgentType;