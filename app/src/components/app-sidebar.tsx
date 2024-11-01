import { Plus, Briefcase, Zap } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

interface Agent {
  type: 'jim' | 'pam';
  number: number;
}

interface AppSidebarProps {
  agents: Agent[];
  onNewAgentClick: () => void;
  selectedAgentId: string | null;
  onAgentSelect: (agentId: string) => void;
}

export function AppSidebar({ agents, onNewAgentClick, selectedAgentId, onAgentSelect }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold mb-4 text-black">Agents</SidebarGroupLabel>
          <SidebarGroupContent>
            {agents.map((agent, index) => {
              const agentId = `${agent.type}-${agent.number}`;
              return (
                <Button
                  key={index}
                  className="w-full justify-start mb-2"
                  variant={selectedAgentId === agentId ? "default" : "secondary"}
                  onClick={() => onAgentSelect(agentId)}
                >
                  {agent.type === 'jim' ? (
                    <>
                      <Briefcase className="mr-2 h-4 w-4" />
                      J.I.M {agent.number}
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      P.A.M {agent.number}
                    </>
                  )}
                </Button>
              );
            })}
            <Button className="w-full justify-start" variant="ghost" onClick={onNewAgentClick}>
              <Plus className="mr-2 h-4 w-4" />
              New Agent
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
