/// <reference types="react-scripts" />

interface LatestBeeRelease {
  name: string
  html_url: string
}

interface StatusHookCommon {
  isLoading: boolean
  isOk: boolean
}

interface StatusNodeVersionHook extends StatusHookCommon {
  userVersion: string
  latestVersion: string
  latestUrl: string
}
interface StatusEthereumConnectionHook extends StatusHookCommon {
  nodeAddresses: NodeAddresses | null
}
interface StatusTopologyHook extends StatusHookCommon {
  topology: Topology | null
}
