import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('498c9a2e-b16d-40da-8042-abe618805e66',
        props.user.username,
         props.user.secret
        );
    return (
         <div style={{ height :'100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height :'100%'}} />
    </div>
    )
}
export default ChatsPage