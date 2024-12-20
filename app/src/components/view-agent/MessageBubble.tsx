import { Message } from "@/App";


const bubbleStyle = "px-4 py-2 rounded-3xl";


function InputActionSwitch(action: string): string {
    switch (action) {
        case "mouse_move":
            return "Moving mouse"
        case "left_click":
            return "Left clicking"
        case "right_click":
            return "Right clicking"
        case "scroll_down":
            return "Scrolling down"
        case "scroll_up":
            return "Scrolling up"
        case "screenshot":
            return "Taking screenshot"
        case "type":
            return "Typing"
        default:
            return `Performing action: ${action}`
    }
}


export function MessageBubble({ message }: { message: Message }) {
    if (message['agent-output']) {
        const agentOutput = message['agent-output'];
        if (agentOutput.text) {
            return (
                <div>
                    <p>{agentOutput.text}</p>
                </div>
            )
        }
        if (agentOutput.input?.action) {
            return (
                <div>
                    <p className="italic">{InputActionSwitch(agentOutput.input.action)}</p>
                </div>
            )
        }
        return (
            <div>
                <p>Agent Output: {JSON.stringify(agentOutput)}</p>
            </div>
        )
    }

    if (message['message-type'] === 'prompt') {
        return (
            <div className="w-full flex justify-end items-center">
                <div className={`${bubbleStyle} bg-slate-200 max-w-[80%]`}>
                    <p>{message.text}</p>
                </div>
            </div>
        )
    }

    if (message['text']) {
        return (
            <div>
                <p>{message.text}</p>
            </div>
        )
    }

    return (
        <div>
            <p>{JSON.stringify(message)}</p>
        </div>
    )
}