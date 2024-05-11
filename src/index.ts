// Install dot env config
import * as dotenv from 'dotenv'
import { WorkspaceSyncData, syncWorkspace } from 'workershub-sync'
import myAgentType from './agentTypes/myAgentType'
dotenv.config()

async function main () {

  // Workspace setup
  const workspaceSyncData: WorkspaceSyncData = {
    name: 'My Workspace',
    description: 'My Workspace',
    agentTypes: [
      myAgentType
    ],
  }

  console.log(
    JSON.stringify(workspaceSyncData, null, 2)
  )

  // // Sync workspace to WorkersHub
  // try {
  //   const { data } = await syncWorkspace({
  //     workspaceData: workspaceSyncData,
  //     workspaceAccessToken: process.env.WORKSPACE_ACCESS_TOKEN+''
  //   })
  //   console.log(data)
  // } catch (err) {
  //   console.log(err.name, err.message)
  // }

  // Set webhooks
  // Set twilio webhook
  // Set telegram webhook 
  // ,,,

}
main()
